import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AdminRoute } from '../../utils/routes';

const MainAdmin = () => {
  const router = useRouter();

  const handleCardClick = (endpoint: AdminRoute) => () => {
    router.push(endpoint);
  };

  return (
    <Wrapper>
      <PageHeader>Welcome to the AVO Admin</PageHeader>
      <MenuContainer>
        <MenuCard
          onClick={handleCardClick(AdminRoute.NFTs)}
          image="/images/admin_images/menu_1.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage NFTs</CardHeader>
          </CardInfoContainer>
        </MenuCard>
        <MenuCard
          onClick={handleCardClick(AdminRoute.USERS)}
          image="/images/admin_images/menu_2.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage users</CardHeader>
          </CardInfoContainer>
        </MenuCard>
        <MenuCard
          onClick={handleCardClick(AdminRoute.BIDS)}
          image="/images/admin_images/menu_3.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage bids</CardHeader>
          </CardInfoContainer>
        </MenuCard>
        <MenuCard
          onClick={handleCardClick(AdminRoute.CATEGORIES)}
          image="/images/admin_images/menu_4.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage categories</CardHeader>
          </CardInfoContainer>
        </MenuCard>
        <MenuCard
          onClick={handleCardClick(AdminRoute.COLLECTIONS)}
          image="/images/admin_images/menu_5.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage collections</CardHeader>
          </CardInfoContainer>
        </MenuCard>
        <MenuCard
          onClick={handleCardClick(AdminRoute.FAQS)}
          image="/images/admin_images/menu_6.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage FAQs</CardHeader>
          </CardInfoContainer>
        </MenuCard>
        <MenuCard
          onClick={handleCardClick(AdminRoute.REPORTS)}
          image="/images/admin_images/menu_7.webp"
        >
          <CardInfoContainer>
            <CardHeader>Manage reports1</CardHeader>
          </CardInfoContainer>
        </MenuCard>
      </MenuContainer>
    </Wrapper>
  );
};

const PageHeader = styled.div`
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
  color: rgba(35, 38, 47, 0.8);
  width: fit-content;
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 32px 20px 145px;
  width: 100%;
  align-items: flex-start;
`;

const CardHeader = styled.div`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: rgba(35, 38, 47, 0.9);
  cursor: pointer;
  width: fit-content;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 93%;
  width: fit-content;
  gap: 18px;
  justify-content: center;
`;

const MenuCard = styled.div<{ image: string }>`
  display: flex;
  border-radius: 12px;
  background-color: white;
  flex-basis: 32.2%;
  height: 160px;
  border: 2px solid #e6e8ec;
  box-shadow: 0 12px 12px -9px rgba(31, 47, 70, 0.12);
  cursor: pointer;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: -10px;
  background-size: auto 160px;
  min-width: 306px;
  transition: 0.1s linear;
  &:hover {
    background-color: #fcfcfd;
    background-position: 0;

    & * {
      color: rgb(35, 38, 47);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  row-gap: 40px;
`;

export default MainAdmin;
