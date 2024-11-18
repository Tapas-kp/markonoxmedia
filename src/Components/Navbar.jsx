import { useState } from "react";
import {
  Switch,
  useMediaQuery,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { Themecontext } from "../Contextprovider/Themecontext";

export const Navbar = () => {
  const { mode, setmode } = useContext(Themecontext);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  function click() {
    setmode(!mode);
  }

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbarMain">
        <div className="empty"></div>
        {isMobile ? (
          <>
            <IconButton
              w={10}
              mr={5}
              icon={<HamburgerIcon />}
              onClick={handleDrawerToggle}
              variant="outline"
              aria-label="Open Menu"
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={handleDrawerToggle}
            >
              <DrawerOverlay>
                <DrawerContent h="fit-content">
                  <DrawerCloseButton />
                  <DrawerBody>
                    <ul className="navbar">
                      <li>
                        <a href="#home" onClick={handleDrawerToggle}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#about" onClick={handleDrawerToggle}>
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#skills" onClick={handleDrawerToggle}>
                          Skills
                        </a>
                      </li>
                      <li>
                        <a href="#main-proj" onClick={handleDrawerToggle}>
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="/TapasKumarPalai-FullStackWebDeveloper.pdf"
                          onClick={handleDrawerToggle}
                        >
                          Resume
                        </a>
                      </li>
                      <li>
                        <a href="#contact" onClick={handleDrawerToggle}>
                          Contact
                        </a>
                      </li>
                    </ul>
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        ) : (
          <ul className="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#main-proj">Projects</a>
            </li>
            <li>
              <a
                target="_blank"
                href="/TapasKumarPalai-FullStackWebDeveloper.pdf"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
        <div>
          <Switch className="gandu" onChange={click} />
        </div>
      </div>
    </>
  );
};
