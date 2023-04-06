import { getImg } from "components/APIservice"
import { Loader } from "components/Loader/Loader";
import { Component } from "react"
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export class ImageGallery extends Component {

    state = {
        images: '',
        loading: false,

    }

    componentDidUpdate(prevProps, prevState) {
        const { input } = this.props; 

        if (prevProps.input !== input) {
            this.setState({ loading: true });

            getImg(input)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                }).then((images) => {
                    this.setState({ images })
                }).catch((error) => {
                    console.log(error)
                }).finally(() => {
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
