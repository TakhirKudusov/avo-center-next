import styled from 'styled-components';
import { useRouter } from 'next/router';

import {
  Button,
  ButtonSize,
  ButtonType,
  CoppyToClipboard,
  Divider,
  // Modal,
  RoundButton,
} from '../../ui-kit';
import { links } from './constants';
import CopySVG from '../../../assets/svg/copy.svg';
import ShareIconSvg from '../../../assets/svg/share-icon.svg';
import { useState } from 'react';
import { devices } from '../../../common/constants';

type Props = { isUserProfile: boolean };

const ProfileCard = ({ isUserProfile }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const cardUrl = '/images/profile.png';
  const userName = 'Enrico Cole';
  const walletId = '0xc4c16a645...b21a';
  const description =
    'A wholesome farm owner in Montana. Upcoming gallery solo show in Germany';

  const handleFollow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleClose();
  };

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
        <Button
          onClick={handleFollow}
          fullSize
          size={ButtonSize.Medium}
          btnType={ButtonType.Secondary}
        >
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
      {/* TODO: remove */}
      {/* <Modal
        title="Checkout"
        open={open}
        confirmBtnName="I understand, continue"
        cancelBtnName="Cancel"
        onClose={handleClose}
        onConfirm={handleConfirm}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iusto
          incidunt, earum reprehenderit magni nihil inventore consectetur
          repudiandae! Rem voluptas odio iure numquam porro, facere ex culpa
          alias neque voluptates.F
        </div>
      </Modal> */}
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
  box-shadow: 0 40px 32px -24px rgba(15, 15, 15, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${devices.mobile}) {
    top: 290px;
    width: 85%;
    left: 35px;
  }
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
