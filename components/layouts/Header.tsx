import { Box, Flex, Text, Spacer, useColorModeValue, Button } from '@chakra-ui/react';

function Header() {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('light.backgroundDark', 'dark.backgroundDark')}
      ml={{ base: 0, md: 80, lg: 80 }}
    >
      <Flex justifyContent="space-between">
        <Flex justifyContent="start" flex={2}>
          <Button as="a" variant="link" p="10" py="8">
            <Text
              color={useColorModeValue('light.white', 'dark.white')}
              bgGradient="linear(to-l, light.primary,light.secondary)"
              bgClip="text"
              fontSize="lg"
            >
              Lend
            </Text>
          </Button>
          <Button as="a" variant="link" p="10" py="8">
            <Text color={useColorModeValue('light.white', 'dark.white')} fontSize="lg">
              Borrow
            </Text>
          </Button>
          <Button as="a" variant="link" p="10" py="8" fontSize="lg">
            <Text color={useColorModeValue('light.white', 'dark.white')}>Liquidity Mining</Text>
          </Button>
        </Flex>
        <Spacer />
        <Flex justifyContent="end" flex={1}>
          <Button as="a" variant="link" p="10" py="8">
            <Text
              color={useColorModeValue('light.white', 'dark.white')}
              bgGradient="linear(to-l, light.primary,dark.secondary)"
              bgClip="text"
              fontSize="lg"
            >
              Connect Wallet
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
