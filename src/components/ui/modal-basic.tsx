import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalBasicProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  width?: string;
  setIsOpen: (value: boolean) => void;
}

export default function ModalBasic({ children, title, isOpen, setIsOpen, width = "w-full" }: ModalBasicProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)}>
        {/* Modal backdrop */}
        <Transition.Child
          className="fixed h-full inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        {/* End: Modal backdrop */}

        {/* Modal dialog */}
        <Transition.Child
          className="fixed inset-0 z-[99999] overflow-hidden h-full flex items-center justify-center transform px-4 sm:px-6"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ttransition ease-out duration-200"
          leaveFrom="oopacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="lg:w-1/4 w-full lg:max-w-6xl mx-auto h-full flex items-center">
            <Dialog.Panel className="w-full h-[90%] aspect-video bg-white rounded-md overflow">
              {/* Modal header */}
              <div className="px-5 py-3 border-b border-slate-200 ">
                <div className="flex justify-between items-center">
                  <Dialog.Title className="font-semibold text-slate-800 ">{title}</Dialog.Title>
                  <button
                    className="text-slate-400 dark:text-slate-500 hover:text-slate-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    <div className="sr-only">Close</div>
                    <svg className="w-4 h-4 fill-current">
                      <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                    </svg>
                  </button>
                </div>
              </div>
              {children}
            </Dialog.Panel>
          </div>
        </Transition.Child>
        {/* End: Modal dialog */}
      </Dialog>
    </Transition>
  );
}
