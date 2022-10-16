import styled from 'styled-components';
import { handleSetActiveClick } from '../../../common/helpers';
import React from 'react';

const TabButtonsGroup: React.FC = () => {
  return (
    <TabButtonsContainer>
      <TabButton
        className={'tab-btn active'}
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>Info</p>
      </TabButton>
      <TabButton
        className={'tab-btn'}
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>Owners</p>
      </TabButton>
      <TabButton
        className={'tab-btn'}
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>History</p>
      </TabButton>
    </TabButtonsContainer>
  );
};

const TabButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px;
  gap: 10px;
  width: 564px;
  height: 40px;
`;

const TabButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  border-radius: 100px;
  border: 2px solid #e6e8ec;
  background-color: #fafafb;
  color: #777e91;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  &:hover {
    background-color: #e6e8ec;
  }
  p {
    font-family: 'DM Sans';
    font-style: normal;
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
