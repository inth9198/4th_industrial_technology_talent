import React from 'react'
import GoodsInfo from './GoodsInfo'
import styled from 'styled-components'
export default function Goods() {
    return (
        <MainGoods1>
        <MainP></MainP>
        <MainInfo>
            <Delivery>샛별배송</Delivery>
            <GoodsName>[베피노 오첼리]무염버터</GoodsName>
            <GoodsP>깊고 순수한 이탈리아의 맛</GoodsP>
            <GoodsCost>
                <GoodsCostC>9,200</GoodsCostC>
                <GoodsCostWon>원</GoodsCostWon>
            </GoodsCost>
            <Alert>로그인 후, 적립 혜택이 제공됩니다.</Alert>
            
            <GoodsInfo left='배송' right='새별배송' append='23시 전 주문시 내일 아침 7시 전 도착'/>
            <GoodsInfo left='판매자' right='컬리'/>
            <GoodsInfo left='포장타입' right='냉장 (종이 포장)' append='택배배송은 에코 포장이 스티로폼으로 대체됩니다.'/>
            <GoodsInfo left='판매 단위' right='1팩' />
            <GoodsInfo left='중량/용량' right='125g'/>
            <GoodsInfo left='알레르기정보' right='-우유 함유'/>
            <GoodsInfo left='유통기한정보' right='수령일 포함 최소 30일 남은 제품으로 보내드립니다.'/>


            <GoodsInfor>
                <GoodsInforLeft>구매 수량</GoodsInforLeft>
                <GoodsInforRigt>
                    <GoodsInforNumber>
                        <BtnStyle type="button" aria-label="수량내리기" disabled="" className="minus"></BtnStyle>
                        <GoodsInforNum>1</GoodsInforNum>
                        <BtnStyle type="button" aria-label="수량올리기" className="plus">
                        </BtnStyle>
                    </GoodsInforNumber>
                </GoodsInforRigt>
            </GoodsInfor>
            <GoodsInfor2>
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
            </GoodsInfor2>
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
        </MainInfo>
    </MainGoods1>
    )
}
const MainGoods1 = styled.div`
    width: 1050px;
    margin: 0px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: auto;
`
const MainP = styled.div`
    margin-top: 40px;
    width: 430px;
    height: 552px;
    background: url(https://img-cf.kurly.com/shop/data/goods/158201556923l0.jpg) 0% 0% / cover, url(https://res.kurly.com/_next/static/images/noimg-150x195-2c819ff….svg) 50% 50% / contain no-repeat rgb(245, 245, 245);
`
const MainInfo = styled.div`
    width: 560px;
    padding: 40px 0px 0px 0px;
`
const Delivery = styled.div`
    font-weight: 500;
    line-height: 1.36;
    letter-spacing: -0.5px;
    color: rgb(153, 153, 153)!important;
    margin-bottom: 6px;
    width: 500px;
`
const GoodsName = styled.div`
    width: 500px;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.5px;
    word-break: keep-all;
    margin-right: 20px;
`
const GoodsP = styled.div`
    padding-top: 5px;
    font-size: 14px;
    color: rgb(181, 181, 181);
    line-height: 19px;
    letter-spacing: -0.5px;
`
const GoodsCost = styled.div`
    align-items: flex-end;
    padding-top: 19px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: -0.5px;
`
const GoodsCostC = styled.span`
    padding-right: 4px;
    font-size: 28px;
    color: rgb(51, 51, 51);
    align-items: flex-end;
`
const GoodsCostWon = styled.span`
    display: inline-block;
    position: relative;
    top: 3px;
    font-size: 18px;
    color: rgb(51, 51, 51);
    vertical-align: top;
`
const Alert = styled.div`
    font-size: 14px;
    color: rgb(95, 0, 128);
    line-height: 19px;
    height: 19px;
    letter-spacing: -0.5px;
    margin-top: 14px;
`
const GoodsInfor = styled.div`
    display: flex;
    flex: 1 1 0%;
    flex-direction: row;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding: 17px 0px 18px;
    border-top: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    letter-spacing: -0.5px;
`
const GoodsInfor2 = styled.div`
    justify-content: flex-end;
    align-items: flex-end;
    text-align:right;
`
const GoodsInforLeft = styled.div`
    position: relative;
    top: 1px;
    width: 128px;
    height: 100%;
    color: rgb(102, 102, 102);
    line-height: 19px;
`
const GoodsInforRigt = styled.div`
    position: relative;
    top: 1px;
    width: 128px;
    height: 100%;
    color: rgb(102, 102, 102);
    line-height: 19px;
`
const GoodsInforNumber = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    width: 88px;
    border-radius: 3px;
`
const GoodsInforNum = styled.div`
    overflow: hidden;
    white-space: nowrap;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: rgb(51, 51, 51);
    text-align: center;
    width: 31px;
    height: 28px;
    line-height: 28px;
`
const BtnStyle = styled.button`
`