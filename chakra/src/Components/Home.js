import React from 'react'
import FooterWithTable from './FooterWithTable'
import Header from './Header'
import InformationArea from './InformationArea'
import InformationAreaLast from './InformationAreaLast'
import MultiplePix from './MultiplePix'
import { Box, Image } from '@chakra-ui/react'


const Home = () => {
  return (
    <>
      <Header/>
    
      <InformationArea/>
      <MultiplePix/>
      <InformationAreaLast/>
      <FooterWithTable/>
    </>
  )
}

export default Home
