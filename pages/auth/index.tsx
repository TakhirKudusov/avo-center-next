import React, { useState } from 'react';
import Web3 from 'web3';
import { axiosInstance } from '../../components/common/axios.instance';

export interface Auth {
  accessToken: string;
}

interface Props {
  onLoggedIn: (auth: Auth) => void;
}

let web3: Web3 | undefined = undefined; // Will hold the web3 instance

export const Login = ({ onLoggedIn }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false); // Loading button state

  const handleAuthenticate = ({
    publicAddress,
    signature,
  }: {
    publicAddress: string;
    signature: string;
  }) => {
    return axiosInstance.post(`/users`, {
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
    // try {
    console.log('SIGNING', publicAddress);
    const signature = await web3!.eth.personal.sign(
      `I am signing my one-time nonce: ${nonce}`,
      publicAddress,
      '', // MetaMask will ignore the password argument here
    );
    console.log('FINISH SIGNING');

    return { publicAddress, signature };
    // } catch (err) {
    //   throw new Error('You need to sign the message to be able to log in.');
    // }
  };

  const handleSignup = (publicAddress: string) => {
    return axiosInstance.post(`/users`, { publicAddress, username: 'test' });
  };

  const handleClick = async () => {
    // Check if MetaMask is installed
    if (!(window as any).ethereum) {
      window.alert('Please install MetaMask first.');
      return;
    }

    if (!web3) {
      try {
        // Request account access if needed
        await (window as any).ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3((window as any).ethereum);
      } catch (error) {
        window.alert('You need to allow MetaMask.');
        return;
      }
    }

    const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      window.alert('Please activate MetaMask first.');
      return;
    }

    const publicAddress = coinbase.toLowerCase();
    setLoading(true);

    // Look if user with current publicAddress is already present on backend
    const response = await axiosInstance.get(
      `/users?publicAddress=${publicAddress}`,
    );

    // if (response.data.length) {
    const sunupResponse: any = await handleSignup(publicAddress);

    const handleSignMessageResponse: any = await handleSignMessage(
      sunupResponse.data?.data,
    );

    console.log(handleSignMessageResponse);

    const handleAuthenticateResponse: any = await handleAuthenticate({
      ...handleSignMessageResponse,
    });
    console.log('LOGGED IN', handleAuthenticateResponse.data);
    // }
    // .then((response) => response.json())
    // // If yes, retrieve it. If no, create it.
    // .then((users) => (users.length ? users[0] : handleSignup(publicAddress)))
    // // Popup MetaMask confirmation modal to sign message
    // .then(handleSignMessage)
    // // Send signature to backend on the /auth route
    // .then(handleAuthenticate)
    // // Pass accessToken back to parent component (to save it in localStorage)
    // .then((data) => {
    //   console.log('LOGGED IN', data);
    // })
    // .catch((err) => {
    //   window.alert(err);
    //   setLoading(false);
    // });
  };

  return (
    <div>
      <p>
        Please select your login method.
        <br />
        For the purpose of this demo, only MetaMask login is implemented.
      </p>
      <button className="Login-button Login-mm" onClick={handleClick}>
        {loading ? 'Loading...' : 'Login with MetaMask'}
      </button>
      <button className="Login-button Login-fb" disabled>
        Login with Facebook
      </button>
      <button className="Login-button Login-email" disabled>
        Login with Email
      </button>
    </div>
  );
};

export default Login;
