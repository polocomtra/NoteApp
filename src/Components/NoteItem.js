import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    transferData=()=>{
        this.props.hiddenEditButton();
        this.props.getEditData(this.props.note);
    }
    render() {
        
        return (
            <div>
                <div id="note" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#note" href={'#'+this.props.id}  >
                            {this.props.title}
                            </a>
                            <div className="btn-group float-right">
                                <button type="button" className="btn btn-outline-primary" onClick={()=>this.transferData()} >Edit</button>
                                <button type="button" className="btn btn-outline-danger" onClick={()=>this.props.deleteEditData(this.props.id)} >Delete</button>
                            </div>
                        </h5>
                        </div>
                        <div id={this.props.id} className="collapse in" >
                        <div className="card-body">
                            {this.props.content}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hiddenEditButton: () => {
            dispatch({type:"HIDDEN_EDIT"})
          },
        getEditData: (editObject) => {
            dispatch({type:"GET_EDIT_DATA",editObject})
          },
        deleteEditData: (deleteID) => {
            dispatch({type:"DELETE",deleteID})
          }
    }
}

export default connect(null, mapDispatchToProps)(NoteItem)