const dev = {
  BASE_URL: 'http://13.126.176.166:3000',
  nomicsApiURL: 'https://api.nomics.com/v1',
};
const prod = {
  BASE_URL: 'http://13.126.176.166:3000',
  nomicsApiURL: '',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

const contractAddress = {
  lendingContractAddress: '0xF6646bCC8ae654bcC84F4B272084509727AFa9c9',
  usdtContractAddress: '0x1bcfa905333fe672CE8862ad62A6C714f68E8E72',
};

export default {
  ...config,
  contractAddress,
  ethereumWallet: {
    chainId: '0x1',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  ropstenWallet: {
    chainId: '0x3',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://ropsten.etherscan.io'],
  },
  rinkebyWallet: {
    chainId: '0x4',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
  },
  polygonWallet: {
    chainId: '0x89',
    chainName: 'MATIC',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
    blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
  },
  bscWallet: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
  },
};
