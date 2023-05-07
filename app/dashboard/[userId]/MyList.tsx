import Heading from "@/app/components/Heading";
import AnimalCard from "@/app/find/animals/AnimalCard";
import { SafeAnimal } from "@/app/types";

interface MyListProps {
  animals?: SafeAnimal[] | null;
}

const MyList: React.FC<MyListProps> = ({ animals }) => {
  return (
    <section className="my-10">
      <div>
        <Heading title="My Listings" />
        <hr />
      </div>
      <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {animals?.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
};
export default MyList;
