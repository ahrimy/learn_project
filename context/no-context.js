import React from "react";

export default function App() {
  return (
    <div>
      <div>상단메뉴</div>
      <Profile username="mike" />
      <div>하단 메뉴</div>
    </div>
  );
}

//Profile에서는 사용하지 않지만 Greeting에 넘겨주기 위해 기계적으로 username을 넘겨주어야한다.
function Profile({ username }) {
  return (
    <div>
      <Greeting username={username} />
      {/*   */}
    </div>
  );
}

function Greeting({ username }) {
  return <p>{`${username}님 안녕하세요`}</p>;
}
