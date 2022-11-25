/** @jsx jsx */
import { jsx, Text, Box } from "theme-ui";
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import Logo from '../Logo';
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
          <Box sx={{
            width: '200px'
          }}>
            <Logo />
          </Box>
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
