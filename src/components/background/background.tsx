import React from "react";
import { IPhoto } from "../../core/inerfaces";
//import Lottie from "react-lottie";
import "./background.scss";
interface IProps {
}
interface IState {}
class BackgroundComponent extends React.Component<IProps, IState> {
  render() {
    return <div className="app-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>;
  }
}
export default BackgroundComponent;
