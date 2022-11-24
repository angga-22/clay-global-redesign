/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";

const Footer = () => {
  return (
    <GridWrapper
      sx={{
        backgroundColor: 'secondary',
        height: '500px',
        paddingBottom: '5rem'
      }}
    >
      <GridItem sx={{
        gridColumn: [
          '4 / 12'
        ],
        mt: '5rem'
      }}>
        <Text sx={{
          fontSize: ['72px'],
          fontWeight: ['900'],
          lineHeight: ['96px'],
          color: '#fff'
        }}>Let's Talk.</Text>

      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '4 / 12'
        ],
      }}>
        <Text sx={{
          fontSize: ['24px'],
          fontWeight: ['900'],
          lineHeight: ['96px'],
          color: '#fff'
        }}>Hey@clay-global.com.</Text>

      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '18 / 19'
        ],
      }}>
        <svg src="http://www.w3.org/2000/svg" style={{ fill: 'rgb(90, 250, 231)' }} viewBox="0 0 52 80">
          <path d="M40,6V62A28,28,0,0,1,40,6Z"></path>
        </svg>

      </GridItem>
    </GridWrapper>
  );
};

export default Footer;
