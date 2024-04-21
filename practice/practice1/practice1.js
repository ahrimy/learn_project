function print() {
  /**
   * filter, includes, from을 사용해서 문자열'e'기 포함된 배열을 만들어서 반환하기
   */
  const nodeList = document.querySelectorAll('li');
  //toString.call() 타입 반환
  console.log(toString.call(nodeList));

  const list = Array.from(nodeList); //li노드로 구성된 배열
  console.log(toString.call(list));

  const filteredList = list.filter(function (value) {
    //value는 노드
    return value.innerText.includes('e');
  });
  return filteredList;
}

console.log(print());
