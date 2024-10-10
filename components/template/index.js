import {
  Navbar,
  IconButton,
  Footer
} from "../../tailwind";
import Logo from "../logo";

import PropTypes from 'prop-types';


const Index = ({children})=>{
  // consts
  const menus = {
      brand: <Logo />,
      link: [
        {
          label: "HOME",
          href: "/"
        },
        {
          label: "MOVIES",
          href: "/movies"
        },
        {
          label: "VIDEOS",
          href: "/videos"
        },
        {
          label: "BLOG",
          href: "/blog"
        },
        {
          label: "CONTACT",
          href: "/contact"
        }
      ]
  };

  const toolbar = [
    {
      label: <IconButton size="sm" classForIcon="text-white">search</IconButton>
    },
    {
      label: <IconButton theme="error" size="sm">person</IconButton>
    }
  ]

  // markup
  const design = (
    <div>
      <Navbar menu={menus} theme="dark" toolbar={toolbar} variant="three" />
        <div>
          {children}
        </div>
      <Footer />
    </div>
  );
  return design;
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
