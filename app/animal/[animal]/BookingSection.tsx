import DatePicker from "@/app/components/inputs/DatePicker";
import { SafeUser } from "@/app/types";

interface BookingProps {
  currentUser?: SafeUser | null;
  provider?: SafeUser | null;
  animalId: string;
  animalName: string;
}

const BookingSection: React.FC<BookingProps> = ({
  currentUser,
  provider,
  animalId,
  animalName,
}) => {
  return (
    <div className="bg-zinc-800 xl:rounded-md p-2 xl:mb-10">
      <div className="flex flex-col gap-2 p-2 text-white">
        <p className="text-lg font-semibold md:text-2xl lg:text-4xl">
          <span className="transition hover:scale-95 hover:text-neutral-400">
            B
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            o
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            o
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            k{" "}
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            A{" "}
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            S
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            e
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            s
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            s
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            i
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            o
          </span>
          <span className="transition hover:scale-95 hover:text-neutral-400">
            n
          </span>
        </p>
        <hr className="border-gray-500" />
        <div className="mx-2 my-4 rounded-md bg-slate-50 p-2 text-center text-black md:mx-20">
          <p className="text-md mx-auto max-w-[700px] md:text-lg lg:text-xl">
            To book a session with{" "}
            <span className="capitalize">{animalName}</span>, simply pick a date
            on which you&rsquo;d be available and you will hear back from the
            owner soon!
          </p>
        </div>
      </div>

      <DatePicker
        animalId={animalId}
        currentUser={currentUser}
        provider={provider}
      />
      <hr className="border-gray-500 xl:hidden" />
    </div>
  );
};
export default BookingSection;
