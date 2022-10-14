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
      <TextAreaContainer>
        <TextArea placeholder={'Comment...'} />
        <SendButton>
          <p>Send</p>
        </SendButton>
      </TextAreaContainer>
    </TextAreaWrapper>
  );
};

const SendButton = styled.button`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  padding: 6px 10px;
  gap: 10px;
  width: 62px;
  height: 28px;
  background: #333333;
  border-radius: 6px;
  position: relative;
  bottom: 14px;
  right: 6px;
  cursor: pointer;
  border: none;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  & p {
    width: 30px;
    height: 16px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    position: relative;
    bottom: 12px;
  }
  &:hover {
    background-color: #515261;
  }
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    top: 25.67%;
    bottom: 37.5%;
  }
  & :last-child {
    position: relative;
    right: 5%;
    top: 45%;
    bottom: 16.67%;
  }
`;

const TextArea = styled.textarea`
  padding: 6px 8px 6px 16px;
  width: 1016px;
  height: 40px;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  resize: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #23262f;
  position: relative;
  top: 20px;
  ::placeholder {
    font-size: 12px;
    line-height: 20px;
    display: flex;
    text-align: start;
    color: #777e91;
    position: relative;
    top: 3px;
  }
`;

export default TextAreaBlock;
