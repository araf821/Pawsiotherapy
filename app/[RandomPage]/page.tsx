import EmptyState from "../components/EmptyState";

const RandomPage = () => {
  return (
    <div>
      <EmptyState
        title="Page Not Found"
        subtitle="Where are you trying to go?"
        button
      />
    </div>
  );
};
export default RandomPage;
