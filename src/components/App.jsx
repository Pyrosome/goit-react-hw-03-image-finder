import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    searchInput: '',
    page: 1
  }

  handleSubmit = (searchInput) => {
    this.setState({ searchInput, page: 1 })
  }

    handleLoad = () => {
      this.setState((prevState) => ({page: prevState.page+1}))
    }

  render() {
    const { searchInput, page } = this.state;

    return (
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
      >
        <Toaster position="top-right" toastOptions={{ duration: 1500, style: { gap: '10px'}}}/>
        <Searchbar onSearch={this.handleSubmit}/>
        <ImageGallery input={searchInput} page={page} onLoad={this.handleLoad} />
        
        
      </div>
    );
  };
}
