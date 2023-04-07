import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalContainer } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    selectedImage: PropTypes.string,
    tags: PropTypes.string,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
    
  render() {
    const { selectedImage } = this.props;

    return (
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalContainer>
          <img src={selectedImage} alt="Hello World" />
        </ModalContainer>
      </ModalOverlay>
    );
  }
}