
<div className='grow'>
<div className="relative isolate px-6 pt-14 lg:px-8">
<Transition appear show={warningOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={() => setWarningOpen(false)}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-100" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex bg-blue-100 min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-legalnavverydarkpurple bg-opacity-0 p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Limitations of Legal Navigator
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Please note the limitations of the Legal Navigator. We should tell you the reasons.
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => setWarningOpen(false)}
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