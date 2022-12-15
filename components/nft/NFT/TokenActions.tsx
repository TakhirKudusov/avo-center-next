import styled from 'styled-components';

import CoinSVG from '../../../assets/svg/coin.svg';
import ArrowRightSquareSVG from '../../../assets/svg/arrow-right-square.svg';
import CircleCloseSVG from '../../../assets/svg/circle-close.svg';
import FilledCircleCloseSVG from '../../../assets/svg/filled-circle-close.svg';
import InfoCircleSVG from '../../../assets/svg/info-circle.svg';

const TokenActions = () => {
  const actions = [
    {
      id: 'change-price',
      label: 'Change price',
      icon: <CoinSVG color="#777E91" />,
      onClick: () => false,
    },
    {
      id: 'transfer-token',
      label: 'Transfer token',
      icon: <ArrowRightSquareSVG color="#777E91" />,
      onClick: () => false,
    },
    {
      id: 'remove-from-sale',
      label: 'Remove from sale',
      icon: <CircleCloseSVG color="#777E91" />,
      onClick: () => false,
    },
    {
      id: 'burn-token',
      label: <StyledLabel>Burn token</StyledLabel>,
      icon: <FilledCircleCloseSVG />,
      onClick: () => false,
    },
    {
      id: 'report',
      label: 'Report',
      icon: <InfoCircleSVG color="#777E91" />,
      onClick: () => false,
    },
  ];

  return (
    <Wrapper>
      {actions.map((item) => (
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
    background: #f4f5f6;
  }
`;

const ActionLabel = styled.span`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777e91;
`;

const StyledLabel = styled.span`
  font-weight: 700;
  line-height: 16px;
  color: #ef466f;
`;

export default TokenActions;