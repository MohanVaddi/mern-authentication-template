import mongoose, { Document } from 'mongoose';

interface User extends Document {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    date?: any;
}

const UserSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model<User>('User', UserSchema);
