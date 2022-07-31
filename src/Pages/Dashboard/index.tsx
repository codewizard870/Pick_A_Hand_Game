import React, { FunctionComponent } from 'react';
import { Stack, HStack, Flex, Text, Button, Image } from '@chakra-ui/react'

const Dashboard: FunctionComponent = (props) => {
  return (
    <Flex
      direction='column'
      px={{ base: '10px', lg: '40px' }}
      w={'100%'}
    >
      <Flex w="100%" justify="flex-end" mt="40px">
        <Button w="180px" h="50px" bg="white" color="black">
          Connect Wallet
        </Button>
      </Flex>
      <Flex direction={{ base: "column", lg: "row" }} w="100%" mt="40px" align="center">
        <Text fontSize={{ base: "40px", lg: "80px" }} w="100%" textAlign="center">
          <span style={{ color: "rgb(254, 206, 0)" }}>Pick-a-Hand Game</span> Coming Soon
        </Text>
        <Flex direction="column" align="center" w="100%" fontFamily="'Orbitron', sans-serif" fontWeight="500">
          <video width="560px" autoPlay muted loop>
            <source src="./fiverr_test_0728_brandonwcrocket_rev10001-0168.mp4" type="video/mp4" />
          </video>
          <Text fontSize={{ base: "20px", lg: "40px" }} w="100%" textAlign="center">
            <span style={{ color: "purple" }}>Pick a hand</span> with a 50/50 chance of 2x your bet each time!
          </Text>
          {/* <Stack direction={{ base: "column", lg: "row" }} w="100%" mt="40px" spacing="40px" justify="center" align="center">
            <Button w="165px" h="50px" border="3px solid yellow" fontSize="18px">Left</Button>
            <Button w="165px" h="50px" border="3px solid red">Right</Button>
          </Stack>
          <Stack direction={{ base: "column", lg: "row" }} w="100%" mt="40px" spacing="40px" justify="center" align="center">
            <Button w="165px" h="50px" border="3px solid rgb(226, 232, 240)">0.1</Button>
            <Button w="165px" h="50px" border="3px solid rgb(226, 232, 240)">0.15</Button>
            <Button w="165px" h="50px" border="3px solid rgb(226, 232, 240)">0.2</Button>
          </Stack>
          <Flex w="80%" mt="40px" justify="center">
            <Button w="100%" h="50px" border="3px solid rgb(226, 232, 240)" fontSize="24px">F l i p</Button>
          </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Dashboard;