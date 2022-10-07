import {memo} from "react";
import {CommentsData} from "./types";
import styled from "styled-components";

interface Props {
    commentsData: CommentsData
}

const BlockWrapper = styled.div`
  width: 1120px;
  height: 604px;
  margin-top: 100px;
`

const Header = styled.div`
  display: block;
  margin-right: 0;
  margin-left: 0;
  height: 48px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #23262F;
`

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  width: 1120px;
  height: 508px;
`

const CurrentOwnerCommentContainer = styled.div``

const CreatorImageBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 0 81px;
  gap: 10px;
  width: 48px;
  height: 48px;
`

const CreatorImageWrapper = styled.div<any>`
  border-radius: 48px;
  width: 48px;
  height: 48px;
  background: #45B36B;
`

const CreatorImage = styled.div<any>`
  background: ${props => props.image};
  background-size: cover;
  border-radius: 48px;
  width: 48px;
  height: 48px;
`

const CommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 1056px;
  height: 508px;
`

const CurrentOwnerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 1056px;
  height: 136px;
`

const OwnerCommentsDataWrapper = styled.div`
  width: 1056px;
  height: 84px;
`

const CreatorsName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 24px;
  width: 1056px;
  height: 24px;
  margin-bottom: 6px;
`

const CreatorCommentText = styled.div`
  width: 1056px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #23262F;
`

const OwnerCommentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
  gap: 12px;
  width: 1056px;
  height: 24px;
`

const Comments: React.FC<Props> = ({commentsData}) => {
    return (
        <BlockWrapper>
            <Header>Comments</Header>
            <CommentsWrapper>
                <CurrentOwnerCommentContainer>
                    <CreatorImageBlock>
                        <CreatorImageWrapper>
                            <CreatorImage image={commentsData?.currentOwner?.image}/>
                        </CreatorImageWrapper>
                    </CreatorImageBlock>
                </CurrentOwnerCommentContainer>
                <CommentsBlock>
                    <CurrentOwnerBlock>
                        <OwnerCommentsDataWrapper>
                            <CreatorsName>{commentsData?.currentOwner?.name}</CreatorsName>
                            <CreatorCommentText>
                                {commentsData?.currentOwner?.message}
                            </CreatorCommentText>
                            <OwnerCommentInfoWrapper>

                            </OwnerCommentInfoWrapper>
                        </OwnerCommentsDataWrapper>
                    </CurrentOwnerBlock>
                </CommentsBlock>
            </CommentsWrapper>
        </BlockWrapper>
    )
}

export default memo(Comments)