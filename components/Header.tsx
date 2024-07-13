import { Disclosure } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export default function Header() {


  return (
    <nav className="bg-white max-w-md  border-b border-[#172934] ">
      <div className="mx-auto flex  max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between gap-72">
          <div className="flex flex-1 items-center justify-left sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-left">
              <Image
                className="block h-8 mt-4 w-auto sm:block lg:block"
                src="/logo.svg"
                width="24"
                height="24"
                alt="logo"
              />
            </div>
          </div>
          <div className=" inset-y-0 right-0 flex items-center">
            {/* Mobile menu button */}
            <Disclosure>
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                <span className="sr-only">Open main menu</span>
                <Bars4Icon className="block h-6 w-6" aria-hidden="true" />
              </Disclosure.Button>
            </Disclosure>
          </div>
        </div>
      </div>
    </nav>


  );
}