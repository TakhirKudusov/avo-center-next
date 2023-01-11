import styled from 'styled-components';
import { devices } from '../../../../common/constants';

import SearchBar, { SearchBarType } from '../../../ui-kit/SearchBar';
import { ExploreItem } from './ExploreItem';
import { EXPLORE_MOCK } from './MOCK';

const SearchWithBadRequest = () => {
  return (
    <Wrapper>
      <BadRequestImage />
      <RequestInfo>
        Sorry, we couldn’t find any results for this search.
      </RequestInfo>
      <RequestQuestion>Maybe give one of these a try?</RequestQuestion>
      <SearchBar
        placeholder="Enter your search..."
        type={SearchBarType.WITH_BUTTON}
      />
      <ExporeMoreTitle>Explore more</ExporeMoreTitle>
      <ExploreItemsWrapper>
        {EXPLORE_MOCK.map((item) => (
          <ExploreItem key={item.id} {...item} />
        ))}
      </ExploreItemsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 217px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BadRequestImage = styled.div`
  width: 100%;
  background-image: url('/images/bad-request.png');
  height: 397px;
  background-repeat: no-repeat;
  background-size: contain;

  @media (${devices.mobile}) {
    height: 123px;
  }
`;

const RequestInfo = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #23262f;
  width: 600px;
  margin: 80px 0 0;

  @media (${devices.mobile}) {
    width: 100%;
    font-size: 40px;
  }
`;

const RequestQuestion = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #777e91;
  margin-bottom: 20px;
`;

const ExporeMoreTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #23262f;
  margin-top: 96px;
  margin-bottom: 48px;

  @media (${devices.mobile}) {
    margin-top: 32px;

  }
`;

const ExploreItemsWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 136px;
  width: 100%;

  @media (${devices.tablet}) {
    overflow: scroll;
  }

  @media (${devices.mobile}) {
    overflow: scroll;
  }
`;

export default SearchWithBadRequest;
