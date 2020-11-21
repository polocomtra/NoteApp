import React from 'react';
import '../App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {firebaseConnect} from '../firebase'
import { connect } from 'react-redux';

class App extends React.Component {
  hideEditButton=()=>{
    if(!this.props.isHiddenEdit){
      return <NoteForm />
    }
  }
  render(){
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <NoteList />
            </div>
            <div className="col-4">
              {
                this.hideEditButton()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isHiddenEdit: state.isHiddenEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hiddenEditButton: () => {
      dispatch({type:"HIDDEN_EDIT"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)