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
import { useEffect } from 'react';
import { ListItem } from '../../components/ui-kit/FlatList/types';
import { Button, ButtonSize, ButtonType } from '../../components/ui-kit';
import { devices } from '../../common/constants';
import { Paths } from '../../common/enums/paths';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUserNfts } from '../../redux/slicers/nftsSlicer/nftSlicer';
import { TAuthState } from '../../redux/types';
import {
  getUserProfile,
  getUsers,
  setInitialUserData,
} from '../../redux/slicers/profileSlicer/profileSlicer';
import { TProfileState } from '../../redux/slicers/profileSlicer/types';
import { useRouter } from 'next/router';
import { ComingSoonTab } from '../../components/profile/ProfileTabs/Tabs';
import { FlatListTypes } from '../../components/ui-kit/FlatList/constants';

function Profile() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { id } = router.query;

  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const { user: profileUser, loading } = useAppSelector<TProfileState>(
    (state) => state.profile,
  );

  const TABS: ListItem[] = [
    {
      id: 1,
      label: 'On Sale',
      children: <OnSaleTab />,
    },
    {
      id: 2,
      label: 'Collectibles',
      children: <ComingSoonTab />,
    },
    {
      id: 3,
      label: 'Created',
      children: <CreatedTab />,
    },
    {
      id: 4,
      label: 'Likes',
      children: <ComingSoonTab />,
    },
    {
      id: 5,
      label: 'Following',
      children: <FollowersTab followType={FollowType.FOLLOWING} />,
    },
    {
      id: 6,
      label: 'Followers',
      children: <FollowersTab followType={FollowType.FOLLOWERS} />,
    },
  ];

  const handleTabChange = (item: ListItem) => {};

  useEffect(() => {
    if (id) {
      dispatch(getUserProfile(id as string));
      dispatch(getUsers());
    }

    return () => {
      dispatch(setInitialUserData());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (profileUser?._id) dispatch(getUserNfts(profileUser?._id));
  }, [dispatch, profileUser?._id]);

  return (
    <StyledFlexContainer>
      <PageContainer>
        <Cover>
          {user && user.id === profileUser?._id && (
            <>
              <Button
                style={{ color: '#fff', border: '2px solid #777E91' }}
                size={ButtonSize.Medium}
                btnType={ButtonType.Primary}
              >
                Edit cover photo
                <StyledImageSVG />
              </Button>
              <Link href={`/profile/${id}/edit`}>
                <Button
                  style={{ color: '#fff', border: '2px solid #777E91' }}
                  size={ButtonSize.Medium}
                  btnType={ButtonType.Primary}
                >
                  Edit profile
                  <StyledEditSVG />
                </Button>
              </Link>
            </>
          )}
        </Cover>
        {/* {loading ? (
          <ProfileWrapper>...Loading</ProfileWrapper>
        ) : (
          <ProfileWrapper>
            <ProfileCard />
            <CardsWrapper>
              <FlatList items={TABS} onChange={handleTabChange} />
            </CardsWrapper>
          </ProfileWrapper>
        )} */}
        <ProfileWrapper>
          <ProfileCard />
          <CardsWrapper>
            <FlatList
              items={TABS}
              type={FlatListTypes.PROFILE_TABS}
              onChange={handleTabChange}
            />
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
  background-size: cover;
  padding: 32px 160px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 15px;

  @media (${devices.tablet}) {
    width: 1024px;
  }

  @media (${devices.mobile}) {
    width: 375px;
    height: 230px;
    margin: 82px auto;
    background-size: cover;
    padding: 48px 24px;
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
  min-height: 420px;

  @media (${devices.tablet}) {
    padding-left: 80px;
  }

  @media (${devices.mobile}) {
    padding-left: 0;
  }
`;

const CardsWrapper = styled.div`
  padding-left: 320px;

  @media (${devices.mobile}) {
    padding-left: 0;
    margin-top: 500px;
    margin-bottom: 40px;
  }
`;
