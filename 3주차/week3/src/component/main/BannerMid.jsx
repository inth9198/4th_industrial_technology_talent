import React from 'react'
import { motion } from "framer-motion"

export default function BannerMid() {
    const variants = {
        hidden:{opacity:0},
        visible:{opacity:1},
    }
    return (
        <motion.div initial="hidden" animate="visible" variants={variants}>
            <a href="https://www.kurly.com/shop/goods/goods_list.php?category=703" class="main-3">
                <img src="https://product-image.kurly.com/banner/random-band/pc/img/e7b19a08-def2-4e5a-bcb5-dd48a20864fd.jpg" alt="" />
            </a>
        </motion.div>

    )
}
