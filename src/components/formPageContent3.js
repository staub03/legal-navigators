import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useRef } from 'react';

export default function PostalCode( { isSteps, setIsSteps, request } ) {

const postalCode = useRef(null);

function submitPostal (e) {
    e.preventDefault();
    request[2]=postalCode.current.value
    console.log(request[2]);
    setIsSteps(4)
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