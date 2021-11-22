import express, {Request, Response} from 'express'
import { request } from 'http';
import Submissions from '../models/submission';

const router: express.Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const submission = await Submissions.find().sort({"score":-1});
    if(!submission){
        res.status(200);
        res.json({error: true, message: "no response from DB"});
    }

    res.status(200);
    res.json({error: false, submission});
    return;
});

export default router;