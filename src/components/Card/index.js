import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="one-card" id={props.id} onClick={() => props.onClick(props.id)}>
      <img src={props.imgUrl} alt="card" width = "180px" height = "180px"></img>
    </div>);
};

// Card.defaultProps = {
//   id: 1,
//   imgUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F67636%2Frose-blue-flower-rose-blooms-67636.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fflower%2F&docid=5UbOpOqf9qM23M&tbnid=CJwabmfmxl2ySM%3A&vet=10ahUKEwjm-MOz6qPjAhWHAnwKHSVyCnMQMwh-KAEwAQ..i&w=500&h=331&bih=535&biw=1254&q=image&ved=0ahUKEwjm-MOz6qPjAhWHAnwKHSVyCnMQMwh-KAEwAQ&iact=mrc&uact=8",
// }

export default Card; 