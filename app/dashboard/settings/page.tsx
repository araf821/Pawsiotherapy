import getCurrentUser from "@/app/actions/getCurrentUser";
import SettingsClient from "./SettingsClient";

const ProfileSettingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  return (
    <div className="mx-auto my-8 flex w-full max-w-[500px] items-center justify-center px-2">
      <SettingsClient currentUser={currentUser} />
    </div>
  );
};
export default ProfileSettingsPage;
