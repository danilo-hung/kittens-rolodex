import { Component } from "react";
import "./card.style.css";

class Card extends Component {
    render() {
        const { id, name, email, username, website, phone } = this.props.content;

        return (
            <div className="card-box" >
                <div className="card-container">
                    <div className="card-line"></div>
                    <div className="img-box" >
                        <img
                            src={`https://robohash.org/cat${id}?set=set4&size=180x180`}
                            alt={` img ${name}`} />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>{name}<br /> <span>{username}</span> </h2>
                            <div className="data">
                                <p><i>email</i>  </p>
                                <p><span>{email}</span></p>
                                <p><i>web</i> </p>
                                <p><span>{website}</span> </p>
                                <p><i>phone</i> </p>
                                <p><span>{phone}</span> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


















export default Card