import React from "react";

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }

    cumpleaños = () => {
        this.setState({ age: parseInt(this.state.age) + 1 });
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div className="card">
                <h1>{firstName} {lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.cumpleaños}>Cumpleaños</button>
            </div>
        );
    }
}

export default PersonCard;