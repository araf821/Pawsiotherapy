"use client";

interface ContainerProps {
  children: React.ReactNode;
  small?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, small }) => {
  return (
    <div
      className={`${
        small ? "max-w-[1250px]" : "max-w-[1750px]"
      } mx-auto px-4 sm:px-6 md:px-10 xl:px-20`}
    >
      {children}
    </div>
  );
};
export default Container;
