import {
  Box,
  useDisclosure,
  useColorModeValue,
  Icon,
  Flex,
  Text,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  IconButton,
  Avatar,
  Image as Img,
} from '@chakra-ui/react';

import { FaRss } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Layout(props: { children: React.ReactNode }) {
  const sidebar = useDisclosure();

  const NavItem = (props: {
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.900'),
          color: useColorModeValue('gray.900', 'gray.200'),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color: useColorModeValue('gray.600', 'gray.300'),
            }}
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Img
          boxSize="100px"
          objectFit="contain"
          src="assets/logo.png"
          alt="Segun Adebayo"
        />
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('brand.500', 'white')}
          fontWeight="semibold"
        >
          Xepelin Test
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Link to="/new">
          <NavItem icon={MdHome}>new Post</NavItem>
        </Link>
        <Link to="/">
          <NavItem icon={FaRss}>Posts</NavItem>
        </Link>
      </Flex>
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <Flex align="center">
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Box as="main" p="4">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}
