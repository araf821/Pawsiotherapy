import { SyncLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex h-[70vh] items-center justify-center">
      <SyncLoader color="#111111" />
    </div>
  );
};
export default loading;
