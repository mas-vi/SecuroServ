const usersManager = require('../managers/users.managers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const appController = {
    getTest: async (req, res) => {
        res.status(200).json({ 'message': 'This route works just fine!' });
    },

    register: async (req, res) => {
        const { username, password, firstname, lastname, email, company } = req.body;

        if (!username || !password || !firstname || !lastname || !email || !company) {
            return res.status(400).json({ 'message': 'All fields are required' });
        }

        try {
            const existingUser = await usersManager.findUser(username);
            if (existingUser) {
                return res.status(409).json({ 'message': 'Username already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {
                username,
                password: hashedPassword,
                firstname,
                lastname,
                email,
                company,
                isAdmin: false,
            };

            await usersManager.addUser(newUser);
            res.status(201).json({ 'success': `New user ${username} created` });
        } catch (err) {
            res.status(500).json({ 'message': err.message });
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ 'message': 'Username and password are required' });
        }

        try {
            const foundUser = await usersManager.findUser(username);
            if (!foundUser) {
                return res.status(401).json({ 'message': 'Invalid credentials' });
            }

            const isPasswordValid = await bcrypt.compare(password, foundUser.password);
            if (!isPasswordValid) {
                return res.status(401).json({ 'message': 'Invalid credentials' });
            }

            const accessToken = jwt.sign(
                { 
                    username: foundUser.username,
                    isAdmin: foundUser.isAdmin,
                 },
                process.env.ACCES_TOKEN_SECRET,
                { expiresIn: "900s" } 
            );
            

            res.cookie("jwt", accessToken, {
                maxAge: 24 * 60 * 60 * 1000, 
                sameSite: 'None',
                secure: true,
                httpOnly: true,
            });

            res.status(200).json({ accessToken });
        } catch (err) {
            res.status(500).json({ 'message': err.message });
        }
    },

    logout: async (req, res) => {
        const cookies = req.cookies;

        if (!cookies?.jwt) {
            return res.status(204).json(); 
        }

        res.clearCookie('jwt', {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });

        res.status(204).json();
    }
};

module.exports = appController;

