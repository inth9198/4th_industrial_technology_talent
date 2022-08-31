import React from 'react'

export default function SearchRecom({goodsNum, goodsCompany, goodsName, goodsPrice, goodsAbout, goodsDiscountRate, goodsDimmedPrice,goodsAbout2}) {
    return (
        <div className="search-item">
        <div className='p-img'>
            <img className='p-p' src={`https://img-cf.kurly.com/shop/data/goods/${goodsNum}.jpg`}alt="상품 이미지" loading="lazy"/>
            <button type="button" class="p-function p-btn">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
            </button>
        </div>
        {goodsAbout!==''?<div className="about-big">{goodsAbout}</div>:<></>}
        <div className="goods-big">
            {goodsCompany!==''?<>[{goodsCompany}]</>:<></>} {goodsName}
        </div>
        {goodsDiscountRate!==''?<span className="discount-rate-big">{goodsDiscountRate}% </span>:<></>}
        <span className="sales-price-big">{goodsPrice} 원</span>
        {goodsDimmedPrice!==''?<span className="dimmed-price-big">{goodsDimmedPrice}원 </span>:<></>}  
        {goodsAbout2!==''?<div className="about-big">{goodsAbout2}</div>:<></>}
    </div>
    )
}