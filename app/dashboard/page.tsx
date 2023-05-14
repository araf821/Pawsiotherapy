import getAnimalsByUserId from "@/app/actions/getAnimalsByUserId";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import getSessionsByUserId from "@/app/actions/getSessionsByUserId";
import DashboardClient from "./DashboardClient";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const animals = await getAnimalsByUserId(currentUser.id);
  const sessionAnimals = await getSessionsByUserId(currentUser.id);

  return (
    <Container>
      <DashboardClient
        animals={animals}
        sessionAnimals={sessionAnimals}
        currentUser={currentUser}
      />
    </Container>
  );
};
export default ProfilePage;
