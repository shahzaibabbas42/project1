import { Stack,Box,Flex,Tabs,TabList,Tab,Button,Image } from '@chakra-ui/react'
import React from 'react'
import {  NavLink } from 'react-router-dom'



export default function Header() {
  
  return (
    <Stack direction="row" spacing="500" pt={3} pl={10} pb={3} w="100vw">
              <Flex direction={"row"} spacing="6" >

               <Image h={9} mt={3} src="Vector (1).png"alt="Dan Abramov" />
                <Image h={7} mt={5}  src="Vector (2).png"alt="Dan Abramov" />
                <Image h={7} mt={5} src="Vector (3).png"alt="Dan Abramov" />
                <Image h={5} mt={2}  src="Vector (4).png"alt="Dan Abramov" />
                <Image h={7} mt={5} mr={2} src="Vector (5).png"alt="Dan Abramov" />
          
            
               </Flex>
          <Flex direction="row" >
            <Tabs
              variant="line"
              color="silver"
              colorScheme={"green"}
              size="sm"
              display={"flex"}
              align='end'
              
            >
              <TabList>
                <Tab fontWeight="bold">How It Works</Tab>
                <Tab></Tab>
                <Tab fontWeight="bold">Features</Tab>
                <Tab></Tab>
                <Tab fontWeight="bold">Pricing</Tab>
              </TabList>
            </Tabs>
           <Button bg={"#1C7A5E;"} color="white"borderRadius="20" mt={2} ml={"100"}w={"25"} >Contact US </Button>
          </Flex>
        </Stack>
  )
}
