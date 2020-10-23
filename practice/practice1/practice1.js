function print() {
  /**
   * filter, includes, from을 사용해서 문자열'e'기 포함된 배열을 만들어서 반환하기
   */
  const nodeList = document.querySelectorAll('li');
  const list = Array.from(nodeList);
  const filteredList = list.filter(function (value) {
    return value.textContent.includes('e');
  });
  console.log(filteredList);
}

print();
