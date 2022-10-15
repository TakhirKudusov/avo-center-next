import styled from 'styled-components';
import { useRouter } from 'next/router';

import {
  Button,
  ButtonSize,
  ButtonType,
  CoppyToClipboard,
  Divider,
  RoundButton,
} from '../../ui-kit';
import { links } from './constants';
import CopySVG from '../../../assets/svg/copy.svg';
import ShareIconSvg from '../../../assets/svg/share-icon.svg';

type Props = { isUserProfile: boolean };

const ProfileCard = ({ isUserProfile }: Props) => {
  const router = useRouter();

  const cardUrl = '/images/profile.png';
  const userName = 'Enrico Cole';
  const walletId = '0xc4c16a645...b21a';
  const description =
    'A wholesome farm owner in Montana. Upcoming gallery solo show in Germany';

  return (
    <CardContainer>
      <Avatar avatarUrl={cardUrl} />
      <Title>{userName}</Title>
      <WalletId>
        {walletId}
        <CoppyToClipboard text={walletId}>
          <CopySVG style={{ cursor: 'pointer' }} />
        </CoppyToClipboard>
      </WalletId>
      <Description>{description}</Description>
      <ButtonsWrapper>
        <Button fullSize size={ButtonSize.Medium} type={ButtonType.Secondary}>
          {isUserProfile ? 'Create NFT' : 'Follow'}
        </Button>
        <CoppyToClipboard text={router.pathname}>
          <RoundButton icon={<ShareIconSvg />} />
        </CoppyToClipboard>
      </ButtonsWrapper>
      <Links>
        {links.map((link) => (
          <a key={link.id} href="">
            {link.icon}
          </a>
        ))}
      </Links>
      <Divider />
      <MembershipInfo>Member since Mar 15, 2021</MembershipInfo>
    </CardContainer>
  );
};

export default ProfileCard;

const CardContainer = styled.div`
  position: absolute;
  top: 294px;
  width: 256px;
  height: 557px;
  border: 1px solid #e6e8ec;
  border-radius: 16px;
  padding: 32px 35px;
  background-color: #ffffff;
  box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.div<{ avatarUrl: string }>`
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 25px;
`;

const Title = styled.div`
  /* font-family: 'Poppins'; */
  font-size: 24px;
  color: #23262f;
  font-weight: 600;
  line-height: 32px;
`;

const WalletId = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  display: flex;
  gap: 8px;
`;

const Description = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 32px;
`;

const Links = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 30px;
`;

const MembershipInfo = styled.div`
  color: #777e91;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
