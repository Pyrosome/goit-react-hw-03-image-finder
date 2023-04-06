import { getImg } from "components/APIservice"
import { Component } from "react"
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";


export class ImageGallery extends Component {

    state = {
        images: '',
    }

    componentDidUpdate(prevProps, prevState) {
        const { input } = this.props; 

        if (prevProps.input !== input) {
            getImg(input).then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then((images) => {
                this.setState({images})
                console.log(images.hits[3].id);
                console.log(images.hits[3].webformatURL);
                console.log(images.hits[3].largeImageURL);
                console.log(images.hits[3].tags);
            })
        }
    }

    render() {
        return (
            <ul>
                
                {this.state.images &&
                    this.state.images.hits.map(({ id, webformatURL, tags, largeImageURL }) => {
                        return <ImageGalleryItem key={id} src={webformatURL} alt={tags} name={largeImageURL} />
                    })}
            </ul>
        )
    }
}
