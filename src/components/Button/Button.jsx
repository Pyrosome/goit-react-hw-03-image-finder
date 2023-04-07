import { ButtonStyled } from './Button.styled';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
    return (
        <div style={{position: 'absolute'}}>
            <ButtonStyled onClick={onClick} type="button">Load More</ButtonStyled>
        </div>
 )
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};