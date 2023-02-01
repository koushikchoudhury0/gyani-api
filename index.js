const express = require('express');
const cors = require('cors');
const { answerOneLinerQuestion } = require('./chatgpt');

const app = express();
app.use(cors()).use(express.json());
app.post('/ask', async(req, res) => {
    if (req.headers.authorization !== process.env.STATIC_TOKEN)
        res.status(403);
    const { question } = req.body;
    if (!question)
        res.status(400);
    res.send(await answerOneLinerQuestion(question));
});
const port = process.env.PORT;
app.listen(port, () => console.log(`Server Running on Port ${port}`));