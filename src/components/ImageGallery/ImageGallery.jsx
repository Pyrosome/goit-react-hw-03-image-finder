import { Component } from "react"
import toast from 'react-hot-toast';
import { getImg } from "components/APIservice"
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { GalleryUl } from './ImageGallery.styled';
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";


export class ImageGallery extends Component {

    state = {
        images: [],
        loading: false,
        button: false,
        openModal: false,
        largeImg: ''
    }

    componentDidUpdate(prevProps, prevState) {
        const { input } = this.props;
        const { page } = this.props;

        if (prevProps.input !== input) {
            this.setState({ images: []})
        }

        if (
            prevProps.input !== input ||
            prevProps.page !== page
        ) {
            this.setState({ loading: true });

            getImg(input.trim(), page)
                .then(response => {
                    return response.json();
                }).then((images) => {
                    if (images.total===0) {
                        return toast.error('There was no images found on your request.')
                    } else {    
                        this.setState({
                            images: [...this.state.images, ...images.hits], 
                            button: page < Math.ceil(images.totalHits / 12),
                        })
                        if (page===1) {
                            return toast.success(`${images.totalHits} images found!`)
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                    return toast.error('Something went wrong. Please try again.')
                })
                .finally(() => {
                    this.setState({ loading: false });  
                })
                
        }
    }

    handleLoad = () => {
        this.props.onLoad()
    }

    onClickImg = e => {
        console.log(e.target.name);
        this.setState({
            largeImg: e.target.name,
            openModal: true,
        });
    };

     closeModal = () => {
       this.setState({
         openModal: false,
       });
     };

    render() {
        const { images, loading, largeImg } = this.state;
        const { page} = this.props;
        return (
            <div>
                {loading && page===1 && <Loader/> } 
                <GalleryUl>
                    {images &&
                        images.map(({ id, webformatURL, tags, largeImageURL } ) => {
                            return <ImageGalleryItem key={id} src={webformatURL} alt={tags} name={largeImageURL} onClick={this.onClickImg} />
                    })}
                </GalleryUl>
                {this.state.button && <Button onClick={this.handleLoad} />}
                {this.state.openModal && <Modal selectedImage={largeImg} onClose={this.closeModal} />}
            </div>
        )
    }
}
