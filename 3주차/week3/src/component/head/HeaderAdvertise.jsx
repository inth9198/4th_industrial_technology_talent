import React from 'react'
import { motion } from "framer-motion"
export default function HeaderAdvertise() {
    const variants= {
        hidden:{opacity:0},
        visible:{opacity:1}
    }
    return (
        <motion.div initial="hidden" animate="visible" 
            variants={variants} 
            className="header-advertisement">
            지금 가입하고 인기상품 
            <strong>100원</strong>에 받아가세요!
        </motion.div>
    )
}
