import React from 'react'
import { Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableContainer,} from "@chakra-ui/react";
import{FaFacebook, FaInstagram,FaTwitter}from 'react-icons/fa'
import{Stack,Box,Divider} from "@chakra-ui/react";


export default function FooterWithTable() {
  return (
    <div className="footer"position={'absolute'}w={1436} h={375}mt={2350} >
          <TableContainer width={580} ml={70} mt={5}>
            <Table variant="" color="white" fontSize={15}>
              <Thead>
                <Tr>
                  <Th fontSize={16}>Why Venu?</Th>
                  <Th fontSize={16}>Company</Th>
                  <Th fontSize={16}>Member</Th>
             
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>How it works</Td>
                  <Td>Blog</Td>
                  <Td> Login</Td>
                </Tr>
                <Tr>
                  <Td>Features</Td>
                  <Td>AboutUS</Td>
                  <Td>Join Out Time</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Book a demo</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td>Site Map</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>

          <TableContainer width={580} ml={640} mt={-250}>
            <Table variant="" color="white" fontSize={15}>
              <Thead>
                <Tr>
                  <Th fontSize={16}>Find US</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr >
                  <Td py={'1'}>Company Address line 1</Td>
                </Tr>
                <Tr>
                 <Td py={'1'}>Town</Td>
                 </Tr>
                <Tr>
                  <Td py={'1'}>City</Td>
                </Tr>
                <Tr>      
                  <Td py={1}>Country</Td>
               </Tr>
               <Tr>      
                  <Td py={1}>Post Code</Td>
               </Tr>
               <Tr>      
                  <Td py={'1'}>hello@venu.co.uk</Td>
               </Tr>
              </Tbody>
              <Tfoot></Tfoot>
            </Table>
          </TableContainer>
          <Stack direction="row" ml={1100} spacing={5} mt={-5} pr={10} >
          <FaTwitter size={40} color='white'/>
          <FaInstagram size={40} color='white'/>
          <FaFacebook  size={40} color='white'/>
          </Stack>

          <Divider mt={7}></Divider>
          <Box as = "h1" color={"white"} ml={40}  fontSize={13}> © 2021 THE GROUP. ALL RIGHTS RESERVED</Box>
         

        </div>
  )
}
