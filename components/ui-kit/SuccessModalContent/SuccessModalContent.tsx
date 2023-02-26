import { useRouter } from 'next/router';
import styled from 'styled-components';
import Divider from '../Divider';
import { successShareLinks } from './constants';

const SuccessModalContent = () => {
  const router = useRouter();

  const asPath = router.asPath;
  return (
    <SuccessWindowWrapper>
      <CheckCircle />
      <SuccessTitle>Yay!</SuccessTitle>
      <SuccessInfo>You successfully purchased</SuccessInfo>
      <SuccessShowInGallery>Show NFT</SuccessShowInGallery>
      <Divider />
      <SucessShare>Share</SucessShare>
      <SucessMediaWrapper>
        {successShareLinks().map((item) => (
          <SucessMediaCircle key={item.id} target="_blank">
            {item.icon}
          </SucessMediaCircle>
        ))}
      </SucessMediaWrapper>
    </SuccessWindowWrapper>
  );
};

export default SuccessModalContent;

const SuccessWindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 384px;
  color: #23262f;
`;

const SuccessTitle = styled.h1`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  margin: 0 0 56px;
  color: #ffffff;
`;

const SuccessInfo = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  color: #ffffff;
`;

const SuccessShowInGallery = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  background: linear-gradient(48.74deg, #cf47ff -3.69%, #fba04c 100.76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 28px;
  cursor: pointer;
`;

const SucessShare = styled.p`
  font-family: 'Montserrat';
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
`;

const SucessMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const SucessMediaCircle = styled.a`
  border: 2px solid #ffffff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckCircle = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background-image: url(/images/checkCircle.png);
`;
