import React from 'react'

export default function RecomContents({goodsNum, goodsCompany, goodsName, goodsPrice, goodsAbout, goodsDiscountRate, goodsDimmedPrice}) {
    return (
        <div className="ps-1">
            <img src={`https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/${goodsNum}.jpg`}alt="상품 이미지" loading="lazy"/>
            <div className="goods">[{goodsCompany}] {goodsName}</div>
            {goodsDiscountRate!==''?<span className="discount-rate">{goodsDiscountRate}% </span>:<></>}
            <span className="sales-price">{goodsPrice} 원</span>
            {goodsDimmedPrice!==''?<div className="dimmed-price">{goodsDimmedPrice}원 </div>:<></>}            
        </div>
    )
}
