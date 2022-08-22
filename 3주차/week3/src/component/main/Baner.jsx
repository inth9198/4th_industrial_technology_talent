import React from 'react'

export default function Baner({jpg}) {
    return (
        <div id="banner">
            <img class="main-banner-image" src={`https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/${jpg}`} alt="main-banner-478"/>
        </div>
    )
}
