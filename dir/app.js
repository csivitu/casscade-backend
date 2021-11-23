"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require('./models/dbinit');
const express_1 = __importDefault(require("express"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const options = {
    origin: ['http://localhost:3000', 'https://casscade.csivit.com'],
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
};
app.use((0, cors_1.default)(options));
app.use('/leaderboard', leaderboard_1.default);
app.get('/', (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
