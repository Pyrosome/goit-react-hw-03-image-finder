import { Item, Img } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ src, alt, name }) => {
    return (
        <Item><Img src={src} alt={alt} name={name} /></Item>
 )
}