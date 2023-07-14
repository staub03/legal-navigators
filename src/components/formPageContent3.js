import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState, useRef } from 'react';
const { Configuration, OpenAIApi } = require("openai");

export default function PostalCode( { isSteps, setIsSteps, request } ) {

  const postalCode = useRef(null);

  function handleCall () { 
  const prompt = "";
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({
      'prompt': "How are you?",
      'temperature': 0.1,
      'max_tokens': 3000,
      'top_p': 1,
      'frequency_penalty': 0,
      'presence_penalty': 0.5,
      'stop': ["\"\"\""],
    })
  };
  fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    }).catch(err => {
      console.log("Error! Try again.");
    });
  }
    

function submitPostal (e) {
    e.preventDefault();
    request[2]=postalCode.current.value
    console.log(request[2]);
    setIsSteps(4)
    handleCall()
    setIsSteps(5)
}

  return (
    <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <form onSubmit={submitPostal}>
        <div className="text-center">
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                What is the postal code of the property?
                </h1>
                </div>
      <div>
        <div className="mx-auto max-w-sm py-10">
        <TextInput
          id="postalCode1"
          name="Postal Code"
          ref={postalCode}
          placeholder="Postal Code"
          required
          type="number"
        />
      </div>
      </div>
      <div className="flex items-center justify-center">
      <Button 
        type="submit"
        className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none border-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3"
      >
        Submit
      </Button>
      </div>
    </form>
    </div>
  )
}