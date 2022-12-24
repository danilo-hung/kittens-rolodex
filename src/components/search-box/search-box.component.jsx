import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {

    render() {
        return (
            <div className="search-container">
                <input
                    className={`search-box ${this.props.className}`}
                    type="search"
                    onChange={this.props.onChangeHandler}
                    required="required"
                />
                <span>{this.props.placeHolder}</span>
            </div>

        )
    }
}

export default SearchBox