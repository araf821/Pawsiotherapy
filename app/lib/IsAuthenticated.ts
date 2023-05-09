import getCurrentUser from "../actions/getCurrentUser";

export default async function IsAuthenticated() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return false;
  }

  return true;
}
