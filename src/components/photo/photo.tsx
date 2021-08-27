import React from "react";
import { IPhoto } from "../../core/inerfaces";
//import Lottie from "react-lottie";
import "./photo.scss";
import Typist from 'react-typist';
interface IProps {
  photo: IPhoto;
  showPhoto: Function;
}
interface IState {}
class PhotoComponent extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      photos: []
    }
    this._setup();
    
  }
  private _setup():void {
    this._showPhoto = this._showPhoto.bind(this);
  }
  private _showPhoto(): void {
    this.props.showPhoto(this.props.photo);
  }
  render() {
    const { photo } = this.props;
    return <div className="app-photo" onClick={this._showPhoto}>
        <img className="app-photo__image" src={photo.image} alt="" />
        
      </div>;
  }
}
export default PhotoComponent;
