import getAnimals from "./actions/getAnimals";
import FeaturedSection from "./components/FeaturedSection";
import Hero from "./components/Hero";

export default async function Home() {
  const animals = await getAnimals();

  return (
    <main className="">
      <Hero />
      <FeaturedSection
        //@ts-ignore
        animals={animals}
      />
    </main>
  );
}
