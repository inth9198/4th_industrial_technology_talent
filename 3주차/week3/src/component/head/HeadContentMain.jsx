import React from 'react'
import Logo from './Logo'
import MarketKurly from './MarketKurly'
import Spec from './Spec'
import BeautyKurly from './BeautyKurly'
import SearchIn from './SearchIn'
import GrapBox from './GrapBox'

export default function HeadContentMain() {
    return (
        <div className="head-content-main">
            <Logo />
            <MarketKurly />
            <Spec />
            <BeautyKurly />
            <SearchIn />
            <GrapBox />
        </div>
    )
}
