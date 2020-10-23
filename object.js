function getObj() {
  const name = 'david';
  const getName = function () {
    return name;
  };
  const setName = function (newName) {
    name = newName;
  };
  const printName = function () {
    console.log(name);
  };

  /**
  return {
    getName: getName,
    setName: setName,
  };
   */
  //object literal 형태로 반환할때 같은 이름을 두번 쓰는것은 불필요하다.
  return { getName, setName };
}

const obj = getObj();
console.log(obj.getName());
