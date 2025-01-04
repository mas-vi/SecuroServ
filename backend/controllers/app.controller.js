const usersManager = require('../managers/users.managers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const appController = {
    getTest: async (req, res) => {
        res.status(200).send("This route works just fine!");
    },
    register: async (req, res) => {
        const { username, password, firstname, lastname, email, company } = req.body;
        if (!username || !password || !firstname || !lastname || !email || !company)
            return res.status(400).json({ 'message': 'username and password required' });

        const user = await usersManager.findUser(username);
        if (user) return res.status(409).json();
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {
                "username": username,
                "password": hashedPassword,
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "company": company
            };

            usersManager.addUser(newUser);
            res.status(201).json({ "success": `new user ${username} created` });
        } catch (err) {
            res.status(500).json({ "message": err.message });
        }
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password)
            return res.status(400).json({ 'message': 'username and password required' });

        const foundUser = await usersManager.findUser(username);
        if (!foundUser) return res.status(401).json();

        const match = await bcrypt.compare(password, foundUser.password);
        if (match) {
            const accessToken = jwt.sign(
                {
                    "username": foundUser.username
                },
                process.env.ACCES_TOKEN_SECRET,
                { expiresIn: "900s" }
            );

            res.cookie("jwt", accessToken, {
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: 'None',
                secure: true, // Ensure secure attribute is set
                httpOnly: true
            });
            res.status(200).json({ accessToken });
        } else {
            res.status(401).json();
        }
    },
    logout: async (req, res) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.status(204).json();
        res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'None' });
        return res.status(204).json();
    }
};

module.exports = appController;

