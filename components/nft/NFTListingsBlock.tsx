import {ListingData} from "./types";
import UpSideCorner from "../../assets/svg/up-side-corner.svg"
import styled from "styled-components";
import {fromNameFormatter, handleSetActiveClick} from "./helpers";
import {memo} from "react";

interface Props {
    listingsData: ListingData[]
}

const ListingWrapper = styled.div`
  width: 564px;
  height: 366px;
  margin-top: 56px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 20px 0 8px;
  gap: 480px;
  border-top: 1px solid #E6E8EC;
  text-align: start;
`

const HeaderText = styled.p`
  width: 60px;
  height: 16px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262F;
  margin-top: 0;
  margin-left: 5px;
  margin-bottom: 0;
`

const CornerButton = styled(UpSideCorner)`
  position: relative;
  top: -10px;
  //transform: matrix(0, 1, 1, 0, 0, 0);
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
`

const TableHeadBlock = styled.div`
  width: 564px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 0px;
  gap: 58px;
`

const ColumnHead = styled.p`
  width: 100px;
  height: 18px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #23262F;
  margin-top: 0;
`

const TableLineWrapper = styled.div`
  width: 564px;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 18px 0;
  gap: 52px;
  border-top: 1px solid #E6E8EC;
`

const TableCell = styled.p<any>`
  width: 100px;
  height: 21px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${props => {
      switch (props.type) {
        case "thickened":
            return "700"
        default:
            return "400"
  }}};
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-decoration-line: ${props => {
      switch (props.type) {
        case "primary":
            return "underline"
        default:
            return "none"
      }
  }};
  color: ${props => {
      switch (props.type) {
        case "primary":
            return "#333333"
        case "transparent":
            return "#777E90"
        case "thickened":
            return "#23262F"
      }
  }};
  cursor: pointer;
  margin-right: 5px;
`

const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fafafb;
  padding: 8px 24px;
  gap: 10px;
  width: 91px;
  height: 32px;
  border: 1px solid #E6E8EC;
  border-radius: 50px;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  p {
    width: 43px;
    height: 16px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #23262F;
  }
  &:hover {
    background-color: #E6E8EC;
  }
  &.active {
    background: #353945;
    border: 2px solid #353945;
    color: #fafafb;
    p {
      color: #FFFFFF;
    }
    &:hover {
      background-color: #515261;
      border-color: #515261;
    }
  }
`

const NFTListingsBlock: React.FC<Props> = ({listingsData}) => {
    return (
        <ListingWrapper>
            <Header>
                <HeaderText>Listings</HeaderText>
                <CornerButton />
            </Header>
            <TableHeadBlock>
                <ColumnHead>From</ColumnHead>
                <ColumnHead>Expiration</ColumnHead>
                <ColumnHead>Price</ColumnHead>
            </TableHeadBlock>
            {listingsData?.map((item, index) => {
                return (
                    <TableLineWrapper key={index}>
                        <TableCell type={"primary"}>
                            {fromNameFormatter(item.from)}
                        </TableCell>
                        <TableCell type={"transparent"}>
                            {item.expiration}
                        </TableCell>
                        <TableCell type={"thickened"}>
                            {item.price} AVO
                        </TableCell>
                        <ActionButton
                            className={"action-btn"}
                            onClick={e => handleSetActiveClick(e, "action-btn")}
                        >
                            <p>
                                Accept
                            </p>
                        </ActionButton>
                    </TableLineWrapper>
                )
            })}
        </ListingWrapper>
    )
}

export default memo(NFTListingsBlock)