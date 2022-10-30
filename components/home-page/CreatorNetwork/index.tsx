import styled from 'styled-components';
import RoundSquareSVG from '../../../assets/svg/round-square.svg';
import ArrowLeftSVG from '../../../assets/svg/arrow-left.svg';
import ArrowRightSVG from '../../../assets/svg/arrow-right.svg';
import Button from '../../ui-kit/Button/Button';
import Auction from './Auction';
import { ButtonSize, ButtonType } from '../../ui-kit/Button/enums';
import Link from 'next/link';
import { useTimer } from '../../ui-kit';
import { NFTData } from '../../../mock-data/tagsData';

const CreatorNetwork = () => {
  const { timeBeforeEnd } = useTimer(NFTData);

  return (
    <CreatorNetworkWrapper>
      <Player />
      <InfoBar>
        <Title>the creator network®</Title>
        <InfoItems>
          <InfoItem>
            <InfoItemImage
              style={{
                backgroundImage: `url(/images/creator.jpg)`,
              }}
            />
            <InfoItemBody>
              <InfoItemLabel>Creator</InfoItemLabel>
              <InfoItemValue>Enrico Cole</InfoItemValue>
            </InfoItemBody>
          </InfoItem>
          <InfoItem>
            <InfoItemImage>
              <RoundSquareSVG />
            </InfoItemImage>
            <InfoItemBody>
              <InfoItemLabel>Instant price</InfoItemLabel>
              <InfoItemValue>3.5 AVO</InfoItemValue>
            </InfoItemBody>
          </InfoItem>
        </InfoItems>
        <Auction timeBeforeEnd={timeBeforeEnd} />
        <Link href={'/nft/newNFT'}>
          <Button
            btnType={ButtonType.Secondary}
            size={ButtonSize.Large}
            fullSize={true}
          >
            Place a bid
          </Button>
        </Link>

        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
          style={{ marginTop: '8px' }}
          fullSize={true}
        >
          View item
        </Button>
        <Arrows>
          <Arrow>
            <ArrowLeftSVG />
          </Arrow>
          <Arrow>
            <ArrowRightSVG />
          </Arrow>
        </Arrows>
      </InfoBar>
    </CreatorNetworkWrapper>
  );
};

const CreatorNetworkWrapper = styled.div`
  margin-top: 128px;
  display: flex;
  gap: 128px;
`;

const Player = styled.div`
  background: #9757d7;
  border-radius: 16px;
  background-image: url(/images/player.jpg);
  min-width: 640px;
  height: 800px;
`;

const InfoBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: -1px;
  margin: 0;
`;

const InfoItems = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 65px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoItemImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #45b36b;
  background-position: center;
  background-size: cover;
`;

const InfoItemBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoItemLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

const InfoItemValue = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
`;

const Arrows = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 50%;
  color: #777e91;
`;

export default CreatorNetwork;
