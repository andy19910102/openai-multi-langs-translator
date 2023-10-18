import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: apiKey,
});

export default async function (req, res) {
    // Check that the API key is configured
    if (!apiKey || apiKey === undefined) {
        res.status(500).json({
            error: {
                message: "環境變數 OPENAI_API_KEY 未設定",
            }
        });
        return;
    }

    const userInput = req.body.userInput || '';
    const lang = req.body.lang || '';

    try {
        const prompt = generatePrompt(userInput, lang);
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
            max_tokens: 500
        });
        const aiMessage = completion.choices[0].message.content;
        res.status(200).json({ result: aiMessage });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                }
            });
        }
    }
}

function generatePrompt(userInput, lang) {
    return `
你是一個翻譯，將我傳給你的文案翻譯為「${lang}」：

###
${userInput}
###
`;
}
