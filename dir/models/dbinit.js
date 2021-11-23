"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
if (!process.env.MONGO_URL) {
    console.info({
        Message: 'DB connection failed',
        error: 'Error: MONGO_URL is not defined, did you create a .env file? Check sample.env for reference',
    });
    process.exit(1);
}
mongoose_1.default
    .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.info({ Message: 'DB connected successfully', error: 'Value: null' }))
    .catch((e) => {
    console.info({ Message: 'DB connection failed', error: e.toString() });
    process.exit(1);
});
