import {NFT} from "../components/nft/types";

const NFTData: NFT = {
    image: 'url("/images/player.jpg")',
    title: "Black Future Collection: Long Neckie Adira by Nyla Hayes",
    price: "2.5",
    total: "20",
    available: "10",
    desc: "This NFT Card will give you Access to Special Airdrops. To learn more about please visit",
    tags: [
        {
            tagType: "primary",
            tagText: "art"
        },
        {
            tagType: "default",
            tagText: "unlockable"
        },
    ],
    bid: {
        isOnBid: true,
        endTime: "2022-12-12T12:00:00+03:00"
    }
}

export {NFTData}