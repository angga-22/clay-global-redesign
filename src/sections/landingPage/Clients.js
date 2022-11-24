import React from 'react'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'
import { Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

const Clients = () => {
  return (
    <GridWrapper sx={{
      alignItems: 'center'
    }}>
      <GridItem sx={{
        gridColumn: [
          '5 / 12',
          '5 / 12',
          '6 / 12',
          '12 / 24',
        ],
        mt: '4rem',
        mb: '3rem'
      }}>

        <Text sx={{
          textAlign: 'center',
          margin: '0 auto',
          fontWeight: '500',
          fontSize: ['26px', '26px', '32px'],
          textTransform: 'underline'
        }}> View All Clients</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          ' 1 / 13',
          '1 / 13',
          '4 / 13'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/img.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Google</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 12',
          '1 / 12',
          '1 / 12',
          '14 / 22'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/facebook.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Facebook</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          ' 1 / 13',
          '1 / 13',
          '4 / 13'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/slack.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Slack</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 12',
          '1 / 12',
          '1 / 12',
          '14 / 22'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/joe.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Joe & IceCreams</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          ' 1 / 13',
          '1 / 13',
          '4 / 13',
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/coca-cola.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Coca - cola</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 12',
          '1 / 12',
          '1 / 12',
          '14 / 22'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/zenefits.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Zenefits</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 13',
          ' 1 / 13',
          '1 / 13',
          '4 / 13'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/moneylion.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Moneylion</Text>
      </GridItem>
      <GridItem sx={{
        gridColumn: [
          '1 / 12',
          '1 / 12',
          '1 / 12',
          '14 / 22'
        ],
        mb: ['70px']
      }}>
        <StaticImage src={'../../assets/images/general/enterprise.jpg'} alt="img" />
        <Text sx={{
          fontSize: ['26px'],
          fontWeight: 'bold'
        }}>Enterprise UX</Text>
      </GridItem>

    </GridWrapper>
  )
}

export default Clients