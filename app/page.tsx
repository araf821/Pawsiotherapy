import getAnimals from "./actions/getAnimals";
import AssuranceSection from "./components/AssuranceSection";
import FeaturedSection from "./components/FeaturedSection";
import Hero from "./components/Hero";

export default async function Home() {
  const animals = await getAnimals();

  return (
    <main className="">
      <Hero />
      {animals && (
        <FeaturedSection
          // @ts-ignore
          animals={animals}
        />
      )}
      <AssuranceSection />
    </main>
  );
}
