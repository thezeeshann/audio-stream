import { StreamChat } from 'stream-chat';
import dotenv from 'dotenv';
dotenv.config();

const serverClient = StreamChat.getInstance(process.env.STREAM_API_KEY, process.env.STREAM_API_SECRET);

export default serverClient;
