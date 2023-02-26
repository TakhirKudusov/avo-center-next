import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import StoreLayout from '../../components/layouts/store';
import { ContentContainer, FlexContainer } from '../../components/common';
import { RadioButton } from '../../components/ui-kit/Button/RadioButton';
import LeftSideCornerSVG from '../../assets/svg/left-side-corner.svg';
import NFTBlock from '../../components/nft/NFT/NFTBlock';
import Comments from '../../components/nft/comments';
import { Header } from '../../components/nft';
import { signin } from '../../redux/slicers/authSlicer';
import { useAppDispatch } from '../../redux/hooks';
import { ConnectWalletContext } from '../../components/nft/NFT/context';
import { getNftById } from '../../redux/slicers/nftsSlicer/nftSlicer';
import { NextPage } from 'next';

const NFTPage: NextPage & { PageLayout: any } = () => {
  const router = useRouter();
  const { id } = router.query;

  const route = useRouter();
  const dispatch = useAppDispatch();

  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  const handleSignIn = () => {
    dispatch(signin());
  };

  useEffect(() => {
    if (id) dispatch(getNftById(id as string));
  }, [id, dispatch]);

  return (
    <ConnectWalletContext.Provider
      value={{
        openConnectWallet,
        setOpenConnectWallet,
        handleSignIn,
      }}
    >
      <PageWrapper>
        <FlexContainer>
          <ContentContainer>
            <Header>
              <BackButton onClick={(e) => route.push('/')}>
                <LeftSideCornerSVG />
              </BackButton>
            </Header>
            <NFTBlock />
            <Comments />
          </ContentContainer>
        </FlexContainer>
      </PageWrapper>
    </ConnectWalletContext.Provider>
  );
};

const BackButton = styled(RadioButton)`
  margin: 34px 0 34px 0;

  & > svg > path {
    fill: rgba(255, 255, 255, 0.7);
  }

  &:hover {
    & > svg > path {
      fill: #ffffff;
    }
  }
`;

const PageWrapper = styled.div``;

NFTPage.PageLayout = StoreLayout;

export default NFTPage;
