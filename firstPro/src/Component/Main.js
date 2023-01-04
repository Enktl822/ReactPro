import "../style/main.css";
import Aside from "./SubComponent/Aside";
import Left from "./SubComponent/Left";
import Middle from "./SubComponent/Middle";

export default function Main() {
  return (
  <div className = "main container">
    <Left />
    <div className = "right">
    <Middle />
    <Aside />
    </div>
    
  </div>
  );
}
