import styled from 'styled-components';
import moment from 'moment';

import {
  Button,
  ButtonSize,
  ButtonType,
  CoppyToClipboard,
  Divider,
} from '../../ui-kit';
import CopySVG from '../../../assets/svg/copy.svg';
import { useContext } from 'react';
import { devices } from '../../../common/constants';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TProfileState } from '../../../redux/slicers/profileSlicer/types';
import TwitterSVG from '../../../assets/svg/twitter.svg';
import FilledCircleCloseSVG from '../../../assets/svg/filled-circle-close.svg';
import FilledCheckSVG from '../../../assets/svg/filled-check.svg';
import { TAuthState } from '../../../redux/types';
import { UploadItemContext } from '../../layouts/store/contexts';
import {
  followUser,
  unFollowUser,
} from '../../../redux/slicers/profileSlicer/profileSlicer';
import { getSlicedPublicAddress } from '../../../common/helpers';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';

type Props = {};

const ProfileCard = ({}: Props) => {
  const dispatch = useAppDispatch();

  const { user: profileUser } = useAppSelector<TProfileState>(
    (state) => state.profile,
  );
  const { user } = useAppSelector<TAuthState>((state) => state.auth);

  const isMineProfile = user?.id === profileUser?._id;

  const { handleUploadClick } = useContext(UploadItemContext);

  const handleFollow = () => {
    if (isMineProfile) {
      handleUploadClick()();
    } else {
      const followingUser = profileUser?.followers.find(
        (item) => item._id === user?.id,
      );

      if (!!followingUser && profileUser) {
        dispatch(unFollowUser(profileUser._id));
      }
      if (!followingUser && profileUser) {
        dispatch(followUser(profileUser._id));
      }
    }
  };

  return (
    <>
      {!!profileUser ? (
        <CardContainer>
          <Avatar
            avatarUrl={
              !!profileUser.avatar
                ? getImageUrl(profileUser.avatar)
                : '/images/defaultUserImage.png'
            }
          />
          <Title>{profileUser?.username}</Title>
          {isMineProfile && (
            <WalletId>
              <PublicAddress>
                {getSlicedPublicAddress(profileUser.publicAddress)}
              </PublicAddress>
              <CoppyToClipboard text={profileUser.publicAddress}>
                <CopySVG color="#27AE60" style={{ cursor: 'pointer' }} />
              </CoppyToClipboard>
            </WalletId>
          )}
          <Description>{profileUser.bio}</Description>
          <ButtonsWrapper>
            <Button
              onClick={handleFollow}
              fullSize
              size={ButtonSize.Medium}
              btnType={ButtonType.Secondary}
            >
              {isMineProfile ? 'Create item' : 'Follow'}
            </Button>
            {/* <CoppyToClipboard text={router.pathname}>
              <RoundButton icon={<ShareIconSvg />} />
            </CoppyToClipboard> */}
          </ButtonsWrapper>
          <Links>
            <a
              href={`https://twitter.com/avo_center_bg/${profileUser.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterSVG color="rgba(255, 255, 255, 0.7)" />
            </a>
          </Links>
          <Divider />
          <MembershipInfo>
            Member since {moment(profileUser.createdAt).format('MM DD, YYYY ')}
          </MembershipInfo>
          <VerificationInfo>
            {profileUser.isVerified ? (
              <Verification isVerified={profileUser.isVerified}>
                <FilledCheckSVG color="#fff" />
                Verified
              </Verification>
            ) : (
              <>
                <Verification isVerified={profileUser.isVerified}>
                  <FilledCircleCloseSVG color="#fff" />
                  <span>Not Verified</span>
                </Verification>
                {isMineProfile && (
                  <Button
                    style={{
                      padding: '0px 24px',
                      height: 'auto',
                      border: 'none',
                    }}
                    onClick={() => false}
                    btnType={ButtonType.Primary}
                    size={ButtonSize.Large}
                  >
                    Verify now
                  </Button>
                )}
              </>
            )}
          </VerificationInfo>
        </CardContainer>
      ) : (
        '...Loading'
      )}
    </>
  );
};

export default ProfileCard;

const CardContainer = styled.div`
  position: absolute;
  top: 294px;
  width: 256px;
  height: 557px;
  border: 1px solid #e6e8ec;
  border-radius: 16px;
  padding: 32px 35px;
  /* Card BG */

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${devices.mobile}) {
    top: 290px;
    width: 85%;
    left: 35px;
  }
`;

const Avatar = styled.div<{ avatarUrl: string }>`
  width: 152px;
  height: 152px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ avatarUrl }) => `url(${avatarUrl})`};
  background-position: center;
`;

const Title = styled.div`
  font-family: 'Nasalization';
  font-size: 24px;
  color: #fcfcfd;
  font-weight: 400;
  line-height: 32px;
  margin-top: 5px;
`;

const WalletId = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Description = styled.div`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 20px;
  text-align: center;
  margin-bottom: 25px;
`;

const Links = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 30px;
`;

const MembershipInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const PublicAddress = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 186px;
  color: #fcfcfd;
`;

const VerificationInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 16px;
  gap: 8px;
`;

const Verification = styled.div<{ isVerified: boolean }>`
  background: ${({ isVerified }) => (isVerified ? '#2D9CDB' : '#ff2c5e')};
  width: ${({ isVerified }) => (isVerified ? '99px' : '129px')};
  height: 30px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 12px;
  line-height: 12px;
  font-family: 'Nasalization';
  color: #ffffff;
  text-transform: uppercase;
  font-size: 400;
`;
