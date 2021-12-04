import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Button, Input, h4 } from './styleConfig';

const stripTheme = extendTheme({
  colors: {
    light: {
      primary: '#00d9f5',
      secondary: '#00f5a0',
      background: '#01040e',
      backgroundDark: '#080b1b',
      white: 'white',
    },
    dark: {
      primary: '#00d9f5',
      secondary: '#00f5a0',
      background: '#01040e',
      backgroundDark: '#080b1b',
      white: 'white',
    },
  },
  components: {
    Button,
    Input,
    h4,
  },

  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: 'Monda',
        color: mode('light.white', 'dark.white')(props),
        bg: mode('light.background', 'dark.background')(props),
        lineHeight: 'base',
      },
    }),
  },
});

export default stripTheme;
