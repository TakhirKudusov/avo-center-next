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
          <Avatar avatarUrl={getImageUrl(profileUser.avatar)} />
          <Title>{profileUser?.username}</Title>
          {isMineProfile && (
            <WalletId>
              <PublicAddress>
                {getSlicedPublicAddress(profileUser.publicAddress)}
              </PublicAddress>
              <CoppyToClipboard text={profileUser.publicAddress}>
                <CopySVG style={{ cursor: 'pointer' }} />
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
              {isMineProfile ? 'Create NFT' : 'Follow'}
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
              <TwitterSVG />
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
                    style={{ padding: '0px 24px', height: 'auto' }}
                    onClick={() => false}
                    btnType={ButtonType.Outlined}
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
  background-color: #ffffff;
  box-shadow: 0 40px 32px -24px rgba(15, 15, 15, 0.12);
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
  font-size: 24px;
  color: #23262f;
  font-weight: 600;
  line-height: 32px;
`;

const WalletId = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-top: 4px;
  display: flex;
  gap: 8px;
`;

const Description = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #777e91;
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
  color: #777e91;
  font-family: 'Poppins';
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 186px;
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
`;
