import DatePicker from "@/app/components/inputs/DatePicker";
import { SafeUser } from "@/app/types";

interface BookingProps {
  currentUser?: SafeUser | null;
  provider?: SafeUser;
}

const BookingSection: React.FC<BookingProps> = ({ currentUser, provider }) => {
  return (
    <div className="bg-zinc-800 p-2 lg:rounded-lg">
      <div className="flex flex-col gap-2 p-2 text-white ">
        <p className="text-lg font-semibold md:text-2xl lg:text-4xl">
          Book A Session
        </p>
        <hr className="border-neutral-300" />
        <div className="mx-2 md:mx-20 my-4 rounded-md bg-slate-50 p-2 text-center text-black">
          <p className="text-md mx-auto max-w-[700px] md:text-lg lg:text-xl">
            To book a session with this little buddy, simply pick a date on
            which you&rsquo;d be available and you will hear back from the owner
            soon!
          </p>
        </div>
      </div>

      <DatePicker />
    </div>
  );
};
export default BookingSection;
