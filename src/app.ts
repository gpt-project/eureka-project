import express, { Request, Response } from "express";
import { requestGPTApi } from "./service";

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/api", async (req: Request, res: Response) => {
  const period = req.body.travelPeriod;
  const place = req.body.place;
  const response = await requestGPTApi(period, place);

  res.send(response);
});

app.listen(PORT, () => {
  console.log("server started");
});
