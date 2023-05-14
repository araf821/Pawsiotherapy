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
          <Disclosure.Button className="md:text-md flex w-full justify-between rounded-lg bg-zinc-50 px-4 py-2 text-left text-sm font-medium text-zinc-900 shadow-lg transition duration-300 hover:bg-[#e19233] focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-75 lg:text-xl">
            <span>{question}</span>
            <BiChevronDownSquare
              className={`${
                open ? "rotate-180" : ""
              } h-5 w-5 text-zinc-500 transition duration-300`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="sm:text-md rounded-md bg-white px-4 pb-2 pt-2 text-sm font-light text-neutral-800 lg:text-lg">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default HeadlessDisclosure;
