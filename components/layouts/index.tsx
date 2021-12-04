import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh">
      <Header />
      <Box ml={{ base: 0, md: 80, lg: 80 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
