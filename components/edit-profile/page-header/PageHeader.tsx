import styled from 'styled-components';
import { Divider } from '../../ui-kit';
import ChevronIconSVG from '../../../assets/svg/up-side-corner.svg';
import { useRouter } from 'next/router';

const PageHeader = () => {
  const router = useRouter();

  const handleRedirectToProfileClick = () => {
    router.push('/profile').catch((error) => console.error(error));
  };

  return (
    <>
      <PageHeader.BreadCrumbWrapper>
        <PageHeader.BreadCrumb>
          <PageHeader.PrevPathText onClick={handleRedirectToProfileClick}>
            Profile
          </PageHeader.PrevPathText>
          <PageHeader.ChevronWrapper>
            <PageHeader.ChevronIcon />
          </PageHeader.ChevronWrapper>
          <PageHeader.CurrPathText>Edit Profile</PageHeader.CurrPathText>
        </PageHeader.BreadCrumb>
      </PageHeader.BreadCrumbWrapper>
      <PageHeader.HeaderDivider />
    </>
  );
};

const ChevronIcon = styled(ChevronIconSVG)`
  transform: rotate(90deg);
  position: relative;
  left: 33%;
`;

const ChevronWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const CurrPathText = styled.p`
  color: #23262f;
  cursor: default;
`;

const PrevPathText = styled.p`
  color: #777e91;
  cursor: pointer;
  :hover {
    color: #23262f;
  }
`;

const BreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 24px;
  height: 24px;
  width: 189px;
  & p {
    height: 16px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    transition: 0.5s;
  }
`;

const BreadCrumbWrapper = styled.div`
  margin: 80px auto auto auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 15px;
  gap: 10px;
  height: 72px;
  width: 1150px;
`;

const HeaderDivider = styled(Divider)`
  margin: 0;
`;

PageHeader.HeaderDivider = HeaderDivider;
PageHeader.BreadCrumbWrapper = BreadCrumbWrapper;
PageHeader.BreadCrumb = BreadCrumb;
PageHeader.PrevPathText = PrevPathText;
PageHeader.CurrPathText = CurrPathText;
PageHeader.ChevronWrapper = ChevronWrapper;
PageHeader.ChevronIcon = ChevronIcon;

export default PageHeader;
