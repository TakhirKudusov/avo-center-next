import React from 'react';
import styled from 'styled-components';
import CornerDownRightSVG from '../../../assets/svg/corner-down-right.svg';
import RightSideCornerSVG from '../../../assets/svg/right-side-corner.svg';

const TextAreaBlock: React.FC = () => {
  return (
    <TextAreaWrapper>
      <SendMessageButtonWrapper>
        <CornerDownRightSVG />
        <RightSideCornerSVG />
      </SendMessageButtonWrapper>
      <TextArea placeholder={'Comment...'} />
    </TextAreaWrapper>
  );
};

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
  gap: 6px;
  width: 1056px;
  height: 40px;
`;

const SendMessageButtonWrapper = styled.div`
  width: 25px;
  height: 25px;
  & :first-child {
    position: relative;
    left: 16.67%;
    right: 16.67%;
    top: 16.67%;
    bottom: 37.5%;
  }
  & :last-child {
    position: relative;
    right: 5%;
    top: 36%;
    bottom: 16.67%;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px 6px 16px;
  margin-top: 12px;
  gap: 10px;
  width: 1016px;
  height: 45px;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  resize: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
  ::placeholder {
    font-size: 12px;
    line-height: 20px;
    display: flex;
    text-align: start;
    color: #777e91;
    margin-top: 50px;
  }
`;

export default TextAreaBlock;
