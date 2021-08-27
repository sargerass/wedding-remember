import React from "react";
import { IPhoto } from "../../core/inerfaces";
//import Lottie from "react-lottie";
import "./photo.scss";
import Typist from 'react-typist';
import { EnumPhotoStatus } from "../../core/enums";
interface IProps {
  photo: IPhoto;
  showPhoto: Function;
}
interface IState {

}
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
  private _loadImage() {
    const { photo } = this.props;
    const image = new Image();
    image.onload = () => { 
      photo.status = EnumPhotoStatus.Loaded;
      this.setState({});
    }
    photo.status = EnumPhotoStatus.Loading;
    image.src = photo.image;
  }
  render() {
    const { photo } = this.props;
    
    photo.status === EnumPhotoStatus.InitialLoading && this._loadImage();
    let image;
    if (photo.status === EnumPhotoStatus.Loaded) {
      image = <img className="app-photo__image" src={photo.image} alt="" />;
    }else {
      const height = Math.round(Math.random()*200 + 100)+'px';
      image = <div style={{height}} className="app-photo__loader">
    
      </div>;
    }
    return <div className="app-photo" onClick={this._showPhoto}>
        {image}
      </div>;
  }
}
export default PhotoComponent;
