import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      메인페이지
      <Link to='/test'>테스트페이지</Link>
    </div>
  );
}
