import axios from "axios";

export const requestGPTApi = async (thema: string, period: string) => {
    const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
    const OPENAI_API_KEY = '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'; 

    const headers = {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
    };

    const body = {
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": `서울에서 ${thema} 중심으로 ${period}일 간 여행을 하려고 해. 날마다 아침 점심 저녁별로 하나씩 관광지 이름을 키워드 형태로 추천해줘`}],
        temperature: 0.7
    };

    try {
        const response: any = await axios.post(OPENAI_ENDPOINT, body, { headers });
        return response.data.choices[0].message.content;
    } catch (e) {
        return 'error';
    }
}

// export const processMessage = (message: string) => {

// }


