import axios from "axios";
import "dotenv/config";

export const requestGPTApi = async (period: string, place: string) => {
  const OPENAI_ENDPOINT = "https://api.openai.com/v1/chat/completions";
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const headers = {
    Authorization: `Bearer ${OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  };

  const body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `${place}에서 ${period}일동안 관광할 수 있는 관광지를 하루에 세곳씩만 추천해주세요.
        destination에는 관광지의 이름, description은 관광지에 대한 설명, plays에는 해당 관광지에서 즐길 거리 2개를 넣어주세요.
        다음 키와 함께 JSON 형식으로 제공하십시오: {day1: [{ destination: "", description: "", plays: ["", ""]}]}
        한국어로 대답하세요.`,
      },
    ],
    temperature: 0.7,
  };

  try {
    const response: any = await axios.post(OPENAI_ENDPOINT, body, { headers });
    console.log(JSON.parse(response.data.choices[0].message.content));
    return JSON.parse(response.data.choices[0].message.content);
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log(e.response);
    }
    return "error";
  }
};
