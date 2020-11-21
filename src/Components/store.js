import {firebaseConnect} from '../firebase';
var redux=require('redux');



const noteInitialState = {
    isHiddenEdit: true,
    editData:{}
}


const allReducers = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            firebaseConnect.push(action.param);
            return state;
        case "HIDDEN_EDIT":
            return {...state,isHiddenEdit:!state.isHiddenEdit}
        case "GET_EDIT_DATA":
            return {...state,editData: action.editObject}
        case "EDIT":
            firebaseConnect.child(action.editItem.id).update({
                title:action.editItem.title,
                content:action.editItem.content
            })
            return {...state,editData: {}}
        case "DELETE":
            firebaseConnect.child(action.deleteID).remove();
            return {...state,editData: {}}
        default:
            return state
    }
}

var store=redux.createStore(allReducers);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})

export default store;