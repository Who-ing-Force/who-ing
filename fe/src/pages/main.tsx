import React from 'react';
import './main.css';
import CustomButton from '../components/common/CustomButton';

export default function Main() {
    return (
        <div className="main-container">
            <div className="main-content">
                <h2>안녕하세요🎉</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                    <CustomButton onClick={() => alert('버튼이 클릭되었습니다!')}>
                        방 만들기
                    </CustomButton>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                    <CustomButton>방 참가하기</CustomButton>
                </div>
            </div>
        </div>
    );
}