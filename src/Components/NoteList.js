import React, { Component } from 'react';
import {firebaseConnect} from '../firebase';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount() {
        firebaseConnect.on('value',(notes)=>{
            var dataArray=[];
            notes.forEach(element=>{
                const key=element.key;
                const title=element.val().title;
                const content=element.val().content;
                dataArray.push({
                    key:key,
                    title:title,
                    content:content
                })
            })
            this.setState({
                data:dataArray
            });
        })
    }

    getData=()=>{
        return this.state.data.map((item,key)=>{
            return (
                <NoteItem key={key} id={item.key} title={item.title} content={item.content} note={item} />
            )
        })
    }
    
    render() {
        return (
            <div>
                {this.getData()}
            </div>
        );
    }
}

export default NoteList;