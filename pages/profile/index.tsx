import styled from 'styled-components';
import Link from 'next/link';

import StoreLayout from '../../components/layouts/store';
import { ProfileCard } from '../../components/profile';
import FlatList from '../../components/ui-kit/FlatList';
import { ContentContainer, FlexContainer } from '../../components/common';
import ImageSVG from '../../assets/svg/image.svg';
import EditSVG from '../../assets/svg/edit.svg';

import { FollowType } from '../../components/profile/ProfileTabs/constants';
import {
  CreatedTab,
  FollowersTab,
  OnSaleTab,
} from '../../components/profile/ProfileTabs';
import { useState } from 'react';
import { ListItem } from '../../components/ui-kit/FlatList/types';
import { Button, ButtonSize, ButtonType } from '../../components/ui-kit';

function Profile() {
  const [isUserProfile, setIsUserProfile] = useState(false);

  const TABS: ListItem[] = [
    {
      id: 1,
      label: 'On Sale',
      children: <OnSaleTab />,
    },
    {
      id: 2,
      label: 'Collectibles',
    },
    {
      id: 3,
      label: 'Created',
      children: <CreatedTab />,
    },
    {
      id: 4,
      label: 'Likes',
    },
    {
      id: 5,
      label: 'Following',
      children: <FollowersTab followType={FollowType.UNFOLLOW} />,
    },
    {
      id: 6,
      label: 'Followers',
      children: <FollowersTab followType={FollowType.FOLLOW} />,
    },
  ];

  const handleTabChange = (item: ListItem) => {
    console.log(213);
  };

  return (
    <StyledFlexContainer>
      <PageContainer>
        <Cover>
          <Button
            style={{ color: '#fff', border: '2px solid #777E91' }}
            size={ButtonSize.Medium}
            btnType={ButtonType.Primary}
          >
            Edit cover photo
            <StyledImageSVG />
          </Button>
          <Link href={'/profile/edit'}>
            <Button
              style={{ color: '#fff', border: '2px solid #777E91' }}
              size={ButtonSize.Medium}
              btnType={ButtonType.Primary}
            >
              Edit profile
              <StyledEditSVG />
            </Button>
          </Link>
        </Cover>
        <ProfileWrapper>
          <ProfileCard isUserProfile={isUserProfile} />
          <CardsWrapper>
            <FlatList items={TABS} onChange={handleTabChange} />
          </CardsWrapper>
        </ProfileWrapper>
      </PageContainer>
    </StyledFlexContainer>
  );
}

export default Profile;

Profile.PageLayout = StoreLayout;

const StyledFlexContainer = styled(FlexContainer)`
  max-width: 1310px;
`;

const PageContainer = styled(ContentContainer)`
  position: relative;
`;

const Cover = styled.div`
  background-image: url(/images/profileCover.png);
  width: 1445px;
  height: 326px;
  margin: 82px auto;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 32px 160px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 15px;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 415px) {
    width: 375px;
    height: 100px;
    margin: 82px auto;
  }
`;

const StyledImageSVG = styled(ImageSVG)`
  margin-left: 12px;

  & > path {
    fill: #fff;
  }
`;

const StyledEditSVG = styled(EditSVG)`
  margin-left: 12px;

  & > path {
    fill: #fff;
  }
`;

const ProfileWrapper = styled.div`
  padding-left: 160px;

  @media (max-width: 1024px) {
    padding-left: 80px;
  }

  @media (max-width: 415px) {
    padding-left: 0;
  }
`;

const CardsWrapper = styled.div`
  padding-left: 320px;

  @media (max-width: 415px) {
    padding-left: 0;
    margin-top: 500px;
    margin-bottom: 40px;
  }
`;
