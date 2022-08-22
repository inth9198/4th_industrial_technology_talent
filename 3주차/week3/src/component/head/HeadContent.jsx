import React from 'react'
import HeadContentMain from './HeadContentMain'
import NavigationBar from '../nav/NavigationBar'
export default function HeadContent() {
    return (
        <div className="head-contents">
            <HeadContentMain />
            <NavigationBar />
        </div>
    )
}
