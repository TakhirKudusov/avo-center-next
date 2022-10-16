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

const NFTPage: ComponentWithLayout = () => {
  const route = useRouter();

  return (
    <PageWrapper>
      <FlexContainer>
        <ContentContainer>
          <Header>
            <BackButton onClick={(e) => route.push('/')}>
              <LeftSideCornerSVG />
            </BackButton>
          </Header>
          <NFTBlock NFTData={NFTData} />
          {comments && <Comments commentsData={comments} />}
        </ContentContainer>
      </FlexContainer>
    </PageWrapper>
  );
};

const BackButton = styled(RadioButton)`
  margin: 34px 0 34px 0;
`;

const PageWrapper = styled.div`
  background: #fcfcfd;
`;

NFTPage.PageLayout = StoreLayout;

export default NFTPage;
