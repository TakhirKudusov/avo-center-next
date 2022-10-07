import {ComponentWithLayout} from "../../common/types";
import StoreLayout from "../../components/layouts/store";
import {ContentContainer, FlexContainer} from "../../components/common";
import {Header} from "../../components/nft";
import {RadioButton} from "../../components/ui-kit/buttons/RadioButton";
import LeftSideCornerSVG from "../../assets/svg/left-side-corner.svg"
import {NFTData} from "../../mock-data/tagsData";
import NFTBlock from "../../components/nft/NFTBlock";

const NFTPage: ComponentWithLayout = () => {
    return <FlexContainer>
        <ContentContainer>
            <Header>
                <RadioButton>
                    <LeftSideCornerSVG />
                </RadioButton>
            </Header>
            <NFTBlock NFTData={NFTData} />
        </ContentContainer>
    </FlexContainer>
}

NFTPage.PageLayout = StoreLayout

export default NFTPage