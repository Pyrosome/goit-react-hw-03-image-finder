import { Component } from "react"
import toast from 'react-hot-toast';
import { getImg } from "components/APIservice"
import { Loader } from "components/Loader/Loader";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";


export class ImageGallery extends Component {

    state = {
        images: [],
        loading: false,
        button: false,
        page: 1
    }

    componentDidUpdate(prevProps, prevState) {
        const { input } = this.props;
        const { page } = this.state;

        if (
            prevProps.input !== input
        ) {
            this.setState({ images: [] })
        }

        if (
            prevProps.input !== input ||
            prevState.page !== page
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

    handleLoad = () => {
        this.setState((prevState) => ({page: prevState.page+1}))
    }

    render() {
        const { images, loading } = this.state;
        return (
            <div>
                {loading && <Loader/> } 
                <ul>
                    {images &&
                        images.map(({ id, webformatURL, tags, largeImageURL } ) => {
                            return <ImageGalleryItem key={id} src={webformatURL} alt={tags} name={largeImageURL} />
                    })}
                </ul>
                {this.state.button && <Button onClick={this.handleLoad} /> }
            </div>
        )
    }
}
