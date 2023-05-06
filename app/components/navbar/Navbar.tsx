import Container from "../Container";
import Logo from "../Logo";
import DropDownMenu from "./DropDownMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="z-10 w-full bg-zinc-800 py-6">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3">
          <Logo />
          <DropDownMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
