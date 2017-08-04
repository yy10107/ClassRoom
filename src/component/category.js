/**
 * Created by Administrator on 2017/7/25.
 */
import React,{Component} from 'react';
import Checkbox from 'material-ui/Checkbox';

class CategoryCheckbox extends Component {
    constructor() {
        super()
        this.state= {
            checkBoxList: [
                {label:'高速', name:0, checked:false},
                {label:'隧道', name:1, checked:false},
                {label:'快速路', name:2, checked:false},
                {label:'大桥', name:3, checked:false},
                {label:'市政', name:4, checked:false},
                {label:'公路', name:5, checked:false},
                {label:'全选', name:'all', checked:false}

            ]
        }
    }

    componentDidMount() {
    {this.state.checkBoxList.map((item)=>{
        return(
            <Checkbox
                key={item.id}
                label={item.label}
                checked={item.checked}
            />)
    })}
    }}

export default CategoryCheckbox;