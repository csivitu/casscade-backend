import mongoose from 'mongoose';

const Submissions = mongoose.model('submissions', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        reuiqred: true,
    },
}));

export default Submissions;