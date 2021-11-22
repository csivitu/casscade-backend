require('dotenv').config();
require('./models/dbinit');
import express, {Request, Response} from 'express'


const app: express.Application = express();
const PORT: string = process.env.PORT!;

app.get('/', (req: Request, res: Response ) =>{
    res.send("Hello world!");
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});