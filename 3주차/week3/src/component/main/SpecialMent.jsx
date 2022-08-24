import React from 'react'

export default function SpecialMent({what}) {
    return (
        <div className="main-4-item recommand-ment-2">
            <h2 className="sp-price">{what}특가</h2>
            <div className="price-24">24시간 한정 특가</div>
            <div className="clock1">
                <h1>00:00</h1>
            </div>
            <div className="than-late">망설이면 늦어요!</div>
        </div>
    )
}
