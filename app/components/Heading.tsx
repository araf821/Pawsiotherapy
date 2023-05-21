import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`flex flex-col gap-2 ${center && "items-center"}`}>
      <p
        className={`${lilita.className} text-3xl font-semibold capitalize lg:text-4xl xl:text-5xl`}
      >
        {title}
      </p>
      <p className="sm:text-md text-sm font-light md:text-lg lg:text-xl">
        {subtitle}
      </p>
    </div>
  );
};
export default Heading;
