import sample from 'lodash/sample';

// Array of available nodes to connect to
export const nodes = ['https://smartbch.fountainhead.cash/mainnet '];

const getNodeUrl = () => sample(nodes);

export default getNodeUrl;
