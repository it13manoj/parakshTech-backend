const bcrypt = require('bcrypt');
const Message = require("../helper/utils");
const db = require('../Module/User');
const { generateToken } = require('../hooks/token');

class Users {
    login = async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await db.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ success: false, message: Message.AUTH.LOGIN_FAILED });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ success: false, message: Message.ERROR.FORBIDDEN });
            }
            const token = generateToken({ id: user.id, email: user.email });
            res.status(200).json(Message.RESPONSEDATA({ MESSAGE: "SUCCESSFULLY LOGIN", RESULTS: token }));
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: Message.ERROR.FORBIDDEN });
        }
    };

    findOne = async (req, res) => {
        try {
            const userId = req.user.id;
            const user = await db.findOne({
                where: { id: userId },
                attributes: ['id', 'name', 'email', 'dob', 'gender', 'type'] // exclude password
            });
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }
            res.json(Message.RESPONSEDATA({MESSAGE:"recoreds", RESULTS: user}));
        } catch (err) {
            res.status(500).json({ success: false, message: "Server error" });
        }
    };

    create = async (req, res) => {
        try {
            const { name, email, password, dob, gender, type } = req.body;
            const user = await db.create({ name, email, password, dob, gender, type });
            res.status(201).json({ success: true, message: Message.SUCCESS.REGISTER_SUCCESS });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: Message.ERROR.VALIDATION_FAILED });
        }
    };
}

module.exports = Users;