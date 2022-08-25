import React from 'react'
import Spec from '../head/Spec'
import SearchGood from './SearchGood'

export default function Search() {
    const goodsObjects_1 = [
        {
            goodsNum:'1623039789318l0',
            goodsAbout:'',
            goodsCompany:'오뗄블랙라벨',
            goodsName:'전지 베이컨',
            goodsPrice:'3,400',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1582520823223l0',
            goodsAbout:'',
            goodsCompany:'스마일찬',
            goodsName:'매콤한 진미채 간장볶음',
            goodsPrice:'3,900',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'160507747813l0',
            goodsAbout:'',
            goodsCompany:'네네린도',
            goodsName:'평판 스크래쳐 2종',
            goodsPrice:'7,900',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1592199656693l0',
            goodsAbout:'',
            goodsCompany:'가농바이오',
            goodsName:'오메가에그 무항생제 1+등급 특란 20구',
            goodsPrice:'8,800',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1592199656693l0',
            goodsAbout:'',
            goodsCompany:'가농바이오',
            goodsName:'오메가에그 무항생제 1+등급 특란 20구',
            goodsPrice:'8,800',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1592199656693l0',
            goodsAbout:'',
            goodsCompany:'가농바이오',
            goodsName:'오메가에그 무항생제 1+등급 특란 20구',
            goodsPrice:'8,800',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        }
    ]
    return (
        <div>
            <div class="search-main">
                    <h3>
                        <span>'</span>
                        <span class="search-keyword">무염버터</span>
                        <span>'에 대한 검색결과</span>
                    </h3>
            </div>

            <div id="main">
                <div class="array-flex1">
                    <div>총 11건</div>
                    <div class="array-flex2">
                        <div class="recom">추천순</div>
                        <Spec />
                        <div>신상품순</div>
                        <Spec />
                        <div>혜택순</div>
                        <Spec />
                        <div>낮은 가격순</div>
                        <Spec />
                        <div>높은 가격순</div>
                    </div>
                </div>
            </div>
            <SearchGood goodsObjects={goodsObjects_1}/>
        </div>
    )
}