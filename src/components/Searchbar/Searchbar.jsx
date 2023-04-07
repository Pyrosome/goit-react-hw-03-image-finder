import { Component } from "react"
import toast from 'react-hot-toast';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';
import { HiArrowRight } from 'react-icons/hi2';


export class Searchbar extends Component {
    state = {
        value: '',
    }

    handleChange = ({ target: { value } }) => {
        this.setState({value})
    }
        
    handleSubmit = (evt) => {
        const { value } = this.state;
        evt.preventDefault();
        if (!value) {
           return toast.error('Please type in your request.')
        }
        this.props.onSearch(value);
        this.setState({value: ''})
    }

    render() {
        return (
       <SearchbarHeader onSubmit={this.handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit">
            <HiArrowRight />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
        )
    }
}