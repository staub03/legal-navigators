import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from 'openai';

export default function Result ( { isSteps, setIsSteps, request } ) {

   const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const [newQuestion, setNewQuestion] = useEffect('');

    setNewQuestion("Du bist ein Chatbot. Sage Hallo.");

    const generateResponse = async () => {
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };

        let completeOptions = {
            ...options,
            prompt: newQuestion,
        };

        const response = await openai.createCompletion(completeOptions);

        console.log(response.data.choices[0].text);
    };

    return (
        <div></div>
    );
};

