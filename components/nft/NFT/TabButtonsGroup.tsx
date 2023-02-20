import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

import { Divider } from '../../ui-kit';
import { handleSetActiveClick } from '../../common/helpers';
import { DEFAULT_IMAGE_URL, devices } from '../../../common/constants';
import { NftInfoTabs } from './constants';
import { infoTabMock } from './Mock';
import { getImageUrl } from '../../../common/helpers/getImageUrl.helper';

type Props = { nftOwners: { creator: any; owner: any } };

const TabButtonsGroup: React.FC<Props> = ({ nftOwners }) => {
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
          <TabItemInfo>
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
          <TabItemInfo>
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
      {activeTab === NftInfoTabs.BIDS && <TabWrapper>Bids</TabWrapper>}
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
  padding: 6px 12px;
  gap: 10px;
  border-radius: 100px;
  border: 2px solid #e6e8ec;
  background-color: #fafafb;
  color: #777e91;
  cursor: pointer;
  &:hover {
    background-color: #e6e8ec;
  }
  p {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
  &.active {
    background: #353945;
    border: 2px solid #353945;
    color: #fafafb;
    &:hover {
      background-color: #515261;
      border-color: #515261;
    }
  }
`;

const TabItemInfo = styled.div`
  display: flex;
`;

const TabItemLabel = styled.div`
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`;

const TabItemValue = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
  margin-top: 10px;
`;

const TabWrapper = styled.div`
  width: 70%;
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
