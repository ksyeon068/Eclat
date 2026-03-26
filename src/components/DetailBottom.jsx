import React from 'react';
import '../style/detailbottom.scss';

const DetailBottom = () => {
    return (
        <div className='detailBottom'>
            <ul>
                <li><span>상세정보</span>
                    <ul>
                        <li>내용물의 용량 또는 중량: 100 ml / 200ml </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
                <li><span>주의사항</span>
                    <ul>
                        <li></li>
                    </ul>
                </li>
                <li><span>배송 및 문의</span>
                    <ul>
                        <li></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default DetailBottom;