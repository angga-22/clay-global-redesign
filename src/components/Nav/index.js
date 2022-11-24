import * as React from "react";
import { Text } from "@theme-ui/components";
import { Link } from "gatsby";
import { Breakpoints } from "../../helper/breakpoints";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { useColorMode } from 'theme-ui'
import Button from '../Button'
import { useThemeUI } from 'theme-ui'

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
        height: ["110px", "120px", "100px", "120px", "120px", "120px"],
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GridItem
        sx={{
          gridColumn: ["1 / 2"]
        }}>
        <svg src="http://www.w3.org/2000/svg" style={{ fill: 'rgb(90, 250, 231)' }} viewBox="0 0 52 80">
          <path d="M31,0C14.4,0,1,13.4,1,30s13.4,30,30,30V0z"></path>
        </svg>
      </GridItem>
      <GridItem
        sx={{
          gridColumn: ["5 / span 19"],
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
          // width: ["100%", "100%", "100%", "80%", "65%", "60%"],
          zIndex: "1",
          "@media screen and (max-width: 700px)": {
          },
          alignItems: "center",
          top: "100px",
          transition: "all 1s",
          transform: hamburgerClicked
            ? "translateX(0)"
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
            }}
          >
            <Text

              sx={{
                color: rawColors.modes.light.text,
                fontFamily: "body",
                fontWeight: "normal",
                lineHeight: "100%",
                fontSize: ["16px", "16px", "16px", "16px", "16px", "18px"],
              }}
            >
              {menu.label}{" "}
            </Text>
          </Link>
        ))}
        <Button
          sx={{
            mt: '25px'
          }}
          buttonTheme="darkMode"
          onClick={(e) => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}>
          Mode {colorMode === 'default' ? 'Dark' : 'Light'}

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
