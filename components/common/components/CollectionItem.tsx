import styled from 'styled-components';
import { devices } from '../../../common/constants';
import { ICollection } from '../../../swagger';
// import { Collection } from './types';

type Props = {
  collection: ICollection;
};

const CollectionItem: React.FC<Props> = ({ collection }) => {
  const [first, ...others] = collection.nftList;

  return (
    <CollectionItemWrapper>
      <MainItem style={{ backgroundImage: `url(/images/${first})` }} />
      <SmallItems>
        {others.map((item, index) => (
          <SmallItem
            key={`small-item-${index}`}
            style={{ backgroundImage: `url(/images/${item})` }}
          />
        ))}
      </SmallItems>
      <CollectionFooter>
        <CollectionName>{collection.name}</CollectionName>
        <CollectionInfo>
          <CollectionAuthor>
            <CollectionAuthorAvatar
              style={{
                backgroundImage: `url(/images/${collection.owner.avatar})`,
              }}
            />
            <CollectionAuthorCaption>
              By
              <CollectionAuthorName>
                {collection.owner.username}
              </CollectionAuthorName>
            </CollectionAuthorCaption>
          </CollectionAuthor>
          <CollectionItemsNumber>
            {collection.nftList.length} items
          </CollectionItemsNumber>
        </CollectionInfo>
      </CollectionFooter>
    </CollectionItemWrapper>
  );
};

const CollectionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  border: 2px solid #e6e8ec;
  border-radius: 12px;
  @media (${devices.mobile}) {
    margin-top: 12px;
  }
`;

const MainItem = styled.div`
  width: 352px;
  height: 240px;
  background: #e4d7cf;
  border-radius: 8px;
  margin-bottom: 8px;
  background-size: cover;
  background-position: center;
`;

const SmallItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CollectionFooter = styled.div`
  padding: 0 12px 16px;
`;

const SmallItem = styled.div`
  width: 112px;
  height: 75px;
  background: #e4d7cf;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
`;

const CollectionName = styled.div`
  margin-top: 16px;
  font-family: 'Nasalization';
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const CollectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const CollectionAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CollectionAuthorCaption = styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #e6e8ec;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CollectionAuthorName = styled.div`
  font-weight: 500;
`;

const CollectionAuthorAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

const CollectionItemsNumber = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #fcfcfd;
  border: 2px solid #e6e8ec;
  border-radius: 4px;
  padding: 5px 8px;
`;

export default CollectionItem;
