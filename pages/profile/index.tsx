import styled from 'styled-components';

import StoreLayout from '../../components/layouts/store';
import { ProfileCard } from '../../components/profile';
import FlatList from '../../components/ui-kit/FlatList';
import { ContentContainer, FlexContainer } from '../../components/common';

import { FollowType } from '../../components/profile/ProfileTabs/constants';
import {
  CreatedTab,
  FollowersTab,
  OnSaleTab,
} from '../../components/profile/ProfileTabs';
import { useState } from 'react';
import { ListItem } from '../../components/ui-kit/FlatList/types';

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
        <Cover />
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
`;

const ProfileWrapper = styled.div`
  padding-left: 160px;
`;

const CardsWrapper = styled.div`
  padding-left: 320px;
`;
