const SendResponse = (res, statusCode, message, sendObject) => {
    if (!sendObject) {
        return res.status(statusCode).json({
            message
        });
    }
    return res.status(statusCode).json({
        message,
        sendObject
    });
};

export default SendResponse;
