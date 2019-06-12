import React, { Component } from 'react'

class IframeAR extends Component {

    constructor() {
        super();

        this.onReceiveMessage = this.onReceiveMessage.bind(this)
    }

    componentDidMount() {
        window.addEventListener('message', this.onReceiveMessage)
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.onReceiveMessage, false)
    }
    
    onReceiveMessage = (e) => {
        this.props.onMarkersChange(JSON.parse(e.data))
    }

    render() {
        return (
            <iframe title="3d-renderer" src='https://v-herzog.github.io/' allow="camera"/>
        )
    }
}

export default IframeAR