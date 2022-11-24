import React from 'react'
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { Text } from 'theme-ui';

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

      </GridWrapper>

    </>
  )
}

export default TopContent