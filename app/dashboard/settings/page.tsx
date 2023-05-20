import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";

const ProfileSettingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  return <EmptyState title="Under Construction" button />;
};
export default ProfileSettingsPage;
