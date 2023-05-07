import getAnimalsByUserId from "@/app/actions/getAnimalsByUserId";
import Container from "@/app/components/Container";

interface IParams {
  userId?: string;
}

const ProfilePage = async ({ params }: { params: IParams }) => {
  //@ts-ignore
  const animals = await getAnimalsByUserId(params);
  console.log(animals);
  
  return <Container>
    asdf
  </Container>;
};
export default ProfilePage;
