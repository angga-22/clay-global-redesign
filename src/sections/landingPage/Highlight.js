import React from 'react'
import { GridWrapper, GridItem } from "@thepuzzlers/pieces";
import { Text, Box, Paragraph } from 'theme-ui';
const Highlight = () => {
  return (
    <GridWrapper sx={{
      mt: '4rem',
      mb: '4rem'
    }}>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          '1 / 13',
          '1 / 13',
          '6 / 14'
        ],
        mb: '4rem'
      }}>
        <Text variant="h5">
          As a full-service UX design agency, we work closely with our clients to define, design and develop transformative user experiences across all platforms and brand's touchpoints.
        </Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          '1 / 13',
          '1 / 13',
          '16 / 18'
        ]
      }}>
        <Box>
          <Text variant='highlight' >
            60+
          </Text>
          <Paragraph>designers and developers</Paragraph>
        </Box>
        <Box sx={{
          mt: '3rem'
        }}>
          <Text variant='highlight'>
            12
          </Text>
          <Paragraph>years in business</Paragraph>
        </Box>
      </GridItem>
    </GridWrapper>
  )
}

export default Highlight