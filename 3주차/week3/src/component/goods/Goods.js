import React from 'react'
import GoodsInfo from './GoodsInfo'
export default function Goods() {
    return (
        <div className="main-goods-1">
        <div className="main-p"></div>
        <div className="main-info">
            <div className="delivery">샛별배송</div>
            <div className="goods-name">[베피노 오첼리]무염버터</div>
            <div className="goods-p">깊고 순수한 이탈리아의 맛</div>
            <div className="goods-cost">
                <span className="goods-cost-c">9,200</span>
                <span className="goods-cost-won">원</span>
            </div>
            <div className="alert">로그인 후, 적립 혜택이 제공됩니다.</div>
            
            <GoodsInfo left='배송' right='새별배송' append='23시 전 주문시 내일 아침 7시 전 도착'/>
            <GoodsInfo left='판매자' right='컬리'/>
            <GoodsInfo left='포장타입' right='냉장 (종이 포장)' append='택배배송은 에코 포장이 스티로폼으로 대체됩니다.'/>
            <GoodsInfo left='판매 단위' right='1팩' />
            <GoodsInfo left='중량/용량' right='125g'/>
            <GoodsInfo left='알레르기정보' right='-우유 함유'/>
            <GoodsInfo left='유통기한정보' right='수령일 포함 최소 30일 남은 제품으로 보내드립니다.'/>


            <div className="goods-infor">
                <div className="goods-infor-left">구매 수량</div>
                <div className="goods-infor-right">
                    <div className="goods-infor-number">
                        <button type="button" aria-label="수량내리기" disabled="" className="minus"></button>
                        <div className="goods-infor-num">1</div>
                        <button type="button" aria-label="수량올리기" className="plus">
                        </button>
                    </div>
                </div>
            </div>
            <div className="goods-infor2">
                <div className="goods-cost">
                    <span className="goods-cost-ko">총 상품금액:</span>
                    &nbsp
                    <span className="goods-cost-c"> 9,200</span>
                    <span className="goods-cost-won">원</span>
                </div>
                <div>
                    <span className="goods-al">적립</span>
                    <span className="goods-al-2">로그인 후, 적립 혜택 제공</span>
                </div>
            </div>
            <div className="haert-ring-append">
                <button className="haert" type="button" width="56" height="56" radius="3">
                    <span className="haert-span">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" alt="" class="css-0"/>
                    </span>
                </button>
                <button className="ring" type="button" disabled="" width="56" height="56" radius="3">
                    <span className="ring-span">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="" class="css-0"/>
                    </span>
                </button>
                <div className="append">
                    <button className="append" type="button" radius="3">
                        <span className="append_span">장바구니 담기</span>
                    </button>
                </div>
            </div>
            
        </div>
        
    </div>
    )
}
