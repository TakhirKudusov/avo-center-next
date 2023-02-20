import styled from 'styled-components';
import { memo } from 'react';
import { DEFAULT_IMAGE_URL } from '../../../../common/constants';
import { getImageUrl } from '../../../../common/helpers/getImageUrl.helper';

type Props = {
  image: string;
};

const OwnerAvatar: React.FC<Props> = ({ image }) => {
  return (
    <div>
      <CreatorImageWrapper>
        <CreatorImage image={image ? getImageUrl(image) : DEFAULT_IMAGE_URL} />
      </CreatorImageWrapper>
    </div>
  );
};

const CreatorImageWrapper = styled.div<any>`
  border-radius: 48px;
  width: 48px;
  height: 48px;
`;

const CreatorImage = styled.div<any>`
  background: ${(props) => `url(${props.image})`};
  background-color: #45b36b;
  background-size: cover;
  background-position: center;
  border-radius: 48px;
  width: 48px;
  height: 48px;
`;

export default memo(OwnerAvatar);
