import styled from 'styled-components';
import { handleSetActiveClick } from '../../common/helpers';
import React from 'react';
import { devices } from '../../../common/constants';

type Props = {
  screenSize: 'large' | 'small';
};

const TabButtonsGroup: React.FC<Props> = ({ screenSize }) => {
  return (
    <TabButtonsContainer>
      <TabButton
        className="tab-btn active"
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>Info</p>
      </TabButton>
      <TabButton
        className="tab-btn"
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>Owners</p>
      </TabButton>
      <TabButton
        className="tab-btn"
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>History</p>
      </TabButton>
      {screenSize === 'small' && (
        <TabButton
          className="tab-btn"
          onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
        >
          <p>Bids</p>
        </TabButton>
      )}
    </TabButtonsContainer>
  );
};

const TabButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 6px;
  gap: 10px;
  width: 564px;
  height: 40px;

  @media (${devices.tablet}) {
    width: auto;
  }

  @media (${devices.mobile}) {
    width: auto;
  }
`;

const TabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  border-radius: 100px;
  border: 2px solid #e6e8ec;
  background-color: #fafafb;
  color: #777e91;
  cursor: pointer;
  &:hover {
    background-color: #e6e8ec;
  }
  p {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
  &.active {
    background: #353945;
    border: 2px solid #353945;
    color: #fafafb;
    &:hover {
      background-color: #515261;
      border-color: #515261;
    }
  }
`;

export default TabButtonsGroup;
