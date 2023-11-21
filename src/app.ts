import express, { Request, Response } from "express";
import { requestGPTApi } from "./service";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/api", async (req: Request, res: Response) => {
  const duration = req.query.duration as string;
  const destination = req.query.destination as string;

  if (!duration || !destination)
    return res.json("여행지 또는 여행 기간이 입력되지 않았습니다.");

  const response = await requestGPTApi(duration, destination);

  res.send(response);
});

app.listen(PORT, () => {
  console.log("server started");
});
