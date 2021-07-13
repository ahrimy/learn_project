import React from 'react';
import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <div>
      테스트페이지
      <Link to='/'>메인페이지</Link>
    </div>
  );
}
