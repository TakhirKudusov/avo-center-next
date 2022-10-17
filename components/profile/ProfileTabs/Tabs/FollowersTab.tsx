import styled from 'styled-components';
import { FollowerItem } from '../components';
import { FollowType } from '../constants';
import { followersData } from '../MOCK';

type Props = {
  followType: FollowType;
};

export const FollowersTab = ({ followType }: Props) => {
  return (
    <TabWrapper>
      {followersData.map((item) => (
        <FollowerItem followType={followType} key={item.id} {...item} />
      ))}
    </TabWrapper>
  );
};

export default FollowersTab;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
