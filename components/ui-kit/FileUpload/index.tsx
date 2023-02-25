import styled from 'styled-components';
import UploadSVG from '../../../assets/svg/upload.svg';
import { useDropzone } from 'react-dropzone';
import { TFormFieldProps } from '../../../common/types';
import { FieldInputProps, FieldMetaProps, FormikProps } from 'formik';
import useConnectForm from '../useConnectForm';

// TODO Настроить тип
// type UploadedFile = File & { path: string };

type Props = {
  label: string;
  description: string;
  hasSchema?: boolean;
  hasError?: boolean;
  field?: FieldInputProps<any>;
  form?: FormikProps<any>;
  meta?: FieldMetaProps<any>;
  onChange?: (files: File[]) => void;
};
const FileUpload: React.FC<Props & TFormFieldProps> = ({
  hasError = false,
  hasSchema = false,
  label,
  description,
  field,
  form,
  onChange,
}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});

  useConnectForm(acceptedFiles, form, field, hasSchema, onChange);

  return (
    <FileUploadWrapper {...getRootProps()}>
      <ElementTitle>{label}</ElementTitle>
      <ElementDescription>{description}</ElementDescription>
      <FileInput {...getInputProps()} />
      <FileUploadSection hasError={hasError}>
        <FileUploadContent>
          <UploadSVG color="#ffffff" />
          <UploadAllowedTypes>
            PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
          </UploadAllowedTypes>
        </FileUploadContent>
        <FilesWrapper>
          {acceptedFiles.map((file: any) => (
            <FileItem key={file.path}>
              {file.path} - {file.size} bytes
            </FileItem>
          ))}
        </FilesWrapper>
      </FileUploadSection>
    </FileUploadWrapper>
  );
};

const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ElementTitle = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #fcfcfd;
`;

const ElementDescription = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
`;

const FileUploadSection = styled.div<{ hasError: boolean }>`
  width: 100%;
  min-height: 182px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  cursor: pointer;
  border-radius: 16px;
  margin-top: 16px;
  gap: 11px;
  border: ${(props) => (props.hasError ? '2px solid #ef466f' : 'none')};

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(12, 51, 60, 0.4) 0%,
        rgba(12, 55, 83, 0.0447917) 77.08%,
        rgba(255, 255, 255, 0) 100%
      );
  }
`;

const FileUploadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

const FileInput = styled.input``;

const UploadAllowedTypes = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
`;

const FilesWrapper = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin-bottom: -20px;
  margin-top: 0;
`;

const FileItem = styled.li`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export default FileUpload;
