import styled from 'styled-components';
import { memo } from 'react';

type Props = {
  image: string;
};

const OwnerAvatar: React.FC<Props> = ({ image }) => {
  return (
    <div>
      <CreatorImageWrapper>
        <CreatorImage image={image} />
      </CreatorImageWrapper>
    </div>
  );
};

const CreatorImageWrapper = styled.div<any>`
  border-radius: 48px;
  width: 48px;
  height: 48px;
  background: #45b36b;
`;

const CreatorImage = styled.div<any>`
  background: ${(props) => props.image};
  background-size: cover;
  border-radius: 48px;
  width: 48px;
  height: 48px;
`;

export default memo(OwnerAvatar);
