import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from 'react-hot-toast';



export class App extends Component {
  state = {
    searchInput: '',
  }

  handleSubmit = (searchInput) => {
    this.setState({ searchInput })
  }

  render() {
    const { searchInput } = this.state;

    return (
      <div
      style={{
        height: '100vh',
        width: '100vh',
        fontSize: 30,
        color: '#010101'
      }}
      >
        <Toaster position="top-right" toastOptions={{ duration: 1000}}/>
        <Searchbar onSearch={this.handleSubmit}/>
        <ImageGallery input={searchInput} />
        
        
      </div>
    );
  };
}
