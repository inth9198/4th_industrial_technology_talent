import React from 'react'
import Baner from './Baner'
import Recommand from './Recommand'
import BannerMid from './BannerMid'
import SpecialPrice from './SpecialPrice'
export default function Main() {   
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
        }
    ]
    const goodsObjects_2 = [
        {
            goodsNum:'1601027839876l0',
            goodsAbout:'',
            goodsCompany:'오덴세',
            goodsName:'우드 키친툴 3종',
            goodsPrice:'9,000',
            goodsDiscountRate:'10',
            goodsDimmedPrice:'10,000'
        },
        {
            goodsNum:'1620788113951l0',
            goodsAbout:'',
            goodsCompany:'코바코',
            goodsName:'시원한 슬러시 냉메밀(2인분)',
            goodsPrice:'6,715',
            goodsDiscountRate:'15',
            goodsDimmedPrice:'7,900'
        },
        {
            goodsNum:'1655457532242l0',
            goodsAbout:'',
            goodsCompany:'럭키찬스',
            goodsName:'AHC 마스터즈 프로패치 2스텝 세트 (4회분)',
            goodsPrice:'9,900',
            goodsDiscountRate:'50',
            goodsDimmedPrice:'20,000'
        },
        {
            goodsNum:'1542602494777l0',
            goodsAbout:'',
            goodsCompany:'Sea to Table',
            goodsName:'손질 왕 흰다리 새우 300g (냉동)',
            goodsPrice:'8,820',
            goodsDiscountRate:'16',
            goodsDimmedPrice:'10,500'
        }
    ]
    const goodsObjects_3 = [
        {
            goodsNum:'1653037084148l0',
            goodsAbout:'남성을 위한 멀티비타민 17종',
            goodsCompany:'',
            goodsName:'GNC 메가맨 원데일리 (60일분)',
            goodsPrice:'14,900',
            goodsDiscountRate:'57',
            goodsDimmedPrice:'35,000'
        },
        {
            goodsNum:'1629443966430l0',
            goodsAbout:'19가지 멀티비타민을 한 알로',
            goodsCompany:'',
            goodsName:'GNC 우먼스울트라메가 원데일리 (60일분)',
            goodsPrice:'14,900',
            goodsDiscountRate:'57',
            goodsDimmedPrice:'35,000'
        }
    ]
    const goodsObjects_4 = [
        {
            goodsNum:'163479821482z0',
            goodsAbout:'베테랑의 대표메뉴를 집에서',
            goodsCompany:'',
            goodsName:'전주 베테랑 칼국수',
            goodsPrice:'3,920',
            goodsDiscountRate:'30',
            goodsDimmedPrice:'5,600'
        }
    ]
    const goodsObjects_5 = [
        {
            goodsNum:'1637154205701l0',
            goodsAbout:'',
            goodsCompany:'연세우유 x 마켓컬리',
            goodsName:'전용목장우유 900mL',
            goodsPrice:'2,070',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'165303902534l0',
            goodsAbout:'',
            goodsCompany:'KF365',
            goodsName:'DOLE 실속 바나나 1kg(필리핀)',
            goodsPrice:'2,900',
            goodsDiscountRate:'21',
            goodsDimmedPrice:'3,700'
        },
        {
            goodsNum:'164730389977l0',
            goodsAbout:'',
            goodsCompany:'kurly\'s',
            goodsName:'국산콩 두부 300g',
            goodsPrice:'1,900',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        },
        {
            goodsNum:'1653041332575l0',
            goodsAbout:'',
            goodsCompany:'풀 바셋',
            goodsName:'바리스타 돌체라떼 330mL',
            goodsPrice:'3,400',
            goodsDiscountRate:'',
            goodsDimmedPrice:''
        }
    ]
    return (
        <>
            <Baner jpg='fdb8beab-7d14-45bb-b06e-402c16dc3d4d.jpg'/>
            <Recommand recommandMent="이 상품은 어때요?" goodsObjects={goodsObjects_1}/>
            <BannerMid />
            <SpecialPrice specialMent='추석' goodsObjects={goodsObjects_4}/>
            <SpecialPrice specialMent='일일' goodsObjects={goodsObjects_3}/>
            <Recommand recommandMent="놓치면 후회할 가격" goodsObjects={goodsObjects_2}/>
            <Recommand recommandMent="마트 갈 시간이 없어요" goodsObjects={goodsObjects_5}/>

        </>
    )
}
