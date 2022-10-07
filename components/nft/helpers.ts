import {TimeBeforeEnd} from "./types";

const dateItemFormat = (item: string): string => {
    if(item.length < 2) {
        return item.padStart(2, "0")
    }
    return item
}

const calculateTimeLeft = (endTime: string): TimeBeforeEnd | undefined => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft: TimeBeforeEnd

    if (difference > 0) {
        timeLeft = {
            days: dateItemFormat(String(Math.floor(difference / 1000 / 60 / 60 / 24))),
            hours: dateItemFormat(String(Math.floor((difference / 1000 / 60 / 60) % 24))),
            mins: dateItemFormat(String(Math.floor((difference / 1000 / 60) % 60))),
            secs: dateItemFormat(String(Math.floor((difference / 1000) % 60))),
        };
        return timeLeft;
    }
}

export {calculateTimeLeft}