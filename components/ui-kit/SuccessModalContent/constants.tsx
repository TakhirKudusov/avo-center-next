import WhatsAppSVG from '../../../assets/svg/whats-app.svg';
import TwitterSVG from '../../../assets/svg/twitter.svg';
import TelegramgramSVG from '../../../assets/svg/telegram.svg';
import CopySVG from '../../../assets/svg/copy.svg';

import {
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
} from 'next-share';
import styled from 'styled-components';
import CoppyToClipboard from '../CoppyToClipboard';

export const successShareLinks = () => [
  {
    id: 1,
    icon: (
      <TelegramShareButton
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        url={window.location.href}
      >
        <TelegramgramSVG color="rgba(255, 255, 255, 0.7)" />
      </TelegramShareButton>
    ),
  },
  {
    id: 2,
    icon: (
      <TwitterShareButton
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        url={window.location.href}
      >
        <TwitterSVG color="rgba(255, 255, 255, 0.7)" />
      </TwitterShareButton>
    ),
  },
  {
    id: 3,
    icon: (
      <WhatsappShareButton
        style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        url={window.location.href}
      >
        <WhatsAppSVG color="rgba(255, 255, 255, 0.7)" />
      </WhatsappShareButton>
    ),
  },
  {
    id: 4,
    icon: (
      <CoppyToClipboard text={window.location.href}>
        <CoppyButtonContainer>
          <CopySVG
            color="rgba(255, 255, 255, 0.7)"
            style={{ cursor: 'pointer' }}
          />
        </CoppyButtonContainer>
      </CoppyToClipboard>
    ),
  },
];

const CoppyButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
