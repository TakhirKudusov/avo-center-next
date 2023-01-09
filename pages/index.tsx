import Head from 'next/head';
import styled from 'styled-components';
import { devices } from '../common/constants';
import { useAdaptiveSlider } from '../common/hooks/useAdaptiveSlider';
import { FlexContainer } from '../components/common';
import Bids from '../components/home-page/bids';
import CreatorNetwork from '../components/home-page/CreatorNetwork';
import Discover from '../components/home-page/Discover';
import HotBids from '../components/home-page/HotBids';
import HotCollections from '../components/home-page/HotCollections';
import Popular from '../components/home-page/Popular';
import StoreLayout from '../components/layouts/store';
import { ReactSlick } from '../components/ui-kit';
import Button from '../components/ui-kit/Button/Button';
import { ButtonSize, ButtonType } from '../components/ui-kit/Button/enums';

const Home = () => {
  //TODO: remove Mocks
  const creativeEconomeMock = [
    {
      id: 'creator-network-first',
      item: <CreatorNetwork index={1} />,
    },
    {
      id: 'creator-network-second',
      item: <CreatorNetwork index={2} />,
    },
  ];

  const { screenSize } = useAdaptiveSlider(1);

  return (
    <div>
      <Head>
        <title>AVO NFT - create single collectible</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FlexContainer>
        <StyledPageContainer>
          <ReactSlick screenSize={screenSize} slidesPerRow={1}>
            {creativeEconomeMock.map((elem) => elem.item)}
          </ReactSlick>
          {/* <Bids /> */}
        </StyledPageContainer>
      </FlexContainer>
      <Popular />
      <HotBids />
      <HotCollections />
      <Discover />
    </div>
  );
};

const StyledPageContainer = styled.main`
  padding-top: 81px;
  width: 100%;
`;

Home.PageLayout = StoreLayout;

export default Home;
