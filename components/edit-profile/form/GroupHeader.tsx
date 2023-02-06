import styled from 'styled-components';
import ExclamationSVG from '../../../assets/svg/exclamation.svg';
import { memo } from 'react';
import { PrimaryHeaderText } from '../common/enums';

type Props = {
  header: PrimaryHeaderText;
};

const GroupHeader = ({ header }: Props) => {
  return (
    <>
      <GroupHeader.Header type={header}>
        <GroupHeader.HeaderText>{header}</GroupHeader.HeaderText>
        {/* {header === PrimaryHeaderText.ACCOUNT_INFO && (
          <GroupHeader.ExclamationIcon />
        )} */}
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
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262f;
  margin-top: 0;
  margin-bottom: 0;
`;

const Header = styled.div<{ type?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 24px;
  margin-top: ${({ type }) => type === 'Social' && '50px'};
`;

GroupHeader.Header = Header;
GroupHeader.HeaderText = HeaderText;
GroupHeader.ExclamationIcon = ExclamationIcon;

export default memo(GroupHeader);
