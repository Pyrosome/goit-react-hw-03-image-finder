import { ColorRing } from 'react-loader-spinner'
import { Backdrop } from './Loader.styled'

export const Loader = () => {
    return (
        <Backdrop>
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#849b87']}
            />
        </Backdrop>
    )
}