import React from 'react'

export default function GoodsInfo({left, right, append}) {
    return (
        <div className="goods-infor">
            <div className="goods-infor-left">{left}</div>
            <div className="goods-infor-right">
                <div>{right}</div>
                <div className="goods-infor-append">{append}</div>
            </div>
        </div>
    )
}
