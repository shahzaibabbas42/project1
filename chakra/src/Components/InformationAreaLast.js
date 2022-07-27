import { Stack,Image} from '@chakra-ui/react'
import React from 'react'


export default function InformationAreaLast() {
  return (
    <Stack direction="row" spacing="" paddingTop={20}>
    <div className="text">
      <p className="pTag-42" marginTop={50}>
        Highly flexibile configuration to meet your needs with free
        onboarding
      </p>
      <br></br>

      <p className="pTag-2" >
        Lorem ipsum dolor sit amet, consectetur adipiscing <p />
        elit. Sit tempus quam lorem id eget diam arcu tristique. <p />
        Fermentum eu morbi felis, sagittis, <p /> scelerisque at. Turpis
        viverra quam ultrices amet,
        <p /> velit tincidunt fringilla. Quisque integer rhoncus <p />
        viverra proin dictum platea egestas dolor nisl.Lorem <p />
        sodales volutpat in curabitur elementum ac eget.
      </p>
    </div>
    <div>
      <Image className="image2" src="./web6.png"></Image>
    </div>
  </Stack>

  )
}
