import { SafeAnimal } from "../types";
import Container from "./Container";

interface FeaturedProps {
  animals: SafeAnimal[];
}

const FeaturedSection: React.FC<FeaturedProps> = ({ animals }) => {
  if (!animals) {
    return null;
  }

  return (
    <div>
        
    </div>
  );
};
export default FeaturedSection;
