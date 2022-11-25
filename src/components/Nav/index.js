import * as React from "react";
import { Text } from "@theme-ui/components";
import { Link } from "gatsby";
import { Breakpoints } from "../../helper/breakpoints";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { useColorMode } from 'theme-ui'
import Button from '../Button'
import { useThemeUI } from 'theme-ui'
import Logo from '../Logo';
const Nav = () => {
  const [hamburgerClicked, setHamburgerClicked] = React.useState(false);
  const { theme: { rawColors } } = useThemeUI()
  const [colorMode, setColorMode] = useColorMode()

  const navData = [
    {
      id: 1,
      link: '/',
      label: 'Clients'
    },
    {
      id: 2,
      link: '/',
      label: 'Work'
    },
    {
      id: 3,
      link: '/',
      label: 'About'
    },
    {
      id: 4,
      link: '/',
      label: 'Get in Touch'
    },
  ]

  const handleBurgerClicked = () => {
    setHamburgerClicked(() => !hamburgerClicked);
  };
  return (
    <GridWrapper
      // as="nav"
      sx={{
        alignItems: "center",
        mt: hamburgerClicked ? '-190px' : '0',
        height:
          hamburgerClicked ? '500px' :
            ["110px", "120px", "100px", "120px", "120px", "120px"],
        position: "relative",
        overflow: "hidden",
        transition: "all 1s",

      }}
    >
      <GridItem
        sx={{
          gridColumn: ["1 / 4"]
        }}>
        <Logo mode={colorMode} />
      </GridItem>
      <GridItem
        sx={{
          gridColumn:
            hamburgerClicked ? '5 / 13' :
              ["5 / span 19"],
          display: "flex",
          flexDirection: ["column", "column", "column", "column", "row", "row"],
          position: [
            "absolute",
            "absolute",
            "absolute",
            "absolute",
            "static",
            "static",
          ],
          justifyContent: "space-between ",
          zIndex: "1",
          "@media screen and (max-width: 700px)": {
          },
          alignItems: "center",
          top: hamburgerClicked ? '300px' : "100px",
          transition: "all 1s",
          transform: hamburgerClicked
            ? "translateX(-10%)"
            : [
              "translateX(-220%)",
              "translateX(-220%)",
              "translateX(-220%)",
              "translateX(-220%)",
              "translate(0)",
              "translate(0)",
            ],
        }}
      >
        {navData.map((menu) => (
          <Link
            key={menu.id}
            to={menu.link}
            activeStyle={{
              borderBottom: "1px solid text",
            }}
            style={{
              color: "#000",
              textDecoration: "none",
              paddingBottom: hamburgerClicked ? '20px' : '0'
            }}
          >
            <Text
              sx={{
                color: rawColors.modes.light.text,
                fontFamily: "body",
                lineHeight: "100%",
                fontSize: ["16px", "16px", "16px", "16px", "16px", "18px"],
                ':hover': {
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                },
              }}
            >
              {menu.label}{" "}
            </Text>
          </Link>
        ))}
        <Button
          sx={{
            mt: hamburgerClicked ? '0' : '25px',
            pl: '60px'
          }}
          buttonTheme="darkMode"
          onClick={(e) => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}>
          {colorMode === 'default' ? 'Night View' : 'Day View'}
        </Button>

      </GridItem>
      <GridItem
        onClick={handleBurgerClicked}
        sx={{
          gridColumn: [
            '12',
            '12',
            '12',
            '24'
          ],
          cursor: "pointer",
          position: hamburgerClicked ? 'absolute' : 'static',
          [Breakpoints.tabletLandscape]: {
            display: "none",
          },
        }}
      >
        <Text
          sx={{
            cursor: "pointer",
            display: "block",
            marginBottom: "5px",
            width: "28px",
            height: "4px",
            backgroundColor: rawColors.modes.light.text,
            borderRadius: "4px",
            transition: "all 0.5s",
            transformOrigin: "0 0",
            transform: hamburgerClicked
              ? "rotate(45deg) translate(-1px, -1px)"
              : "rotate(0)",
          }}
        ></Text>
        <Text
          sx={{
            cursor: "pointer",
            marginBottom: "5px",
            backgroundColor: rawColors.modes.light.text,
            display: hamburgerClicked ? "none" : "block",
            opacity: hamburgerClicked ? "0" : "1",
            width: "28px",
            height: "4px",
            borderRadius: "4px",
            transition: "all 0.5s",
          }}
        >
          {" "}
        </Text>
        <Text
          sx={{
            cursor: "pointer",
            display: "block",
            marginBottom: "5px",
            backgroundColor: rawColors.modes.light.text,
            width: "28px",
            height: "4px",
            borderRadius: "4px",
            transition: "all 0.5s",
            transformOrigin: "0 100%",
            transform: hamburgerClicked
              ? "rotate(-45deg) translate(-1px, 0)"
              : "rotate(0)",
          }}
        ></Text>
      </GridItem>
    </GridWrapper>
  );
};

export default Nav;
