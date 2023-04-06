const BASE_URL = 'https://pixabay.com/api/';
const KEY = '35107807-41fbb13d0c1546249cedf950d';
const perPage = 12;

export const getImg = (input, page) => {
    return (
        fetch(`${BASE_URL}?q=${input}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    )
} 
