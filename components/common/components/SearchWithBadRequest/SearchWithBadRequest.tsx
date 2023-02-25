import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { devices } from '../../../../common/constants';
import { Paths } from '../../../../common/enums/paths';
import { Button, ButtonType } from '../../../ui-kit';

import SearchBar, { SearchBarType } from '../../../ui-kit/SearchBar';
import { ExploreItem } from './ExploreItem';
import { EXPLORE_MOCK } from './MOCK';

const SearchWithBadRequest = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push(Paths.EMPTY);
  };

  return (
    <Wrapper>
      <BadRequestImage />
      <RequestInfo>
        Sorry, we couldn’t find any results for this search.
      </RequestInfo>
      <RequestQuestion>Maybe give one of these a try?</RequestQuestion>
      <ExploreItemsWrapper>
        {/* {EXPLORE_MOCK.map((item) => (
          <ExploreItem key={item.id} {...item} />
        ))} */}
        <a href="#discover">
          <Button onClick={goToHomePage} btnType={ButtonType.Secondary}>
            Discover
          </Button>
        </a>
        <Button onClick={goToHomePage} btnType={ButtonType.Outlined}>
          Main Page
        </Button>
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
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #fcfcfd;
  width: 736px;
  margin: 80px 0 0;

  @media (${devices.mobile}) {
    width: 100%;
    font-size: 40px;
  }
`;

const RequestQuestion = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
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

  @media (${devices.tablet}) {
    overflow: scroll;
  }

  @media (${devices.mobile}) {
    overflow: scroll;
  }
`;

export default SearchWithBadRequest;
