import React from 'react'
import Spec from '../head/Spec'
import SearchGood from './SearchGood'

export default function Search() {
    const goodsObjects_1 = [
        {
            goodsNum:'1588037458735l0',
            goodsAbout:'샛별배송',
            goodsCompany:'이즈니',
            goodsName:'포션 버터 무염',
            goodsPrice:'12,580',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'간편하게 더하는 노르망디의 풍미'
        },
        {
            goodsNum:'158201556923l0',
            goodsAbout:'샛별배송',
            goodsCompany:'베피노 오첼리',
            goodsName:'무염버터',
            goodsPrice:'9,200',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'깊고 순수한 이탈리아의 맛'
        },
        {
            goodsNum:'1532675150282l0',
            goodsAbout:'샛별배송',
            goodsCompany:'루어팍',
            goodsName:'덴마크 버터 2종',
            goodsPrice:'6,800',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'부드럽고 진한 풍미의 100% 덴마크 원유 버터'
        },
        {
            goodsNum:'1585098266488l0',
            goodsAbout:'샛별배송',
            goodsCompany:'이즈니',
            goodsName:'AOP 버터 2종',
            goodsPrice:'10,800',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'목초를 먹고 자란 원유로 만들어 프랑스 AOP 인증을 받은 고급 버터 (무염 & 가염)'
        },
        {
            goodsNum:'1563351539605l0',
            goodsAbout:'샛별배송',
            goodsCompany:'르갈',
            goodsName:'브르타뉴 버터 2종',
            goodsPrice:'7,600',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'프랑스 브르타뉴 지역에서 탄생한 풍미가 깊은 버터'
        },
        {
            goodsNum:'1452157705271l0',
            goodsAbout:'샛별배송',
            goodsCompany:'엘엔비르',
            goodsName:'고메버터 2종',
            goodsPrice:'8,400',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'프랑스인들이 사랑하는 고메버터 (무염 & 가염)'
        },
        {
            goodsNum:'1454463723960l0',
            goodsAbout:'샛별배송',
            goodsCompany:'페이장 브레통',
            goodsName:'포켓버터 3종',
            goodsPrice:'5,520',
            goodsDiscountRate:'20',
            goodsDimmedPrice:'',
            goodsAbout2:'6,900 프랑스에서 만들어진 산뜻한 버터의 진수'
        },
        {
            goodsNum:'1648537297866l0',
            goodsAbout:'샛별배송',
            goodsCompany:'라콩비에트',
            goodsName:'AOP 비가염 버터(125gX30개입)',
            goodsPrice:'29,580',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'샤랑트 푸아트의 신선함을 그대로'
        },
        {
            goodsNum:'1464333010124l0',
            goodsAbout:'샛별배송',
            goodsCompany:'에쉬레',
            goodsName:'프랑스 전통 AOP 버터 4종',
            goodsPrice:'17,500',
            goodsDiscountRate:'',
            goodsDimmedPrice:'',
            goodsAbout2:'죽기전에 꼭! 먹어야할 음식 중 하나인 에쉬레 버터! -포션버터'
        },
    ]
    return (
        <>
            <div class="search-main">
                    <h3>
                        <span>'</span>
                        <span class="search-keyword">무염버터</span>
                        <span>'에 대한 검색결과</span>
                    </h3>
            </div>
            
            <div class="main">
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
        </>
    )
}
