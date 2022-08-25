import React from 'react'
import BigRecom from '../main/BigRecom';

export default function SearchGood({goodsObjects}) {
    return (
        <div className='main-4'>
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
