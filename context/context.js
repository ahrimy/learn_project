import React, { createContext } from "react";

const UserContext = createContext("unknown");
export default function App() {
  return (
    <div>
      <UserContext.Provider value="mike">
        <div>상단메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
      </UserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/*   */}
    </div>
  );
}

//Provider 가 없어도 DEFAULT값으로 사용 가능
function Greeting() {
  //이 부분에서 username을 사용할 수 없음
  //hook을 사용하면 된다.
  return (
    <UserContext.Consumer>
      <p>{`${username}님 안녕하세요`}</p>
    </UserContext.Consumer>
  );
}
