import express from 'express';

const responseFormatMiddleware: express.RequestHandler = (req, res, next) => {
    res.API = {
        error(code: number, message = 'Unknown Error', data?: unknown) {
            return res.status(code).json({
                status: false,
                message,
                data,
            });
        },
        success(data: unknown, code = 200, message = 'Success') {
            return res.status(code).json({
                status: true,
                message,
                data,
            });
        },
    };
    next();
};

export default responseFormatMiddleware;
