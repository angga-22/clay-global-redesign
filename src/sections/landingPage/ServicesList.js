import React, { useState } from 'react'
import { Box, Text, Paragraph } from 'theme-ui'
import { GridWrapper, GridItem } from '@thepuzzlers/pieces'
import { keyframes } from '@emotion/react'
import { StaticImage } from 'gatsby-plugin-image'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
const data = [
  {
    id: 1,
    label: 'Digital Strategy',
    isOpened: false,
    value: 'We start each new digital product design partnership with an in&#8209depth discovery phase to immerse ourselves in your business. Our UX designers interview stakeholders, conduct user research, analyze your competition, and consolidate content. The result is an action plan on executing a holistic brand and user experience.',

  },
  {
    id: 2,
    label: 'Branding',
    isOpened: false,
    value: "A brand today is all about how it makes your customers feel. It's not a logo, visual identity, or digital product design.but rather a cohesive system that spans across all mediums and touchpoints.We're a branding agency offering a complete solution from naming and logo design to communications and style guides."
  },
  {
    id: 3,
    label: 'User Experiences',
    isOpened: false,

    value: "UI/UX design is a defining factor for any digital product these days. We're a user experience and UI design agency focused on improving conversion and increasing customer engagement.Our UI/ UX design capabilities don't stop at mobile apps, web applications, or multi&#8209platform digital experiences. As a UX design agency, we create products and services that provide outstanding usability while fully embracing your brand's personality."
  },
  {
    id: 4,
    label: ' Development',
    isOpened: false,

    value: "Our full&#8209stack design and development agency based in San Francisco provides front&#8209end and back&#8209end development services working closely with our designers. As a UX UI and app development company, we build native mobile apps for iOS and Android, web applications, apps for wearables, and B2B/enterprise software."
  },
  {
    id: 5,
    label: 'Web Design',
    isOpened: false,

    value: "We're a web design agency creating next&#8209level websites by strategically blending user experience and brand storytelling. Our web designers and developers create responsive websites that feel at home on any device. Product landing pages, marketing sites, or UX UI for company intranet portals – we do it all."
  },
  {
    id: 6,
    label: 'Enterprise UX',
    isOpened: false,

    value: "We're a UI/UX design agency that believes business software deserves the user&#8209friendliness and aesthetics of best&#8209in&#8209class consumer apps. We're a digital agency that transforms legacy enterprise platforms into delightful, consumer&#8209grade experiences and design new B2B products that people love using."
  }
]
const ServicesList = () => {
  const [dataService, setDataService] = useState(data)
  const openDigital = (idx) => {
    setDataService(current =>
      current.map(obj => {
        if (obj.id === idx) {
          return { ...obj, isOpened: obj.isOpened = !obj.isOpened };
        }
        return obj;
      }),
    );
  }

  return (
    <>
      <GridWrapper sx={{
        marginTop: '100px'

      }}>
        <GridItem sx={{
          gridColumn: [
            '1 / 12',
            ' 3 / 12',
            '3 / 10',
            '3 / 12',
            ' 5 / 12'
          ],
          mb: ['70px']
        }}>
          <Text
            sx={{
              fontSize: ['20px', '26px'],
              fontWeight: 'bold'
            }}
          >We create world-class digital products, web design, and branding.</Text>
        </GridItem>
        <GridItem
          sx={{
            gridColumn: [
              '1 / 12',
              '3 / 11',
              '3 / 12',
              '15 / 24'
            ]

          }}
        >
          {dataService.map((item, idx) => (
            <Box key={idx} sx={{
              mb: '20px'

            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <Text sx={{
                  fontSize: ['36px'],
                  pr: '10px',
                  color: item.isOpened && 'tomato',
                  fontWeight: item.isOpened && '500',
                  transition: '2s all ease'

                }} onClick={() => openDigital(item.id)}> {item.label}</Text>
                {
                  item.isOpened &&
                  <StaticImage
                    width={20} src={'../../assets/icons/down-arrow.png'} alt="arrow"></StaticImage>
                }
                {
                  !item.isOpened &&
                  <StaticImage width={15} src={'../../assets/icons/up-chevron.png'} alt="arrow"></StaticImage>
                }
              </Box>
              {
                item.isOpened &&
                <Box
                  sx={{
                    animation: `${fadeIn} 1s backwards`, mt: '20px',
                    transition: '2s all ease'
                  }}
                >
                  <Paragraph>{item.value}</Paragraph>
                </Box>
              }
            </Box>
          ))}
        </GridItem>

      </GridWrapper>
    </>

  )
}

export default ServicesList