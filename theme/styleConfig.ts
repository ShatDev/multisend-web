const Button = {
  baseStyle: {
    borderRadius: 'full',
    width: 'full',
    fontWeight: 'light',
    py: '1.5rem',
  },
  sizes: {
    small: {
      px: 5,
      h: '50px',
      fontSize: '20px',
    },
    medium: {
      px: 7,
      h: '60px',
      fontSize: '25px',
    },
    large: {
      px: 8,
      h: '70px',
      fontSize: '30px',
      borderRadius: '10px',
    },
  },
  variants: {
    outline: {
      border: '1px solid #00F5A0',
      color: 'white',
    },
    solid: {
      border: '1px solid',
      borderColor: '#00F5A0',
      color: 'black',
      bgGradient: 'linear(265.59deg,#00f5a0 -19.36%,#00d9f5 106.57%)',
    },
  },
};

const Input = {
  sizes: {},
  variants: {
    outline: {
      field: {
        border: '1px solid',
        borderRadius: '15px',
        fontSize: '14px',
        ml: '3px',
        height: '4em',
        _focus: {
          borderColor: '#00d9f5',
          boxShadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
};

const h4 = {
  baseStyle: {
    bgGradient: 'linear(90deg, #833ab4 0,#fd1d1d 15%,#fcb045 50%)',
    fontWeight: 'semibold',
  },
};

export { Button, Input, h4 };
