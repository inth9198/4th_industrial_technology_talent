import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useRecoilState } from 'recoil';
import { bucket } from '../../recoil/User';

export default function RecomContents({goodsNum, goodsCompany, goodsName, goodsPrice, goodsAbout, goodsDiscountRate, goodsDimmedPrice}) {
    const [buks, setBuks] = useRecoilState(bucket);
    return (
        <div className="ps-1">
            <div className='p-img'>
            <Link to="/goods">
            <img className='p-p' src={`https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/${goodsNum}.jpg`}alt="상품 이미지" loading="lazy"/>
            </Link>
            <button type="button" class="p-function p-btn" onClick={()=> setBuks(buks + 1) }>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="장바구니 아이콘"/>
            </button>
            </div>
            {goodsAbout!==''?<div class="about">{goodsAbout}</div>:<></>}
            <div className="goods">
                {goodsCompany!==''?<>[{goodsCompany}]</>:<></>} {goodsName}
            </div>
            {goodsDiscountRate!==''?<span className="discount-rate">{goodsDiscountRate}% </span>:<></>}
            <span className="sales-price">{goodsPrice} 원</span>
            {goodsDimmedPrice!==''?<div className="dimmed-price">{goodsDimmedPrice}원 </div>:<></>}            
        </div>
        

    )
}
