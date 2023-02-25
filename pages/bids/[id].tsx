import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { ComponentWithLayout } from '../../common/types';
import StoreLayout from '../../components/layouts/store';
import { ContentContainer, FlexContainer } from '../../components/common';
import { RadioButton } from '../../components/ui-kit/Button/RadioButton';
import LeftSideCornerSVG from '../../assets/svg/left-side-corner.svg';
import { NFTData } from '../../mock-data/tagsData';
import NFTBlock from '../../components/bid/NFT/NFTBlock';
import Comments from '../../components/bid/comments';
import { Header } from '../../components/bid';
import { signin } from '../../redux/slicers/authSlicer';
import { useAppDispatch } from '../../redux/hooks';
import { ConnectWalletContext } from '../../components/bid/NFT/context';
import { getBidById } from '../../redux/slicers/bidsSlicer/bidsSlicer';
import { GetServerSideProps, NextPage } from 'next';

type Props = { host?: string };

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => ({
  props: { host: context.req.headers.host },
});

const NFTPage: NextPage<Props> & { PageLayout: any } = ({ host }) => {
  const router = useRouter();
  const { id } = router.query;

  const route = useRouter();
  const dispatch = useAppDispatch();

  const [openConnectWallet, setOpenConnectWallet] = useState(false);

  const handleSignIn = () => {
    dispatch(signin());
  };

  useEffect(() => {
    if (id) dispatch(getBidById(id as string));
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
            <NFTBlock host={host} />
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
