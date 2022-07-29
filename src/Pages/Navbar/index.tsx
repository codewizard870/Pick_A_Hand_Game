import React, { FunctionComponent } from 'react';
import { VStack, HStack, Flex, Text, Image, Slide, Link, useDisclosure } from '@chakra-ui/react'

import { FaHome, FaDiscord, FaTwitter, } from "react-icons/fa";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Navbar: FunctionComponent = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <VStack
      direction={'column'}
      px={{ base: '16px', lg: '16px' }}
      pt='116px'
      w='80px'
      h="100vh"
      spacing="32px"
      borderWidth="0 1px 0 0"
    >
      <Link href="/">
        <Image src="/logo.webp" w="80px" />
      </Link>
      <Link href="/">
        <FaHome size="30px" />
      </Link>
      <Link href="https://www.discord.gg/K5g4M3XAgR">
        <FaDiscord size="30px" />
      </Link>
      <Link href="https://twitter.com/Fanscee">
        <FaTwitter size="30px" />
      </Link>
      <Link href="https://magiceden.io/marketplace/dustcrashcoinflip">
        <Image src="/magicEden.webp" w='30px' />
      </Link>
    </VStack>
  );
}
export default Navbar;