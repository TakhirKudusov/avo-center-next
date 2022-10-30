import styled from 'styled-components';
import UploadSVG from '../../../assets/svg/upload.svg';

type Props = {
  title: string;
  description: string;
};
const FileUpload: React.FC<Props> = ({ title, description }) => {
  return (
    <FileUploadWrapper>
      <ElementTitle>{title}</ElementTitle>
      <ElementDescription>{description}</ElementDescription>
      <FileUploadSection>
        <UploadSVG />
        <UploadAllowedTypes>
          PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
        </UploadAllowedTypes>
      </FileUploadSection>
    </FileUploadWrapper>
  );
};

const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ElementTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #23262f;
`;

const ElementDescription = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #777e91;
  margin-top: 4px;
`;

const FileUploadSection = styled.div`
  width: 100%;
  height: 182px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f5f6;
  border-radius: 16px;
  margin-top: 16px;
  gap: 11px;
`;

const UploadAllowedTypes = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
`;

export default FileUpload;
