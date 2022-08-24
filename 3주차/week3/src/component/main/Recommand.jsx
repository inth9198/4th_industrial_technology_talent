import React,{useRef} from 'react'
import RecomContents from './RecomContents'
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

export default function Recommand({recommandMent, goodsObjects}) {
    const swiperStyle = {
        width: "1050px ",
        height: "420px",
        position:"relative",
        margin:"0px 0px 0px -14px",
        padding:"0px"
    }
    const slideStyle = {
        width: "240px",
        height: "420px",
        position:"relative",
        padding:"7px"
    }

    return (
        <div className='recommand'>
            <div className="recommand-ment">{recommandMent}</div>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                scrollbar={{ draggable: true }}
                navigation
                style={swiperStyle}
                // className="recommand-ps"
            >
                {goodsObjects.map(goods=>{
                    const re = <SwiperSlide style={slideStyle}>
                                    <RecomContents 
                                            goodsNum={goods.goodsNum} 
                                            goodsCompany={goods.goodsCompany} 
                                            goodsName={goods.goodsName} 
                                            goodsPrice={goods.goodsPrice} 
                                            goodsAbout={goods.goodsAbout} 
                                            goodsDiscountRate={goods.goodsDiscountRate} 
                                            goodsDimmedPrice={goods.goodsDimmedPrice}
                                            />
                                </SwiperSlide>
                    return re;
                })}
            </Swiper>
            
            
            
        </div>
    )
}
