import { Component } from "react";
import User from "./User";
import Userclass from "./Userclass"
import UserContext from "../../utils/UserContext";

class About extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        return (
                <div className="mx-40">
                    <h1 className="font-bold">About us</h1>
                    <div>
                        Loggedin User
                        <UserContext.Consumer>
                            {({loggedinUser}) => <h1>{loggedinUser}</h1>}
                        </UserContext.Consumer>
                    </div>
                    <h2>Hi iam jeevan the creator of this website this is result of namaste
                        react webseries
                    </h2>
                    <Userclass name={"Jeevan Malatesha"} location={"Davanagere boyzz"} />
                </div>
            );
    }
}


// functional component
// const About = () => {
//     return (
//         <div>
//             <h1>About us</h1>
//             <h2>Hi iam jeevan the creator of this website this is result of namaste
//                 react webseries
//             </h2>
//             <Userclass name={"Jeevan Malatesha"} location={"Davanagere boyzz"} />
//         </div>
//     );
// };

export default About;