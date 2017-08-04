import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ShortenBlock extends  Component {
    constructor() {
        super()

        this.setState ({
            style: "inline-flex"
        })

        this.state = {
            display: 'none',  //控制display的值来隐藏与显示
        }
    }

    handleClick=()=> (
            'none'===this.state.display ?
                this.setState({
                    display: "inline-flex"
                }) :
                this.setState ({
                    display: "none"
                })
    )

    render() {
        return (
            <div className="short-children">
                <RaisedButton label="展开设施选项" primary={true} style={{'style':this.state.style}} onClick={this.handleClick.bind(this)}/>
                <br/>
                <div style={{'display':this.state.display}}>
                    1
                </div>

            </div>
        )
    }
}