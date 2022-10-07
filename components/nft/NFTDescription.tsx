import SecondaryHeaderContainer from "./SecondaryHeaderContainer";
import React, {memo, useEffect, useState} from "react";
import {NFT, TimeBeforeEnd} from "./types";
import styled from "styled-components";
import {calculateTimeLeft} from "./helpers";

interface Props {
    data: Omit<NFT, "image" | "tags">
}

const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #777E91;
  width: 564px;
  padding-bottom: 40px;
  margin: 0;
`

const NFTMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`

const TimeContainer = styled.div`
  width: 346px;
  height: 50px;
`

const EndsParagraph = styled.p`
  width: 278px;
  height: 16px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #23262F;
  margin: 0;
`

const TimeGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
  width: 346px;
  height: 24px;
  gap: 26px;
`

const TimeItem = styled.p`
  display: flex;
  flex-direction: row;
  width: 71px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #23262F;
  text-transform: uppercase;
  & :last-child {
    font-size: 12px;
    color: #777E90;
    position: relative;
    bottom: -3px;
  }
  & :first-child {
    width: 30px;
  }
`

const TabButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px;
  gap: 10px;
  width: 564px;
  height: 40px;
`

const TabButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  border-radius: 100px;
  border: 2px solid #E6E8EC;
  background-color: #fafafb;
  color: #777E91;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  &:hover {
    background-color: #E6E8EC;
  }
  p {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }
  &.active {
    background: #353945;
    border: 2px solid #353945;
    color: #fafafb;
    &:hover {
      background-color: #515261;
      border-color: #515261;
    }
  }
`

const NFTDescription: React.FC<Props> = ({data}) => {
    const [timeBeforeEnd, setTimeBeforeEnd] = useState<TimeBeforeEnd | undefined>()

    useEffect(() => {
        if(data?.bid?.isOnBid) {
            const intervalId = setInterval(() => {
                setTimeBeforeEnd(calculateTimeLeft(data.bid?.endTime!))
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [])

    const handleTabButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const tabButtonsList = Array.from(document.getElementsByClassName("tab-btn"))
        if(!event.currentTarget.classList.contains("active")) {
            tabButtonsList.forEach(item => {
                item.classList.remove("active")
            })
            event.currentTarget.classList.add("active")
        }
    }

    return <div>
        <SecondaryHeaderContainer data={data} />
        <Description>
            {data.desc}
        </Description>
        <NFTMenuContainer>
            {(data?.bid?.isOnBid && timeBeforeEnd) && <TimeContainer>
                <EndsParagraph>
                    End in
                </EndsParagraph>
                <TimeGroup>
                    <TimeItem><span>{timeBeforeEnd?.days}</span><span>days</span></TimeItem>
                    <TimeItem><span>{timeBeforeEnd?.hours}</span><span> hours</span></TimeItem>
                    <TimeItem><span>{timeBeforeEnd?.mins}</span><span> mins</span></TimeItem>
                    <TimeItem><span>{timeBeforeEnd?.secs}</span><span> secs</span></TimeItem>
                </TimeGroup>
            </TimeContainer>}
            <TabButtonsContainer>
                <TabButton className={"tab-btn active"} onClick={e => handleTabButtonClick(e)}><p>Info</p></TabButton>
                <TabButton className={"tab-btn"} onClick={e => handleTabButtonClick(e)}><p>Owners</p></TabButton>
                <TabButton className={"tab-btn"} onClick={e => handleTabButtonClick(e)}><p>History</p></TabButton>
            </TabButtonsContainer>
        </NFTMenuContainer>
    </div>
}

export default memo(NFTDescription)