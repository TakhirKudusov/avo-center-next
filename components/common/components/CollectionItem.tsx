import styled from 'styled-components';
import { Collection } from './types';

type Props = {
  collection: Collection;
};
const CollectionItem: React.FC<Props> = ({ collection }) => {
  const [first, ...others] = collection.items;

  return (
    <CollectionItemWrapper>
      <MainItem style={{ backgroundImage: `url(/images/${first})` }} />
      <SmallItems>
        {others.map((item) => (
          <SmallItem style={{ backgroundImage: `url(/images/${item})` }} />
        ))}
      </SmallItems>
      <CollectionName>{collection.name}</CollectionName>
      <CollectionInfo>
        <CollectionAuthor>
          <CollectionAuthorAvatar
            style={{
              backgroundImage: `url(/images/${collection.author.avatar})`,
            }}
          />
          <CollectionAuthorCaption>
            By
            <CollectionAuthorName>
              {collection.author.name}
            </CollectionAuthorName>
          </CollectionAuthorCaption>
        </CollectionAuthor>
        <CollectionItemsNumber>{collection.length} items</CollectionItemsNumber>
      </CollectionInfo>
    </CollectionItemWrapper>
  );
};

const CollectionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #23262f;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #353945;
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
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #23262f;
  border: 2px solid #e6e8ec;
  border-radius: 4px;
  padding: 5px 8px;
`;

export default CollectionItem;
