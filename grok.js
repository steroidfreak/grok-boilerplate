const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();
const api_key = process.env.GROK_API_KEY;
const openai = new OpenAI({
  apiKey: api_key,
  baseURL: "https://api.x.ai/v1",
});

async function  main(){
    const completion = await openai.chat.completions.create({
    model: "grok-beta",
    messages: [
        { role: "system", content: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy." },
        {
        role: "user",
        content: "What is the meaning of life, the universe, and everything?",
        },
    ],
    });

    console.log(completion.choices[0].message);
}

main();