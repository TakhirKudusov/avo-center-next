import styled from 'styled-components';
import ExclamationSVG from '../../../assets/svg/exclamation.svg';
import { memo, ReactNode } from 'react';
import { HeaderTextEnum } from '../common/enums';

type Props = {
  header: HeaderTextEnum;
};

const GroupHeader = ({ header }: Props) => {
  return (
    <>
      <GroupHeader.Header type={header}>
        <GroupHeader.HeaderText>{header}</GroupHeader.HeaderText>
        {header === 'Account info' && <GroupHeader.ExclamationIcon />}
      </GroupHeader.Header>
    </>
  );
};

const ExclamationIcon = styled(ExclamationSVG)`
  cursor: pointer;
`;

const HeaderText = styled.p`
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin-top: 0;
  margin-bottom: 0;
`;

const Header = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 744px;
  height: 24px;
  margin-bottom: 20px;
  margin-top: ${({ type }) => type === 'Social' && '20px'};
`;

GroupHeader.Header = Header;
GroupHeader.HeaderText = HeaderText;
GroupHeader.ExclamationIcon = ExclamationIcon;

export default memo(GroupHeader);
