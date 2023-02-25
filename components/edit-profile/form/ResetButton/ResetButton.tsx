import { FC, memo, MutableRefObject } from 'react';
import styled from 'styled-components';
import { screenSizes } from '../../../../common/constants';
import { Button, ButtonType } from '../../../ui-kit';
import { ProfileFormItemName } from '../../common/constants';
import CircleCloseFilledSVG from '../../../../assets/svg/circle-close-filled.svg';
import { useRouter } from 'next/router';

type Props = {
  screenSize: number;
  formRef: MutableRefObject<any>;
};

const ResetButton: FC<Props> = ({ screenSize, formRef }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleRedirectToProfile = () => {
    router.push(`/profile/${id}`);
  };

  return (
    <Button
      fullSize={screenSize <= screenSizes.mobileL}
      btnType={ButtonType.Outlined}
      style={{ background: 'none', color: '#ffffff' }}
      onClick={handleRedirectToProfile}
    >
      <DontSaveChanges>Do not save changes</DontSaveChanges>
      <CircleCloseFilledSVG color="#777E91" />
    </Button>
  );
};

const DontSaveChanges = styled.span`
  margin-right: 8px;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default memo(ResetButton);
