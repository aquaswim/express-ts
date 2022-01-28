import express from 'express';

const ridMiddleware: express.RequestHandler = (req, res, next) => {
    req.rid = 'lorem ipsum';
    next();
}

export default ridMiddleware;
