import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
const { Configuration, OpenAIApi } = require("openai");


export default function PostalCode( { isSteps, setIsSteps, request, setCourt, setAdress, setWebsite} ) {

  const postalCode = useRef(null);

  async function wait(ms) {
    return new Promise((resolve) => {
      console.log(ms);
      setTimeout(resolve, ms);
    });
  }

async function handleCall () {
    const prompt = "Du bist ein Chatbot. Was ist das richtige Gericht für "+`${request[0]}`+", spezifisch das Thema "+`${request[1]}`+" in Deutschland spezfisich im Ort mit der Postleitzahl "+`${request[2]}`+"? Antworte nur mit dem Namen des Gerichts, der Adresse des Gerichts und der Website. Übermittle die Daten im JSON Format.";
    console.log(prompt)

    const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY
    },
    body: JSON.stringify({
      'prompt': prompt,
      'temperature': 0,
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
    

async function SubmitPostal (e) {
    e.preventDefault();
    request[2]=postalCode.current.value
    console.log(isSteps)
    await (handleCall());
    setIsSteps(isSteps=4)
    await wait(7000);
    setIsSteps(isSteps=5)
    console.log(isSteps)
}

  return (
    <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <form onSubmit={SubmitPostal}>
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
      <div className='back-button py-6 pr-2 flex items-center justify-center '>
                    <Button onClick={() => {setIsSteps(2)}} className='hover:-translate hover:scale-110 duration-300'>
                        <HiOutlineArrowLeft className="ml-0 h-4 w-4" />
                        <p>
                        &nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;
                        </p>                        
                    </Button>
                    </div>
    </form>
    </div>
  )
}