import { useContext } from 'react';
import styled from 'styled-components';

import CoinSVG from '../../../assets/svg/coin.svg';
import ArrowRightSquareSVG from '../../../assets/svg/arrow-right-square.svg';
import CircleCloseSVG from '../../../assets/svg/circle-close.svg';
import FilledCircleCloseSVG from '../../../assets/svg/filled-circle-close.svg';
import InfoCircleSVG from '../../../assets/svg/info-circle.svg';
import { useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';

import { NFTContext } from './context';

const TokenActions = () => {
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const {
    setIsTransferTokenModalOpen,
    setIsRemoveFromSaleModalOpen,
    setIsBurnTokenModalOpen,
    setIsReportModalOpen,
    setOpenChangePrice,
    handleDownloadFile,
  } = useContext(NFTContext);

  const authActions = [
    {
      id: 'change-price',
      label: 'Change price',
      icon: <CoinSVG color="rgba(255, 255, 255, 0.7)" />,
      onClick: () => setOpenChangePrice(true),
    },
    {
      id: 'transfer-token',
      label: 'Transfer token',
      icon: <ArrowRightSquareSVG color="rgba(255, 255, 255, 0.7)" />,
      onClick: () => setIsTransferTokenModalOpen(true),
    },
    {
      id: 'remove-from-sale',
      label: 'Remove from sale',
      icon: <CircleCloseSVG color="rgba(255, 255, 255, 0.7)" />,
      onClick: () => setIsRemoveFromSaleModalOpen(true),
    },
    {
      id: 'burn-token',
      label: <StyledLabel>Burn token</StyledLabel>,
      icon: <FilledCircleCloseSVG color="#EB5757" />,
      onClick: () => setIsBurnTokenModalOpen(true),
    },
    {
      id: 'report',
      label: 'Report',
      icon: <InfoCircleSVG color="rgba(255, 255, 255, 0.7)" />,
      onClick: () => setIsReportModalOpen(true),
    },
  ];

  const unAuthActions = [
    {
      id: 'download',
      label: 'Download',
      icon: <ArrowRightSquareSVG color="rgba(255, 255, 255, 0.7)" />,
      onClick: () => handleDownloadFile('nft-image.png'),
    },
    {
      id: 'report',
      label: 'Report',
      icon: <InfoCircleSVG color="rgba(255, 255, 255, 0.7)" />,
      onClick: () => setIsReportModalOpen(true),
    },
  ];

  return (
    <Wrapper>
      {(!!user ? authActions : unAuthActions).map((item) => (
        <ActionWrapper onClick={item.onClick} key={item.id}>
          {item.icon}
          <ActionLabel>{item.label}</ActionLabel>
        </ActionWrapper>
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

const StyledLabel = styled.span`
  font-weight: 700;
  line-height: 16px;
  color: #ef466f;
`;

export default TokenActions;
