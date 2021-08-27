import React from "react";
import GalleryComponent from "../../components/gallery/gallery";
import "./home.scss";

interface IProps {
}
interface IState {
}
class HomePage extends React.Component<IProps, IState> {
  render() {
    
    return (
      <div className="app-home">
        <header className="app-home__title">
          Cristina y Guillermo
        
        </header>
        <div className="app-home__container">
          <GalleryComponent/>
        </div>
      </div>
    )
  }
}
export default HomePage;