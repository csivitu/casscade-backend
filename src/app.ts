require('dotenv').config();
require('./models/dbinit');
import express, {Request, Response} from 'express'
import leaderBoardRouter from './routes/leaderboard';


const app: express.Application = express();
const PORT: string = process.env.PORT!;


app.use('/leaderboard', leaderBoardRouter);
app.get('/', (req: Request, res: Response ) =>{
    res.send("Hello world!");
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});