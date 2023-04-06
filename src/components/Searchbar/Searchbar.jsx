import { Component } from "react"
import toast from 'react-hot-toast';


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
            <header className="searchbar"
                style={{
                display: 'flex',
                justifyContent: 'center',
                }}>
                <form onSubmit={this.handleSubmit} className="form">
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                
                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}