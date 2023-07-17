import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'

export default function Example() {
  return (
    <div className="relative mx-64 w-2xl py-32 sm:py-48 lg:py-56">
      <div className="max-w-2xl w-full mx-auto text-center">
        <h2 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight pb-8 sm:text-5xl">
        Frequently Asked Questions
        </h2>
      </div>
      <div className="mx-auto w-full rounded-2xl bg-legalnavverylightpurple bg-opacity-40 shadow-lg p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-50 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you store any data?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              No, this website does not store your data. We prioritize your privacy and security, and we understand the importance of safeguarding your personal information. Our commitment is to provide a safe and trustworthy browsing experience. However this his website utilizes the OpenAI API to enhance its functionality and provide you with a interactive and personalized experience. Therefore we send data to OpenAI which can be stored by OpenAI.


              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-50 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What are the risks of sending a lawsuit to a wrong court?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Sending a claim to the wrong court in Germany can lead to various risks and consequences. These include potential lack of jurisdiction, wasted time and increased costs, expiration of the statute of limitations, procedural issues, and inconvenience and delays in the legal process. It is crucial to conduct thorough research and seek legal advice to ensure the claim is filed correctly and in the appropriate court to mitigate these risks.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-50 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Are there different types of courts in Germany, and how do I know which one to approach for my specific case?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Yes, Germany has different types of courts. To determine which court to approach for your specific case, you can use Legal Navigators.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-50 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What factors determine the jurisdiction of a court in Germany?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              The factors that determine the jurisdiction of a court in Germany are mainly the subject matter of the case and the geographical location where the dispute arose or where the defendant is domiciled.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-50 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What are the potential consequences of missing the statute of limitations deadline?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Missing the statute of limitations deadline can result in the loss of the legal right to pursue a claim or file a lawsuit, as the court may refuse to hear the case. This means that the individual would be barred from seeking legal remedies or compensation for their claims.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-50 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Which law field does Legal Navigators support?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              Legal Navigators primarily focuses on providing assistance in prominent fields of civil law. Our platform is designed to help users find the correct court for their lawsuit within these specific areas. While we understand that legal matters can span across various domains, it is important to note that not all law fields allow individuals to handle their lawsuits independently.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
