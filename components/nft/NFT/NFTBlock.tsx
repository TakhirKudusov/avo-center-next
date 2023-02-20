import NFTImage from './NFTImage';
import NFTDescription from './NFTDescription';
import { NFT } from '../common/types';
import { ChangeEventHandler, memo, useEffect, useState } from 'react';
import { NFTDescriptionContainer, NFTDescriptionWrapper } from '../index';
import UserActionsButtonsGroup from './UserActionsButtonsGroup';
import styled from 'styled-components';
import { devices, screenSizes } from '../../../common/constants';
import { NFTContext } from './context';
import { Input, Modal } from '../../ui-kit';
import Textarea from '../../ui-kit/Textarea';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { TAuthState } from '../../../redux/types';
import { TNftsState } from '../../../redux/slicers/nftsSlicer/types';
import {
  likeNft,
  unlikeNft,
} from '../../../redux/slicers/nftsSlicer/nftSlicer';
import { NFTTag } from '../../ui-kit/Tag/types';

type Props = {
  NFTData: NFT;
};

const NFTBlock: React.FC<Props> = ({ NFTData }) => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector<TAuthState>((state) => state.auth);
  const { nft } = useAppSelector<TNftsState>((state) => state.nfts);

  const tags: NFTTag[] = [
    { tagType: 'primary', tagText: nft?.category?.name || '' },
    {
      tagType: 'default',
      tagText: 'unlockable',
    },
  ];

  // const { image, tags, ...NFTDescriptionData } = NFTData;
  const [screenSize, setScreenSize] = useState<'large' | 'small'>('large');
  const [receiverAddress, setRecieverAddress] = useState('');
  const [report, setReport] = useState('');
  const [likesNumber, setLikesNumber] = useState(0);
  const defaultLikesNumber = nft?.likes?.filter(
    (item) => item !== user?.id,
  ).length;

  const [isTransferTokenModalOpen, setIsTransferTokenModalOpen] =
    useState(false);
  const [isRemoveFromSaleModalOpen, setIsRemoveFromSaleModalOpen] =
    useState(false);
  const [isBurnTokenModalOpen, setIsBurnTokenModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleAddressChange = (value: string | number) => {
    if (typeof value === 'string') {
      setRecieverAddress(value);
    }
  };
  const handleTransferTokenConfirm = () => {
    setRecieverAddress('');
    setIsTransferTokenModalOpen(false);
  };

  const handleRemoveFromSaleConfirm = () => {
    setIsRemoveFromSaleModalOpen(false);
  };

  const handleBurnTokenConfirm = () => {
    setIsBurnTokenModalOpen(false);
  };

  const handleReportMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    value,
  ) => {
    if (typeof value === 'string') {
      setReport(value);
    }
  };
  const handleReportConfirm = () => {
    setReport('');
    setIsReportModalOpen(false);
  };

  const handleLikeNft = async () => {
    if (nft?._id) {
      const result = await dispatch(likeNft(nft?._id));

      if (result) setLikesNumber((prev) => ++prev);
    }
  };

  const handleUnlikeNft = async () => {
    if (nft?._id) {
      const result = await dispatch(unlikeNft(nft?._id));

      if (result) setLikesNumber((prev) => --prev);
    }
  };

  const handleLikeClick = () => {
    if (likesNumber === defaultLikesNumber) {
      handleLikeNft();
    } else {
      handleUnlikeNft();
    }
  };

  const handleDownloadFile = (fileName: string) => {
    let link: HTMLAnchorElement | null = document.createElement('a');

    link.download = fileName;
    link.href = nft?.file || '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    link = null;
  };

  useEffect(() => {
    setScreenSize(
      window?.screen.width > screenSizes.tablet ? 'large' : 'small',
    );
  }, []);

  useEffect(() => {
    if (nft) setLikesNumber(nft?.likes?.length);
  }, [nft]);

  return (
    <>
      <NFTContext.Provider
        value={{
          setIsTransferTokenModalOpen,
          setIsRemoveFromSaleModalOpen,
          setIsBurnTokenModalOpen,
          setIsReportModalOpen,
          handleDownloadFile,
        }}
      >
        <Container>
          <NFTDescriptionContainer>
            <div>
              <StyledNFTDescriptionWrapper>
                <NFTImage
                  defaultLikesNumber={defaultLikesNumber || 0}
                  NFTData={{ image: nft?.file || '', tags }}
                  likesNumber={likesNumber}
                  onLikeClick={handleLikeClick}
                />
                <NFTDescription
                  nft={nft}
                  screenSize={screenSize}
                  data={nft as any}
                />
              </StyledNFTDescriptionWrapper>
              {/* {screenSize === 'small' && (
                <NFTListingsBlock
                  listingsData={NFTDescriptionData.listingsData}
                />
              )} */}
            </div>
          </NFTDescriptionContainer>
          {screenSize === 'large' && (
            <UserActionsButtonsGroup
              screenSize={screenSize}
              likesNumber={likesNumber}
              defaultLikesNumber={defaultLikesNumber || 0}
              onLikeClick={handleLikeClick}
            />
          )}
        </Container>
        <Modal
          title="Transfer token"
          confirmBtnName="Continue"
          cancelBtnName="Cancel"
          open={isTransferTokenModalOpen}
          onClose={() => setIsTransferTokenModalOpen(false)}
          onConfirm={handleTransferTokenConfirm}
        >
          <TransferTokenContainer>
            <TransferTokenInfo>
              You can transfer tokens from your address to another
            </TransferTokenInfo>
            <TransferTokenLabel>Receiver address</TransferTokenLabel>
            <Input
              value={receiverAddress}
              type="text"
              onChange={handleAddressChange}
              placeholder="Paste address"
            />
          </TransferTokenContainer>
        </Modal>
        <Modal
          title="Remove from sale"
          confirmBtnName="Remove now"
          cancelBtnName="Cancel"
          open={isRemoveFromSaleModalOpen}
          onClose={() => setIsRemoveFromSaleModalOpen(false)}
          onConfirm={handleRemoveFromSaleConfirm}
        >
          <RemoveFromSaleContainer>
            <RemoveFromSaleInfo>
              Do you really want to remove your item from sale? You can put it
              on sale anytime
            </RemoveFromSaleInfo>
          </RemoveFromSaleContainer>
        </Modal>
        <Modal
          title="Burn token"
          confirmBtnName="Continue"
          cancelBtnName="Cancel"
          confirmHasDangerStyle
          open={isBurnTokenModalOpen}
          onClose={() => setIsBurnTokenModalOpen(false)}
          onConfirm={handleBurnTokenConfirm}
        >
          <BurnTokenContainer>
            <BurnTokenInfo>
              Are you sure to burn this token? This action cannot be undone.
              Token will be transfered to zero address
            </BurnTokenInfo>
          </BurnTokenContainer>
        </Modal>
        <Modal
          title="Report"
          confirmBtnName="Send now"
          cancelBtnName="Cancel"
          open={isReportModalOpen}
          onClose={() => setIsReportModalOpen(false)}
          onConfirm={handleReportConfirm}
        >
          <ReportContainer>
            <ReportInfo>
              Describe why you think this item should be removed from
              marketplace
            </ReportInfo>
            <ReportLabel>Receiver address</ReportLabel>
            <Textarea
              value={report}
              onChange={handleReportMessageChange}
              placeholder="Paste address"
            />
          </ReportContainer>
        </Modal>
      </NFTContext.Provider>
    </>
  );
};

const Container = styled(NFTDescriptionWrapper)`
  width: 1224px;

  @media (${devices.tablet}) {
    width: 1024px;
  }

  @media (${devices.mobile}) {
    width: 375px;
    padding: 0 32px;
  }
`;

const StyledNFTDescriptionWrapper = styled(NFTDescriptionWrapper)`
  @media (${devices.tablet}) {
    padding: 0 80px 0 0;
  }

  @media (${devices.mobile}) {
    padding: 0;
    margin: auto;
  }
`;

const TransferTokenContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 384px;
`;

const TransferTokenInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
`;

const TransferTokenLabel = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
`;

const RemoveFromSaleContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 384px;
`;

const RemoveFromSaleInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
`;

const BurnTokenContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 384px;
`;

const BurnTokenInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
`;

const ReportContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 384px;
`;

const ReportInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #777e91;
`;

const ReportLabel = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  margin-top: 32px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

export default memo(NFTBlock);
