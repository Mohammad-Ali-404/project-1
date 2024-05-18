"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
userRouter.get('/create-users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully ",
        data: user,
    });
});
const logger = (req, res, next) => {
    next();
};
app.get('/', (req, res) => {
    res.send('Hello dev!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Got data');
});
exports.default = app;
