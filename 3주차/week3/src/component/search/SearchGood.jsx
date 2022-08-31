import React from 'react'
import BigRecom from '../main/BigRecom';
import SearchRecom from './SearchRecom';
export default function SearchGood({goodsObjects}) {
    return (
        <div className='main-4'>
        <div className="serch-results">
            {goodsObjects.map(goods=>{
                const re = <SearchRecom 
                            goodsNum={goods.goodsNum} 
                            goodsCompany={goods.goodsCompany} 
                            goodsName={goods.goodsName} 
                            goodsPrice={goods.goodsPrice} 
                            goodsAbout={goods.goodsAbout} 
                            goodsDiscountRate={goods.goodsDiscountRate} 
                            goodsDimmedPrice={goods.goodsDimmedPrice}
                            goodsAbout2={goods.goodsAbout2}
                            />
                return re;
            })}
        </div>
    </div>
    )
}
