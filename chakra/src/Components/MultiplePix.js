import { Image,Button,Stack } from '@chakra-ui/react'
import React from 'react'

export default function MultiplePix() {
  return (
    <Stack direction="row" spacing={700}>
          <div className="groupImages">
            <Image className="web1" src="web1.jpg" alt="Dan Abramov" />
            <Image className="web2" src="web2.png" alt="Dan Abramov" />
            <Image boxSize="300px" marginLeft={81} marginTop={230} position="absolute" height={220}
              width={380}
              src="web3.png"
              alt="Dan Abramov"
            />
            <Image className="web4" src="web4.png" alt="Dan Abramov" />
            <Image className="web5" src="web5.png" alt="Dan Abramov" />
          </div>

          <div className="text">
            <p className="pTag">Designed by users, powered by AI</p>
            <br></br>

            <p className="pTag-2">
              Through our extensive R&D with a variety of hospitality businesses
              we have understood the real challenges that current products fail
              to solve. Using ground breaking technology the result is a range
              of tools that help automate the end to end process for customers,
              employees and owners alike.
            </p>
            <Button
              colorScheme="green"
              variant="solid"
              marginLeft={90}
              marginTop={5}
            >
              See all the Features
            </Button>
          </div>
        </Stack>
  )
}

