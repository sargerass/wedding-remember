import React from "react";
import { IPhoto } from "../../core/inerfaces";
//import Lottie from "react-lottie";
import "./gallery.scss";
import axios from "axios";
import PhotoComponent from "../photo/photo";
import ModalComponent from "../modal/modal";
import { EnumModalTransition, EnumPhotoStatus } from "../../core/enums";
import Typist from 'react-typist';
import { isInViewport } from "../../core/helpers";
interface IProps {
}
interface IState {
  photos: IPhoto[];
  showModal: boolean;
  photoCurrent: IPhoto  |undefined;
}
class GalleryComponent extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
      photoCurrent: undefined
    }
    this._setup();
    
  }
  private _setup():void {
    this._showPhoto = this._showPhoto.bind(this);
    document.addEventListener('scroll', () => this.componentDidUpdate() );
  }
  
  public componentDidMount() {
    this._chargePhotos();
  }
  private _chargePhotos(): void {
    const URL = '/word-remenbers';
    axios.get(URL).then(res => {
      const photos = res.data.map((photo: IPhoto) => {
        return  {
          ...photo,
          status: EnumPhotoStatus.Initial
        }
      })
      this.setState({photos});
    }, error => {
      console.log('error', error);
    })
  }
  private _showPhoto(photo:IPhoto): void {
    this.setState({
      showModal: true,
      photoCurrent: photo
    });
    
  }
  componentDidUpdate() {
    const listItems = document.getElementsByClassName('app-gallery__item');
    let hasChange = false;
    for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];
      const inViewprt = isInViewport(element);
      const id = element.getAttribute('id');
      if(inViewprt) {
        const photo = this.state.photos.find(photo => photo.id.toString() == id);
        if(photo && photo.status === EnumPhotoStatus.Initial) {
          photo.status = EnumPhotoStatus.InitialLoading;
          hasChange = true;
        }
      }
    }
    if (hasChange) {
      this.setState({photos: this.state.photos})
    }
  }
  private _getElements(photos: IPhoto[]): JSX.Element[] {
    return photos.map(photo => {
      return <div className="app-gallery__item" key={photo.id} id={photo.id.toString()}>
        <PhotoComponent showPhoto={this._showPhoto} photo={photo} />
      </div>
    });;
  }
  private _getContentMessage(): JSX.Element {
    const { photoCurrent} = this.state;
    if(!photoCurrent) {
      return <div></div>;
    }
    return <div className="app-gallery__modal">
      <img className="app-gallery__modal__image" src={photoCurrent.image} alt="" />
      <div className="app-gallery__modal__message">
        
        <Typist className="" startDelay={1000}>
        {photoCurrent.message}
        </Typist>
      </div>
    </div>;
  }
  render() {
    const {photos, showModal} = this.state;
    const data1 = [...photos];
    const data2 = data1.splice(0, Math.floor(data1.length/2));
    const listPhoto1 = this._getElements(data1);
    const listPhoto2 = this._getElements(data2);
    const contentMessage = this._getContentMessage();
    
    
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
            {contentMessage}
        </ModalComponent>
      </div>
    )
  }
}
export default GalleryComponent;