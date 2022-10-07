import NFTMain from "../ui-kit/imgs/NFTMain";
import Tag from "../ui-kit/Tag";
import TagsWrapper from "./TagsWrapper";
import React, {memo} from "react";
import {NFT} from "./types";

interface Props {
    NFTData: Pick<NFT, "image" | "tags">
}

const NFTImage: React.FC<Props> = ({NFTData}) => {
    return <NFTMain background={NFTData.image}>
        <TagsWrapper>
            {
                NFTData?.tags?.map(({tagType, tagText}, index) => {
                    return <Tag type={tagType} key={index}>{tagText}</Tag>
                })
            }
        </TagsWrapper>
    </NFTMain>
}

export default memo(NFTImage)