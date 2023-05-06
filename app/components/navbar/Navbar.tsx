import Container from "../Container";
import Logo from "../Logo";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  return <Container>
    <div className="flex flex-row items-center justify-between gap-3">
          <Logo />
          <DropDownMenu />
        </div>
  </Container>;
};
export default Navbar;
