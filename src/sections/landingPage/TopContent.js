import React from 'react'
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { Text, Box } from 'theme-ui';
const TopContent = () => {

  return (
    <>
      <GridWrapper sx={{
        marginTop: '100px'

      }}>
        <GridItem sx={{
          gridColumn: [
            '1 / 12',
            '1 / 12',
            '1 / 12',
            '1 / 24',
            '4 / 24',
            '5 / 24',
          ]
        }}>
          <Text
            sx={{
              fontSize: [
                '26px',
                '36px',
                '46px',
                '64px',
                '64px',
              ],
              textAlign: 'center'
            }}
          >Clay is a UI/UX design and branding agency in San Francisco</Text>
        </GridItem>
        <GridItem sx={{
          gridColumn: [
            '1 / 13',
            '1 / 12',
            '1 / 12',
            '1 / 25',
          ],
          mt: '5rem'
        }}>
          <Box sx={{
            "@media screen and (min-width: 500px)": {
              height: '300px'
            },
            "@media screen and (min-width: 700px)": {
              height: '500px'
            },
            "@media screen and (min-width: 1000px)": {
              height: '650px'
            }
          }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LcSevy6HUQc" title="Clay Reel 2018" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </GridItem>

      </GridWrapper>

    </>
  )
}

export default TopContent