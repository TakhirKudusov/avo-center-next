import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Divider } from '../../ui-kit';
import { handleSetActiveClick } from '../../common/helpers';
import { DEFAULT_IMAGE_URL, devices } from '../../../common/constants';
import { NftInfoTabs } from './constants';
import { infoTabMock } from './Mock';
import { IUser } from '../../../swagger';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';

type Props = { nftOwners: { creator: IUser; owner: IUser } };

const TabButtonsGroup: React.FC<Props> = ({ nftOwners }) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<NftInfoTabs>(NftInfoTabs.INFO);

  // const handleOwnersModalOpen: React.MouseEventHandler<HTMLButtonElement> = (
  //   e,
  // ) => {
  //   handleSetActiveClick(e, 'tab-btn', 'active');
  //   setIsOwnersModalOpen(true);
  // };

  const handleTabChange =
    (tab: NftInfoTabs) =>
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      handleSetActiveClick(e, 'tab-btn', 'active');
      setActiveTab(tab);
    };

  const handleCreatorClick = (id: string) => () => {
    router.push(`/profile/${id}`);
  };

  return (
    <>
      <TabButtonsContainer>
        <TabButton
          className="tab-btn active"
          onClick={handleTabChange(NftInfoTabs.INFO)}
        >
          <p>Info</p>
        </TabButton>
        <TabButton
          className="tab-btn"
          onClick={handleTabChange(NftInfoTabs.OWNERS)}
        >
          <p>Owners</p>
        </TabButton>
        <TabButton
          className="tab-btn"
          onClick={handleTabChange(NftInfoTabs.BIDS)}
        >
          <p>Bids</p>
        </TabButton>
        {/* <TabButton
        className="tab-btn"
        onClick={(e) => handleSetActiveClick(e, 'tab-btn', 'active')}
      >
        <p>History</p>
      </TabButton> */}
      </TabButtonsContainer>
      {activeTab === NftInfoTabs.INFO && (
        <TabWrapper>
          <TabItemLabel>Contract address</TabItemLabel>
          <TabItemValue>{infoTabMock?.cotractAdress}</TabItemValue>
          <Divider style={{ margin: '10px 0' }} />
          <TabItemLabel>Token ID</TabItemLabel>
          <TabItemValue>{infoTabMock?.tokeId}</TabItemValue>
          <Divider style={{ margin: '10px 0' }} />
          <TabItemLabel>Token Standard</TabItemLabel>
          <TabItemValue>{infoTabMock?.tokenStandard}</TabItemValue>
          <Divider style={{ margin: '10px 0' }} />
          <TabItemLabel>Blockchain</TabItemLabel>
          <TabItemValue>{infoTabMock?.blockchain}</TabItemValue>
          <Divider style={{ margin: '10px 0' }} />
          <TabItemLabel>Creator Fees</TabItemLabel>
          <TabItemValue>{infoTabMock?.creatorFees}</TabItemValue>
          <Divider style={{ margin: '10px 0' }} />
        </TabWrapper>
      )}
      {activeTab === NftInfoTabs.OWNERS && (
        <TabWrapper>
          <TabItemInfo onClick={handleCreatorClick(nftOwners.creator._id)}>
            <OwnerAvatar
              imageUrl={
                nftOwners.creator.avatar
                  ? getImageUrl(nftOwners.creator.avatar)
                  : DEFAULT_IMAGE_URL
              }
            />
            <div>
              <TabItemLabel>Creator</TabItemLabel>
              <TabItemValue>{nftOwners.creator.username}</TabItemValue>
              <Divider style={{ margin: '10px 0' }} />
            </div>
          </TabItemInfo>
          <TabItemInfo onClick={handleCreatorClick(nftOwners.owner._id)}>
            <OwnerAvatar
              imageUrl={
                nftOwners.owner.avatar
                  ? getImageUrl(nftOwners.owner.avatar)
                  : DEFAULT_IMAGE_URL
              }
            />
            <div>
              <TabItemLabel>Owner</TabItemLabel>
              <TabItemValue>{nftOwners.owner.username}</TabItemValue>
              <Divider style={{ margin: '10px 0' }} />
            </div>
          </TabItemInfo>
        </TabWrapper>
      )}
      {activeTab === NftInfoTabs.BIDS && (
        <TabWrapper>
          <BidsTabContainer>Comming soon</BidsTabContainer>
        </TabWrapper>
      )}
    </>
  );
};

const TabButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 6px;
  gap: 10px;
  width: 564px;
  height: 40px;

  @media (${devices.tablet}) {
    width: auto;
  }

  @media (${devices.mobile}) {
    width: auto;
  }
`;

const TabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 6px 12px;
  border-radius: 100px;
  cursor: pointer;
  background: none;
  color: rgba(255, 255, 255, 0.7);
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: #141416;
  }
  p {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
  &.active {
    background: #ffffff;
    color: #141416;
  }
`;

const TabItemInfo = styled.div`
  display: flex;
  cursor: pointer;
  font-family: 'Montserrat';
  font-size: 16px;
  line-height: 16px;
`;

const TabItemLabel = styled.div`
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

const TabItemValue = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  margin-top: 4px;
`;

const TabWrapper = styled.div`
  width: 70%;
`;

const BidsTabContainer = styled.p`
  font-family: 'Nasalization';
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  line-height: 32px;
  margin-top: 8px;
`;

const OwnerAvatar = styled.div<{ imageUrl: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 16px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-color: #45b36b;
  background-size: cover;
`;

export default TabButtonsGroup;
