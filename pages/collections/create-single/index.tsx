import Head from 'next/head';
import styled from 'styled-components';
import RightArrowSVG from '../../../assets/svg/right-arrow.svg';
import { FlexContainer, PageContainer } from '../../../components/common';
import CollectibleForm from '../../../components/create-collectible/collectible-form';
import CollectibleItem from '../../../components/create-collectible/collectible-item';
import { BID } from '../../../components/create-collectible/constants';
import StoreLayout from '../../../components/layouts/store';
import Button from '../../../components/ui-kit/Button/Button';
import { ButtonSize } from '../../../components/ui-kit/Button/enums';

const CreateSingleCollectible = () => {
  return (
    <div>
      <Head>
        <title>AVO NFT - Home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexContainer>
        <PageContainer>
          <ContentWrapper>
            <ContentHeading>
              <Button style={{ width: '197px' }} size={ButtonSize.Medium}>
                <RightArrowSVG
                  style={{ transform: 'rotate(180deg)', marginRight: '10px' }}
                />
                Switch to Collection
              </Button>
              <ContentTitle>Create single collectible</ContentTitle>
              <CollectibleForm />
            </ContentHeading>
            <CollectibleItem bid={BID} />
          </ContentWrapper>
        </PageContainer>
      </FlexContainer>
    </div>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  gap: 128px;
  padding-top: 128px;
  width: 100%;
  padding-bottom: 112px;
`;

const ContentHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const ContentTitle = styled.h1`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  color: #23262f;
  max-width: 455px;
  margin: 0;
`;

CreateSingleCollectible.PageLayout = StoreLayout;

export default CreateSingleCollectible;
