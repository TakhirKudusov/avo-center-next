import styled from 'styled-components';
import CameraSVG from '../../../../assets/svg/camera.svg';
import { devices } from '../../../../common/constants';
import useConnectForm from '../../../ui-kit/useConnectForm';
import { FieldInputProps, FormikProps } from 'formik';
import { TFormFieldProps } from '../../../../common/types';
import { useDropzone } from 'react-dropzone';

type Props = {
  hasSchema: false;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  onChange: () => void;
};

const AvatarUploader: React.FC<Props & TFormFieldProps> = ({
  field,
  hasSchema,
  form,
}) => {
  const { getInputProps, acceptedFiles } = useDropzone({});

  useConnectForm(acceptedFiles, form, field, hasSchema);

  return (
    <Container>
      <CameraButton
        {...getInputProps()}
        style={{ display: 'block' }}
        id="camera"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
      />
      <CameraSVGWrapper htmlFor="camera">
        <StyledCameraSVG />
      </CameraSVGWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

const CameraButton = styled.input`
  position: relative;
  bottom: 32%;
  left: 80%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 40px;
  background-size: 20px 20px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.35) 0%,
      rgba(12, 55, 83, 0.15) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );

  @media (${devices.mobile}) {
    width: 32px;
    height: 32px;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
    width: 40px;
    height: 40px;
  }

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(12, 51, 60, 0.8) 0%,
        rgba(12, 55, 83, 0.5) 77.08%,
        rgba(255, 255, 255, 0) 100%
      );
  }
`;

const CameraSVGWrapper = styled.label`
  cursor: pointer;
`;

const StyledCameraSVG = styled(CameraSVG)`
  position: absolute;
  left: 42px;
  bottom: 23px;

  @media (${devices.mobile}) {
    left: 39px;
    bottom: 27px;
  }
`;

export default AvatarUploader;
