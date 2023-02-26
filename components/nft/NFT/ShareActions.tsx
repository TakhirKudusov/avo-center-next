import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import TelegramSVG from '../../../assets/svg/telegram.svg';
import TwitterSVG from '../../../assets/svg/twitter.svg';
import WhatsAppSVG from '../../../assets/svg/whats-app.svg';
import CopySVG from '../../../assets/svg/copy.svg';
import {
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import { CoppyToClipboard } from '../../ui-kit';

const ShareActions: FC = () => {
  const [locationHref, setLocationHref] = useState('');

  useEffect(() => {
    setLocationHref(window.location.href);
  }, []);

  const actions = [
    {
      id: 'telegram',
      icon: (
        <TelegramShareButton
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          url={locationHref}
        >
          <TelegramSVG color="rgba(255, 255, 255, 0.7)" />
          <ActionLabel>Telegram</ActionLabel>
        </TelegramShareButton>
      ),
    },
    {
      id: 'twitter',
      icon: (
        <TwitterShareButton
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          url={locationHref}
        >
          <TwitterSVG color="rgba(255, 255, 255, 0.7)" />
          <ActionLabel>Twitter</ActionLabel>
        </TwitterShareButton>
      ),
    },
    {
      id: 'whatsApp',
      icon: (
        <WhatsappShareButton
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          url={locationHref}
        >
          <WhatsAppSVG color="rgba(255, 255, 255, 0.7)" />
          <ActionLabel>WhatsApp</ActionLabel>
        </WhatsappShareButton>
      ),
    },
    {
      id: 'copy-link',
      icon: (
        <CoppyToClipboard text={locationHref}>
          <CoppyButtonContainer>
            <CopySVG
              color="rgba(255, 255, 255, 0.7)"
              style={{ cursor: 'pointer' }}
            />
            <ActionLabel>Copy link</ActionLabel>{' '}
          </CoppyButtonContainer>
        </CoppyToClipboard>
      ),
    },
  ];

  return (
    <Wrapper>
      {actions.map((item) => (
        <ActionWrapper key={item.id}>{item.icon}</ActionWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 169px;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 16px 0;
  border-bottom: 1px solid #e6e8ec;
  cursor: pointer;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: unset;
  }

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(12, 51, 60, 0.2) 0%,
        rgba(12, 55, 83, 0.0447917) 77.08%,
        rgba(255, 255, 255, 0) 100%
      );
  }
`;
const ActionLabel = styled.span`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const CoppyButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default ShareActions;
