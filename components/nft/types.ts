import {NFTTag} from "../ui-kit/types";

export type NFT = {
    image: string;
    title: string;
    price: string;
    total: string;
    available: string;
    desc: string;
    tags: NFTTag[],
    bid?: {
        isOnBid: true,
        endTime: string
    },
}

export type TimeBeforeEnd = {
    days: string;
    hours: string;
    mins: string;
    secs: string;
}