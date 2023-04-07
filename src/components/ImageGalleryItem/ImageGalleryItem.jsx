import { Item, Img } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ src, alt, name, onClick }) => {
    return (
        <Item onClick={onClick}><Img src={src} alt={alt} name={name} /></Item>
 )
}