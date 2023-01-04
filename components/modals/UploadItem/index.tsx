import Link from 'next/link';
import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { Paths } from '../../../common/enums/paths';
import { Button, ButtonType } from '../../ui-kit';

type Props = {
  onItemClick: () => void;
};
const UploadItem: React.FC<Props> = ({ onItemClick }) => {
  const handleClick = (onItemClick: () => void) => () => {
    onItemClick();
  };
  return (
    <UploadItemWrapper>
      <UploadItemDesc>
        Choose <b>“Single”</b> if you want your collectible to be one of a kind
        or <b>“Multiple”</b> if you want to sell one collectible multiple times
      </UploadItemDesc>
      <UploadItemCards>
        <UploadItemCard>
          <UploadItemCardImage
            style={{ backgroundImage: `url(/images/single-collectible.jpg)` }}
          />
          <Link href={Paths.COLLECTIONS_CREATE_SINGLE}>
            <Button
              onClick={handleClick(onItemClick)}
              btnType={ButtonType.Primary}
            >
              Create single
            </Button>
          </Link>
        </UploadItemCard>
        <UploadItemCard>
          <UploadItemCardImage
            style={{ backgroundImage: `url(/images/collection.jpg)` }}
          />
          <Link href={Paths.COLLECTIONS_CREATE_SINGLE}>
            <Button
              onClick={handleClick(onItemClick)}
              btnType={ButtonType.Secondary}
            >
              Create Collection
            </Button>
          </Link>
        </UploadItemCard>
      </UploadItemCards>
      <UploadItemDescBottom>
        We do not own your private keys and cannot access your funds without
        your confirmation.
      </UploadItemDescBottom>
    </UploadItemWrapper>
  );
};

const UploadItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 586px;

  @media (${devices.mobile}) {
    width: 260px;
  }
`;

const UploadItemDesc = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #777e91;

  @media (${devices.mobile}) {
    font-size: 10px;
    line-height: 16px;
  }
`;

const UploadItemCards = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (${devices.mobile}) {
    flex-direction: column;
    gap: 6px;
  }
`;

const UploadItemCard = styled.div`
  padding: 16px;
  gap: 24px;
  border: 2px solid #e6e8ec;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media (${devices.mobile}) {
    width: 100%;
    gap: 10px;
    padding: 8px;
  }
`;

const UploadItemCardImage = styled.div`
  background: #2e5144;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  width: 243px;
  height: 178px;

  @media (${devices.mobile}) {
    width: 160px;
    height: 120px;
  }
`;

const UploadItemDescBottom = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #777e91;
  margin-top: 24px;

  @media (${devices.mobile}) {
    margin-top: 12px;
    font-size: 10px;
    line-height: 16px;
  }
`;

export default UploadItem;
