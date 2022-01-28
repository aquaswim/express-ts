import express from 'express';
import ridMiddleware from "./middlewares/dummy-rid.middleware";
import responseFormatMiddleware from "./middlewares/response-format.middleware";

const app = express();

app.use(ridMiddleware);
app.use(responseFormatMiddleware);

app.use(((req, res) => {
    return res.API.error(404, "Not Found");
}))

app.listen(3000, () => {
    console.log('app started');
})
