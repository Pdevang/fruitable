import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export const NavBarItem = [
  { id: 1, name: "Home", pathName: "/" },
  { id: 2, name: "Shop", pathName: "/shop" },
  { id: 3, name: "Shop Detail", pathName: "/shop-detail" },
  { id: 4, name: "Pages", pathName: "/pages" },
  { id: 5, name: "Contact", pathName: "/contact" },
];

export const NavBarIcon = [
  { icon: <FaSearch />,id:1 },
  { icon: <FaShoppingBag />,id:2 },
  { icon: <FaUser /> ,id:3},
];

export const NavbarTitle = [
  {
    icon: <SlLocationPin className="color-yellow" />,
    text: "123 Street, New York",
    id:1
  },
  { icon: <MdEmail className="color-yellow" />, text: "Email@Example.com" ,id:2},
];
