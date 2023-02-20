export const getSlicedPublicAddress = (address: string) => {
  const firstPart = address.slice(0, 11);
  const secondPart = address.slice(address.length - 4, address.length);

  return `${firstPart}...${secondPart}`;
};
