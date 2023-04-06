import { getImg } from "components/APIservice"
import { Loader } from "components/Loader/Loader";
import { Component } from "react"
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import toast from 'react-hot-toast';


export class ImageGallery extends Component {

    state = {
        images: '',
        loading: false,

    }

    componentDidUpdate(prevProps, prevState) {
        const { input } = this.props; 

        if (prevProps.input !== input) {
            this.setState({ images: '' })
            this.setState({ loading: true });

            getImg(input)
                .then(response => {
                    return response.json();
                }).then((images) => {
                    if (images.total===0) {
                        return toast.error('There was no images found on your request.')
                    } else {    
                        this.setState({ images })
                        return toast.success(`${images.totalHits} images found!`)
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

    render() {
        const { images, loading } = this.state;
        return (
            <ul>
                {loading && <Loader/> }
                {images &&
                    images.hits.map(({ id, webformatURL, tags, largeImageURL }) => {
                        return <ImageGalleryItem key={id} src={webformatURL} alt={tags} name={largeImageURL} />
                    })}
            </ul>
        )
    }
}
