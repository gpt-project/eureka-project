import express from 'express';
import { requestGPTApi } from './service';

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api", async (req, res) => {
    const thema = req.body.thema;
    const period = req.body.travelPeriod;
    const response = await requestGPTApi(thema, period);

    res.send(response)
})

app.listen(PORT, () => {
    console.log('server started');
});