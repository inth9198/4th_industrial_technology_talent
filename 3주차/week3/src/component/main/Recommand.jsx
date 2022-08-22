import React from 'react'
import RecomContents from './RecomContents'

export default function Recommand({recommandMent, goodsObjects}) {
    return (
        <div className='recommand'>
            <div className="recommand-ment">{recommandMent}</div>
            <div className="recommand-ps">
                {goodsObjects.map(goods=>{
                    const re = <RecomContents 
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
