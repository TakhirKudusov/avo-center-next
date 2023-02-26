import styled from 'styled-components';
import { devices } from '../../../../common/constants';
import BidGrid from '../../../common/components/BidGrid';
import { useAppSelector } from '../../../../redux/hooks';
import { TNftsState } from '../../../../redux/slicers/nftsSlicer/types';

const CreatedTab = () => {
  const { userNfts } = useAppSelector<TNftsState>((state) => state.nfts);

  return (
    <TabWrapper>
      {!!userNfts.length ? (
        <BidGrid elemPerRow={3} items={userNfts} />
      ) : (
        <NoData>No data found</NoData>
      )}
    </TabWrapper>
  );
};

export default CreatedTab;

const TabWrapper = styled.div`
  max-width: 1150px;

  @media (${devices.tablet}) {
    max-width: 600px;
  }

  @media (${devices.mobile}) {
    max-width: 375px;
  }
`;

const NoData = styled.div`
  font-family: 'Nasalization';
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  line-height: 32px;
  margin-top: 32px;
`;

// const TabTitle = styled.h2`
//   font-size: 32px;
//   text-align: center;
//   color: #001240;
//   margin-bottom: 0;

//   @media (${devices.mobile}) {
//     font-size: 22px;
//   }
// `;

// const TabSubTitle = styled.p`
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #001240;
//   margin-top: 12px;
//   opacity: 0.6;
//   text-align: center;
// `;
