import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
    return (
        <>
            <button onClick={onClick} type="button">Load More</button>
        </>
 )
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};