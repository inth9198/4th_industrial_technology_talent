import React from 'react'
import SpecialMent from './SpecialMent'
import BigRecom from './BigRecom'


export default function SpecialPrice({specialMent, goodsObjects}) {
    return (
        <div className='main-4'>
            <SpecialMent what={specialMent}/>
            <div className="recommand-ps">
                {goodsObjects.map(goods=>{
                    const re = <BigRecom 
                                goodsNum={goods.goodsNum} 
                                goodsCompany={goods.goodsCompany} 
                                goodsName={goods.goodsName} 
                                goodsPrice={goods.goodsPrice} 
                                goodsAbout={goods.goodsAbout} 
                                goodsDiscountRate={goods.goodsDiscountRate} 
                                goodsDimmedPrice={goods.goodsDimmedPrice}
                                />
                    return re;
                })}
            </div>
        </div>
    )
}
