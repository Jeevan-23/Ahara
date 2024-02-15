import React from 'react';


class Userclass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Rajkumar",
                location: "Kailasa",
            },
        };
      
        // console.log("Constructor Mounted");
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        // console.log(json);
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo;

        // console.log("Child mounted");
        return (
            <div className="user-card">
              
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Twitter: @Jeevan_023</h2>
            </div>
        );
    }
} 

export default Userclass;