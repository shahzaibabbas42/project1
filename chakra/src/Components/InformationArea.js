import { Stack , Heading, Button,Image } from '@chakra-ui/react'
import React from 'react'


export default function InformationArea() {
  return (
    <Stack direction="row" spacing="7">
          <div className="text">
            <Heading fontSize={"50px"} ml={20}>
              Take control of <p></p>your bussiness,<p></p> your way with our
              specialised apps
            </Heading>
            <br></br>

            <p className="pTag-2">
              The hospitality industry is awash with tools that aim to solve a
              single piece of the overall puzzle resulting in a need to invest
              in multiple solutions. These are designed to be ‘vanilla’, are
              difficult to configure and don’t interface with one another. Venu
              is the new way.
            </p>
            <Stack className="buttons" direction="row" spacing="5">
              <Button colorScheme="green" variant="outline"
               _hover={{background:"red", color:'black'}}>
                Lets have a chat
              </Button>
              <Button colorScheme="green" variant="solid">
                Request a Demo
              </Button>
            </Stack>
          </div>
          <div>
            <Image className="image1" src="./two.jpg"></Image>
          </div>
        </Stack>
  )
}
