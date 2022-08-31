import React from 'react'
import { useEffect, useState } from 'react'
export default function SearchIn() {
    const [keyword, setKeyword] = useState("");
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    console.log("im",keyword)
    return (
        <div className="ser-div">
            <input onChange={onChange} type="text" placeholder="검색어를 입력해주세요" className="ser" id="ser" />
            <button className="ser-button"></button>
        </div>
    )
}
