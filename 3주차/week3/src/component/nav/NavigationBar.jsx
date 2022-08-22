import React from 'react'
import DrawerCate from './DrawerCate'
import Navigation from './Navigation'
import ImfoShipping from './ImfoShipping'
export default function NavigationBar() {
    return (
        <div className="navigation-var">
            <DrawerCate />
            <Navigation />
            <ImfoShipping />
        </div>
    )
}
