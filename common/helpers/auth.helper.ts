import { axiosInstance } from "../../components/common/axios.instance";

const handleAuthenticate = ({
  publicAddress,
  signature,
}: {
  publicAddress: string;
  signature: string;
}) => {
  return axiosInstance.post(`/auth`, {
    publicAddress,
    signature,
    username: 'test',
  });
};

const handleSignMessage = async ({
  publicAddress,
  nonce,
}: {
  publicAddress: string;
  nonce: string;
}) => {
  try {
    console.log('SIGNING', publicAddress, nonce);
    const signature = await (window as any).web3obj!.eth.personal.sign(
      `I am signing my one-time nonce: ${nonce}`,
      publicAddress,
      '',
    );
    console.log('FINISH SIGNING');

    return { publicAddress, signature };
  } catch (err) {
    throw new Error('You need to sign the message to be able to log in.');
  }
};

const handleSignup = (publicAddress: string) => {
  return axiosInstance.post(`/users`, { publicAddress, username: 'test' });
};

export { handleAuthenticate, handleSignMessage, handleSignup }