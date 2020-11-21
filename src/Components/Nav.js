import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    handleAdd=(event)=>{
        event.preventDefault();
        this.props.hiddenEditButton();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">TIEN TAI NGUYEN'S STUDIO</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav  mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(event)=>this.handleAdd(event)} >Add note</a>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hiddenEditButton: () => {
            dispatch({type:"HIDDEN_EDIT"})
        }
    }
}

export default connect(null, mapDispatchToProps)(Nav)