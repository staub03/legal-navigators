import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'

export default function Example() {
  return (
    <div className="relative mx-64 w-2xl py-32 sm:py-40 lg:py-40">
      <div className="max-w-2xl w-full mx-auto text-center">
        <h2 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight pb-8 sm:text-5xl">
        Things to watch out for in your lawsuit
        </h2>
      </div>
      <div className="mx-auto w-full rounded-2xl bg-legalnavverylightpurple bg-opacity-40 shadow-lg p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>1. Written form</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              To initiate a lawsuit, the plaintiff must send the complaint to the appropriate court by mail or fax. However, according to Section 130a of the German Code of Civil Procedure (ZPO), electronic submission, such as via email, is acceptable only if the court can process the electronic document effectively. It is advisable for the plaintiff to include the date on the complaint and provide at least one copy (duplicate) for each defendant.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>2. Designation as a lawsuit</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              The text should clearly indicate that the plaintiff is filing a lawsuit. This is often done by using the word "Klage" (lawsuit) in the heading. However, it is also sufficient if it is clearly evident from the content of the letter that a lawsuit is being filed.</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>3. Parties</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              In a legal case, the plaintiff needs to provide the full names and valid addresses of both parties involved, including their legal form and representative, if applicable. It is recommended to use the terms "plaintiff" and "defendant" for clarity. A physical address is required, while a post office box is not acceptable for formal delivery.</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>4. Subject matter of the action and amount in dispute</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              It is advisable to start by stating the names of the parties involved and providing a brief description of the lawsuit's subject matter. A concise term such as "payment claim" or "restitution claim" is adequate at this stage.

Following that, the plaintiff should indicate the disputed amount. This is necessary for the local court to determine its jurisdiction and the necessary court fee deposit. The court will ultimately make the final determination of the disputed amount at the conclusion of the proceedings.</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>5. Applications</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              The lawsuit must contain a clear request specifying the judgment the plaintiff seeks against the defendant. It is customary to file a lawsuit against the defendant and make specific requests, such as a monetary payment or the return of a particular item. If the plaintiff also demands interest, this must be clearly stated in the request. The court decides on the costs of the legal dispute ex officio, but it is customary to request that the defendant bear the costs. If the district court rules in favor of the plaintiff, the defendant can appeal to the regional court if the disputed amount exceeds a certain threshold or if the district court grants permission to appeal. The plaintiff can also request that the judgment be provisionally enforceable and, if necessary, provide security. Additionally, in the complaint, the plaintiff can request that if there is a written preliminary procedure, a default judgment be issued against the defendant if they fail to indicate a defense within the deadline set by the court.</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>6. Cicumstanes of the case</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              The plaintiff is required to provide a summary of the case in the complaint. They must present all the facts that support their claim. It is important for the plaintiff to describe the situation objectively, comprehensively, and clearly. The goal is to enable the judge to understand the sequence of events. The plaintiff should keep in mind that initially, the judge will have to assess the case based solely on the case file. In a claim for compensation based on a contract, the summary typically includes the description of the contract agreement ("assignment"), complete and proper performance of the obligations, invoicing, and any additional correspondence. If the plaintiff is claiming default interest, they need to clearly explain why and since when the defendant has been in default.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>7. Offers of proof</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              The plaintiff should submit offers of proof along with the presentation of the facts. It is advisable to list the corresponding means of evidence in a separate paragraph after each fact. In civil proceedings, evidence can include witnesses, experts, documents, and examination of the parties, in addition to the judge's direct observation (inspection) during an on-site visit.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>8. Legal explanations</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              It is not mandatory to present the legal situation. Instead, it is generally the responsibility of the court to draw the legal conclusions from the presented facts. However, the plaintiff is not prohibited from pointing out specific legal aspects to the court. As a form of self-check, the plaintiff should consider identifying the clauses of a contract or law on which the claimed right is based.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>9. Court costs</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              To file a lawsuit, a court fee advance payment must be deposited in the amount regulated by the Court Costs Act. Otherwise, the court will not serve the complaint to the defendant. The service of the complaint is crucial for establishing a legal relationship and the "pendency" of the lawsuit. While not mandatory, it is advisable, for self-verification purposes, to mention in the complaint the completed payment of the court fee advance, either already made or to be made concurrently with the submission of the complaint.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-legalnavverylightpurple bg-opacity-0 px-4 py-2 text-left text-sm font-medium text-legalnavverydarkpurple hover:bg-legalnavverylightpurple focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>10. Signature</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-legalnavverydarkpurple`}
                  />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              The plaintiff or their representative must sign the pleading in legible form. A mere "mark" in the form of a paraphe or initials is not sufficient. Instead, a signature with the name must be recognizable, clearly indicating that the signer assumes the substantive responsibility for the pleading.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
