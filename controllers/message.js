import MessageModel from "../models/message.js";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, text } = req.body;

    const message = await MessageModel.create({
      sender: senderId,
      receiver: receiverId,
      text
    });

    res.status(201).json({
      success: true,
      message: "Message sent",
      data: message
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


export const getMessages = async (req, res) => {
    try {
      const { user1, user2 } = req.params;
  
      const messages = await MessageModel.find({
        $or: [
          { sender: user1, receiver: user2 },
          { sender: user2, receiver: user1 }
        ]
      }).sort({ timestamp: 1 });
  
      res.status(200).json({
        success: true,
        data: messages
      });
  
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message
      });
    }
  };
  