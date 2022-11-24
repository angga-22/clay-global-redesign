/** @jsx jsx */
import { jsx, Text, Box } from "theme-ui";
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
          '1 / 13',
          '1 / 13',
          '6 / 19',
          '6 / 19',
        ],
        mt: '5rem'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Text sx={{
            fontSize: ['72px'],
            fontWeight: ['900'],
            color: '#fff'
          }}>Let's Talk.
          </Text>
          <svg width="60" src="http://www.w3.org/2000/svg" style={{ fill: 'rgb(90, 250, 231)' }} viewBox="0 0 52 80">
            <path d="M40,6V62A28,28,0,0,1,40,6Z"></path>
          </svg>
        </Box>

      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          '1 / 13',
          '6 / 10'
        ],
      }}>
        <Text sx={{
          fontSize: ['24px'],
          fontWeight: ['500'],
          color: '#fff'
        }}>300 Broadway, Suit 23 San Francisco, CA 94133</Text>

      </GridItem>



    </GridWrapper >
  );
};

export default Footer;
