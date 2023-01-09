import { FC, memo, MutableRefObject } from 'react';
import styled from 'styled-components';
import { screenSizes } from '../../../../common/constants';
import { Button, ButtonType } from '../../../ui-kit';
import CircleCloseSVG from '../../../../assets/svg/circle-close.svg';
import { ProfileFormItemName } from '../../common/constants';

type Props = {
  screenSize: number;
  formRef: MutableRefObject<any>;
};

const ResetButton: FC<Props> = ({ screenSize, formRef }) => {
  const handleFormClear = () => {
    const { setFieldValue, values } = formRef.current;

    if (formRef.current) {
      for (let key in values) {
        if (key === ProfileFormItemName.AVATAR) {
          setFieldValue(key, []);
        } else {
          setFieldValue(key, '');
        }
      }
    }
  };

  return (
    <Button
      fullSize={screenSize <= screenSizes.mobileL}
      btnType={ButtonType.Outlined}
      onClick={handleFormClear}
    >
      <CircleCloseIcon color="#777E91" />
      Clear all
    </Button>
  );
};

const CircleCloseIcon = styled(CircleCloseSVG)`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;

export default memo(ResetButton);
