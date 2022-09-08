import React from 'react'
import '../../css/LogIn.css'
import Spec from '../head/Spec'


export default function LogIn() {
    return (
        <div className='log-main'>
            <form>
                <div className='log-ment'>로그인</div>
                <div className='input-ip'>
                    <div className='input-div-id'>
                        <input className='input-p-id' type="text" placeholder='아이디를 입력해주세요'/>
                    </div>
                    <div className='input-div-pw'>
                        <input className='input-p-pw' type="password" placeholder='비밀번호를 입력해주세요' />
                    </div>
                </div>

                <div className='find'>
                    <div className='find_id'>아이디 찾기</div>
                    <Spec />
                    <div className='find_pw'>비밀번호 찾기</div>
                </div>
                <div className='log-in-b'>
                    <button type="submit"></button>
                </div>
                <div className='sign-in'>
                    <button></button>
                </div>
            </form>
        </div>
    )
}
