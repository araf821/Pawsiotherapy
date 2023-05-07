"use client";

import EmptyState from "./components/EmptyState";

const error = () => {
  return (
    <div className="flex h-[70vh] p-2 items-center justify-center">
      <EmptyState
        title="404 Page Not Found"
        subtitle="Please don't ever come back here again!"
      />
    </div>
  );
};
export default error;
