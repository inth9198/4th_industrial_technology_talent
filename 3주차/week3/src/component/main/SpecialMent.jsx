import React from 'react'
import { useState, useEffect } from 'react'
export default function SpecialMent({what}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);
    const date = new Date();
    const sec = time.getSeconds();
    const min = time.getMinutes();
    const hour = time.getHours();
    const left_all_sec = 24 * 60 * 60 - (hour * 3600) - (min * 60) - (sec)
    const left_hour = parseInt(left_all_sec/3600);
    const left_sec = left_all_sec % 60;
    const left_min = parseInt((left_all_sec - left_hour * 3600)/60);
    const innerText = `${left_hour < 10 ? `0${left_hour}` : left_hour}:${left_min < 10 ? `0${left_min}` : left_min}:${left_sec < 10 ? `0${left_sec}` : left_sec}`

    return (
        <div className="main-4-item recommand-ment-2">
            <h2 className="sp-price">{what}특가</h2>
            <div className="price-24">24시간 한정 특가</div>
            <div className="clock1">
                <h1>{innerText}</h1>
            </div>
            <div className="than-late">망설이면 늦어요!</div>
        </div>
    )
}
