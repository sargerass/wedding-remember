import React from "react";
import { IPhoto } from "../../core/inerfaces";
//import Lottie from "react-lottie";
import "./gallery.scss";
import axios from "axios";
import PhotoComponent from "../photo/photo";
import ModalComponent from "../modal/modal";
import { EnumModalTransition } from "../../core/enums";
interface IProps {
}
interface IState {
  photos: IPhoto[];
  showModal: boolean;
}
class GalleryComponent extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      showModal: false
    }
    this._setup();
    
  }
  private _setup():void {
    this._showPhoto = this._showPhoto.bind(this);
  }
  public componentDidMount() {
    this._chargePhotos();
  }
  private _chargePhotos(): void {
    const URL = '/word-remenbers';
    axios.get(URL).then(res => {
      this.setState({photos: res.data});
    }, error => {
      console.log('error', error);
    })
  }
  private _showPhoto(photo:IPhoto): void {
    console.log('show', photo);
    this.setState({
      showModal: true
    });
    
  }
  private _getElements(photos: IPhoto[]): JSX.Element[] {
    return photos.map(photo => {
      return <div className="app-gallery__item" key={photo.id}>
        <PhotoComponent showPhoto={this._showPhoto} photo={photo} />
      </div>
    });;
  }
  render() {
    const {photos, showModal} = this.state;
    const data1 = [...photos];
    const data2 = data1.splice(0, Math.floor(data1.length/2));
    const listPhoto1 = this._getElements(data1);
    const listPhoto2 = this._getElements(data2);
    return (
      <div className="app-gallery">
        <div className="app-gallery__container">
          <div className="app-gallery__container__row">
            <div className="app-gallery__container__column">
              {listPhoto1}
            </div>
            <div className="app-gallery__container__column">
              {listPhoto2}
            </div>
          </div>
        </div>
        <ModalComponent show={showModal} type={EnumModalTransition.Revealing} outModal={()=>this.setState({showModal: false})}>
            Hola
        </ModalComponent>
      </div>
    )
  }
}
export default GalleryComponent;