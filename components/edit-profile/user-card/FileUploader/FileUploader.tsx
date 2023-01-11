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
  onChange,
}) => {
  const { getInputProps, getRootProps, acceptedFiles } = useDropzone({});

  useConnectForm(acceptedFiles, form, field, hasSchema, onChange);

  return (
    <Container {...getRootProps()}>
      <CameraButton
        {...getInputProps()}
        style={{ display: 'block' }}
        id="camera"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={onChange}
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
  background-color: #333333;

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
    background-color: #515261;
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
