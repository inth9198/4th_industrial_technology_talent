import React from 'react'
import Baner from './Baner'
import Recommand from './Recommand'
export default function Main() {   
    const goodsObjects_1 = [
        {
            goodsNum:'1623039789318l0',
            goodsCompany:'오뗄블랙라벨',
            goodsName:'전지 베이컨',
            goodsPrice:'3,400',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1582520823223l0',
            goodsCompany:'스마일찬',
            goodsName:'매콤한 진미채 간장볶음',
            goodsPrice:'3,900',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'160507747813l0',
            goodsCompany:'네네린도',
            goodsName:'평판 스크래쳐 2종',
            goodsPrice:'7,900',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1592199656693l0',
            goodsCompany:'가농바이오',
            goodsName:'오메가에그 무항생제 1+등급 특란 20구',
            goodsPrice:'8,800',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        }
    ]
    const goodsObjects_2 = [
        {
            goodsNum:'1601027839876l0',
            goodsCompany:'오덴세',
            goodsName:'우드 키친툴 3종',
            goodsPrice:'9,000',
            goodsDiscountRate:'10',
            goodsDimmedPrice:'10,000'
        },
        {
            goodsNum:'1620788113951l0',
            goodsCompany:'코바코',
            goodsName:'시원한 슬러시 냉메밀(2인분)',
            goodsPrice:'6,715',
            goodsDiscountRate:'15',
            goodsDimmedPrice:'7,900'
        },
        {
            goodsNum:'1655457532242l0',
            goodsCompany:'럭키찬스',
            goodsName:'AHC 마스터즈 프로패치 2스텝 세트 (4회분)',
            goodsPrice:'9,900',
            goodsDiscountRate:'50',
            goodsDimmedPrice:'20,000'
        },
        {
            goodsNum:'1542602494777l0',
            goodsCompany:'Sea to Table',
            goodsName:'손질 왕 흰다리 새우 300g (냉동)',
            goodsPrice:'8,820',
            goodsDiscountRate:'16',
            goodsDimmedPrice:'10,500'
        }
    ]
    return (
        <>
            <Baner jpg='fdb8beab-7d14-45bb-b06e-402c16dc3d4d.jpg'/>
            <Recommand recommandMent="이 상품은 어때요?" goodsObjects={goodsObjects_1}/>
            <Recommand recommandMent="놓치면 후회할 가격" goodsObjects={goodsObjects_2}/>

        </>
    )
}
