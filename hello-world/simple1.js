function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(!liked) },
    text
  );
}

const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(LikeButton), domContainer);

//각각 따로 rendering 하는 방법
const domContainer1 = document.getElementById("root1");
ReactDOM.render(React.createElement(LikeButton), domContainer1);
const domContainer2 = document.getElementById("root2");
ReactDOM.render(React.createElement(LikeButton), domContainer2);
const domContainer3 = document.getElementById("root3");
ReactDOM.render(React.createElement(LikeButton), domContainer3);

//위의 방법은 추천하지 않음
//React 함수로 해결하는 방법
const domContainer4 = document.getElementById("root4");
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer4
);
