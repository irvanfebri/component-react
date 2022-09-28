import React, {Component} from "react";

class ButtonClass extends Component {
    render() {
        return <><button>{this.props.text ? this.props.text: "Default ButtonClass"}</button></>
        // return <button> {this.props.text}</button>
    }
}

// ButtonClass.defaultProps = {
//     text: "Default ButtonClass"
// }
export default ButtonClass;