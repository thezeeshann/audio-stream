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

        // Only send back safe data
        return res.status(201).json({
            success: true,
            data: {
                id: channel.id,
                cid: channel.cid,
                type: channel.type,
                members: channel.state.members,
            },
            message: 'Room created successfully',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
