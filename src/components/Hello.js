import React, { Component } from 'react'

export default class HelloWorld extends Component {
    render() {
        return (
                <div>
                <p>Hello {this.props.name}</p>
                </div>
        )
    }
}
