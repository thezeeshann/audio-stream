import serverClient from '../config/stream.js';


export const createRoom = async (req, res) => {
    try {
        const { roomId, members, createdBy } = req.body;

        const channel = serverClient.channel('messaging', roomId, {
            name: `Room: ${roomId}`,
            members,
            created_by_id: createdBy,
        });

        await channel.create();

        return res.status(201).json({ success: true, channel });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
