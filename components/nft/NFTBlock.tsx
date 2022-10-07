import NFTDescriptionWrapper from "./NFTDescriptionWrapper";
import NFTDescriptionContainer from "./NFTDescriptionContainer";
import NFTImage from "./NFTImage";
import NFTDescription from "./NFTDescription";
import {NFT} from "./types";
import {memo} from "react";

interface Props {
    NFTData: NFT
}

const NFTBlock: React.FC<Props> = ({NFTData}) => {
    const {
        image,
        tags,
        ...NFTDescriptionData
    } = NFTData

    return  (
    <NFTDescriptionWrapper>
        <NFTDescriptionContainer>
            <div>
                <NFTDescriptionWrapper>
                    <NFTImage NFTData={{image, tags}} />
                    <NFTDescription data={NFTDescriptionData} />
                </NFTDescriptionWrapper>
            </div>
        </NFTDescriptionContainer>
    </NFTDescriptionWrapper>
    )
}

export default memo(NFTBlock)