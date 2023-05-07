interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`flex flex-col gap-2 ${center && "justify-center"}`}>
      <p className="text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </p>
      <p className="sm:text-md text-sm font-light md:text-lg lg:text-xl">
        {subtitle}
      </p>
    </div>
  );
};
export default Heading;
