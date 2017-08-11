import React, { Component } from 'react';
import './category.css';
import Checkbox from 'material-ui/Checkbox';

class Row extends Component{
    constructor() {
        super()
        this.state= {
            checked: false
        }
    }
    checkIt() {
        this.props.callback(this.props.index, !this.props.checked)
        return
    }
    render() {
        return (
            <nobr className="table-element">
                <td><Checkbox checked={this.props.checked} onCheck={this.checkIt} /></td>
                <td >{this.props.obj.foo}</td>
            </nobr>
        )
    }
}

class Table extends Component{
    constructor() {
        super()
        var rowState =[];
        for(var i = 0; i < rows.length; i++) {
            rowState[i] = false;
        }
        this.state= {
            checkAll: false,
            rowState:rowState
        }
    }
    checkRow(id,value) {
        this.state.rowState[id] = value;
        if (this.state.checkAll) {
            this.state.checkAll = !this.state.checkAll;
        }
        this.setState({
            rowState: this.state.rowState,
            checkAll: this.state.checkAll
        })
    }
    checkAll () {
        var rowState =[];
        var checkState = !this.state.checkAll;
        for(var i = 0; i < this.state.rowState.length; i++) {
            rowState[i] = checkState;
        }
        this.state.checkAll = checkState;

        this.setState({
            rowState: rowState,
            checkAll: this.state.checkAll
        });
    }
    render() {
        var self = this;
        var _ = require("underscore");
        var rows = _.map(this.props.rows, function( row,index) {
            return (<Row obj={row} index={index} key={row.id} checked={self.state.rowState[index]} callback={self.checkRow} />);
        });
        return (
            <nobr className="table-holder-container"  >
                <td className="table">{rows}</td>
                <td><Checkbox label="全选" checked={this.state.checkAll} onCheck={this.checkAll}/></td>
            </nobr>
        );
    }
}

var rows = [
    {
        'id' : 1,
        'foo': 'bar'
    },
    {
        'id' : 2,
        'foo': 'baarrrr'
    },
    {
        'id' : 3,
        'foo': 'baz'
    }
];

export {Table,Row,rows}
