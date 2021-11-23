require('dotenv').config();
require('./models/dbinit');
import express, {Request, Response} from 'express'
import leaderBoardRouter from './routes/leaderboard';
import cors from 'cors';


const app: express.Application = express();
const PORT: string = process.env.PORT!;
const options = {
    origin: ['http://localhost:3000', 'https://casscade.csivit.com'], 
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
};

app.use(cors(options))
app.use('/leaderboard', leaderBoardRouter);
app.get('/', (req: Request, res: Response ) =>{
    res.send("Hello world!");
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});