const BASE_URL = 'https://pixabay.com/api/';
const KEY = '35107807-41fbb13d0c1546249cedf950d';

export const getImg = (input, currentPage = 1, perPage = 12) => {
    return (
        fetch(`${BASE_URL}?q=${input}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    )
} 
