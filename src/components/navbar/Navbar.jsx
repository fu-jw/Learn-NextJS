import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        {/* <Link href={"/"}>HomePage</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link> */}
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;