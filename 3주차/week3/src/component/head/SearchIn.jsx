import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function SearchIn() {
    const [keyword, setKeyword] = useState("");
    let navigate = useNavigate();
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    console.log("im",keyword)
    useEffect(() => {
        console.log(keyword);
    }, [keyword])
    const onSearch = (event) =>{
        event.preventDefault();
        navigate("/search")
    }

    return (
        <div className="ser-div">
            <form onSubmit={event => onSearch(event)}>
                <input onChange={onChange} type="text" placeholder="검색어를 입력해주세요" className="ser" id="ser" />
                <button className="ser-button"></button>
            </form>
        </div>
    )
}
