import { SafeAnimal } from "@/app/types";

interface MyListProps {
  animals?: SafeAnimal[] | null;
}

const MyList: React.FC<MyListProps> = ({ animals }) => {
  return <section></section>;
};
export default MyList;
