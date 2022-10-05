import {ComponentWithLayout} from "../../common/types";
import StoreLayout from "../../components/layouts/store";
import {FlexContainer} from "../../components/common";
import {Header} from "../../components/nft";
import {RadioButton} from "../../ui-kit/buttons/RadioButton";
import LeftSideCornerSVG from "../../assets/svg/left-side-corner.svg"

const NFTPage: ComponentWithLayout = () => {
    return <FlexContainer>
        <Header>
            <RadioButton>
                <LeftSideCornerSVG />
            </RadioButton>
        </Header>
    </FlexContainer>
}

NFTPage.PageLayout = StoreLayout

export default NFTPage