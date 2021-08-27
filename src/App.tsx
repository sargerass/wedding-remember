import React from 'react';
import './App.scss';
import HomePage from './pages/home/home';
import axios from "axios";
import BackgroundComponent from './components/background/background';
interface IProps {}
interface IState {
}
class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this._setup();
    
  }
  private _setup():void {
    axios.defaults.baseURL = process.env.REACT_APP_API;
    window.addEventListener("resize", this._updateHeight);
    this._updateHeight();
  }
  private _updateHeight(): void {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  }
  public render() {
    return (
      <div>
        <BackgroundComponent/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
