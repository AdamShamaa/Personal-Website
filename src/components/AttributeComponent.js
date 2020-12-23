import React from "React"
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'

class AttributeComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            index: 0,
            transition: true
        }

        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
    }

    onEnter = () => {
        setTimeout(()=>{this.setState({transition: false})}, this.props.delayMS);
    }
    onExit = () => {
        setTimeout(()=>{this.setState({index: this.state.index+1, transition: true})}, 500);
    }

    render(){
        return (
        <Fade in={this.state.transition} 
            onEntered={this.onEnter}
            onExited={this.onExit}
        >
            <p style={this.props.style}> a {this.props.attributes[this.state.index % this.props.attributes.length]}</p>
        </Fade>
        )
    }
}

AttributeComponent.propTypes = {
    delayMS: PropTypes.number.isRequired,
    attributes: PropTypes.array.isRequired,
    style: PropTypes.object.isRequired
  }

export default AttributeComponent