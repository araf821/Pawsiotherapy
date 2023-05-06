import getAnimalById from "@/app/actions/getAnimalById";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  animalId?: string;
}
const SingleAnimalPage = async ({ params }: { params: IParams }) => {
  const animal = await getAnimalById(params);

  if (!animal) {
    return <EmptyState />;
  }

  return <div>{animal?.name}</div>;
};
export default SingleAnimalPage;
