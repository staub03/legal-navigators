import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NoSupport({ isNoSupport, setIsNoSupport })  {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
    setIsNoSupport(isNoSupport = false)
  }

  return (
    <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-legalnavverylightpurple p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-legalnavverydarkpurple"
                            >
                                We're so sorry!
                                </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-legalnavverydarkpurple">
                                    Currently we only support the listed law fields.
                                </p>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-legalnavverylightpurple px-4 py-2 text-sm font-medium text-legalnavverydarkpurple focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </div>
    </div>
  )
}
