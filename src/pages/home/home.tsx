import React from "react";
import GalleryComponent from "../../components/gallery/gallery";
import "./home.scss";
import Typist from 'react-typist';
interface IProps {
}
interface IState {
}
class HomePage extends React.Component<IProps, IState> {
  render() {
    
    return (
      <div className="app-home">
        <header>
        <Typist className="app-home__title">
          Guillermo y cris
        </Typist>
        </header>
        <div className="app-home__container">
          <GalleryComponent/>
        </div>
      </div>
    )
  }
}
export default HomePage;