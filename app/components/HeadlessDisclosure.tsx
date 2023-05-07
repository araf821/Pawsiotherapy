import { Disclosure } from "@headlessui/react";
import { BiChevronDownSquare } from "react-icons/bi";

interface DisclosureProps {
  question: string;
  answer: string;
}

const HeadlessDisclosure: React.FC<DisclosureProps> = ({
  question,
  answer,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="shadow-lg md:text-md flex w-full justify-between rounded-lg bg-zinc-100 px-4 py-2 text-left text-sm font-medium text-zinc-900 transition duration-300 hover:bg-yellow-300 focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-75 lg:text-xl">
            <span>{question}</span>
            <BiChevronDownSquare
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-zinc-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm sm:text-md lg:text-lg text-gray-500">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default HeadlessDisclosure;
