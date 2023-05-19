import getAnimals from "./actions/getAnimals";
import AssuranceSection from "./components/home/AssuranceSection";
import FeaturedSection from "./components/home/FeaturedSection";
import Hero from "./components/home/Hero";

export default async function Home() {
  const animals = await getAnimals();

  return (
    <main className="">
      <Hero />
      {animals && animals.length > 4 && (
        <FeaturedSection
          // @ts-ignore
          animals={animals}
        />
      )}
      <AssuranceSection />
    </main>
  );
}
