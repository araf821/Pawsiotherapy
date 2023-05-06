import Container from "../Container";
import Logo from "../Logo";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <div className="bg-zinc-800 w-full py-6 z-10">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3">
          <Logo />
          <DropDownMenu />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
