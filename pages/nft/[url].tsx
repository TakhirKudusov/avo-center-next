import { ComponentWithLayout } from '../../common/types';
import StoreLayout from '../../components/layouts/store';
import { ContentContainer, FlexContainer } from '../../components/common';
import { RadioButton } from '../../components/ui-kit/Button/RadioButton';
import LeftSideCornerSVG from '../../assets/svg/left-side-corner.svg';
import { NFTData } from '../../mock-data/tagsData';
import NFTBlock from '../../components/nft/NFT/NFTBlock';
import styled from 'styled-components';
import Comments from '../../components/nft/comments/Comments';
import { comments } from '../../mock-data/NFTComments';
import { useRouter } from 'next/router';
import { Header } from '../../components/nft';

const PageWrapper = styled.div`
  background: #fcfcfd;
`;

const NFTPage: ComponentWithLayout = () => {
  const route = useRouter();

  return (
    <PageWrapper>
      <FlexContainer>
        <ContentContainer>
          <Header>
            <RadioButton onClick={(e) => route.push('/')}>
              <LeftSideCornerSVG />
            </RadioButton>
          </Header>
          <NFTBlock NFTData={NFTData} />
          {comments && <Comments commentsData={comments} />}
        </ContentContainer>
      </FlexContainer>
    </PageWrapper>
  );
};

NFTPage.PageLayout = StoreLayout;

export default NFTPage;