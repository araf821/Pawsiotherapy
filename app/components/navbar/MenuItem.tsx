"use client";

interface ItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<ItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white px-4 py-3 font-semibold transition
    duration-300 hover:bg-yellow-500"
    >
      {label}
    </div>
  );
};
export default MenuItem;
