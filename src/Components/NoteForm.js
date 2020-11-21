import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            id:''
        }
    }
    
    componentWillMount() {
        if(this.props.editData){
            this.setState({
                title: this.props.editData.title,
                content: this.props.editData.content,
                id: this.props.editData.key
            });
        }
    }
    

    editChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }

    getData1=(title,content)=>{
        if(this.state.id){
            var item={};
            item.id=this.state.id;
            item.title=this.state.title;
            item.content=this.state.content;
            this.props.getEditData(item);
            //tat form di
            this.props.hiddenEditButton();
        }else{
            var element={};
            element.title=title;
            element.content=content;
            this.props.getConnect(element);
        }
        
    }

    render() {
        return (
            <div>
                <form>
                    <div className="card">
                        <div className="card-header bg-warning">
                        Edit content
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <input defaultValue={this.props.editData.title} type="text" name="title" className="form-control"  onChange={(event)=>this.editChange(event)} placeholder="Title..." />
                            <br />
                            <textarea defaultValue={this.props.editData.content} type="text" name="content" className="form-control" onChange={(event)=>this.editChange(event)} placeholder="Content..." />
                            <br />
                            <button type="reset"  className="btn btn-danger btn-lg btn-block" onClick={(title,content)=>this.getData1(this.state.title,this.state.content)} >Submit</button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editData: state.editData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getConnect: (param) => {
            dispatch({type:"ADD_NOTE",param})
        },
        getEditData: (editItem) => {
            dispatch({type:"EDIT",editItem})
        },
        hiddenEditButton: () => {
            dispatch({type:"HIDDEN_EDIT"})
          }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)