import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodos, } from '../store/actions';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase';
import Button from '@material-ui/core/Button';
import { addMsg, getChatData, addImg } from '../store/actions';
import { fireDB } from '../database';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            done: false,
            img: ''
        }
        this.props.getChatData()
    }

    componentDidMount() {
        this.props.getChatData()
    }
    deleteMsg = (chatKey) => {
        fireDB.ref('chatData/').child(chatKey).remove()
    }
    editMsg = (txt, chatKey) => {
        let newTxt = prompt('plz add new text', txt)
        console.log(chatKey)
        fireDB.ref(`chatData/${chatKey}/msg/`).set(newTxt)
    }

    render() {
        console.log(this.props.chatData)
        let obj = this.props.chatData;
        console.log(obj)
        return (
            <div>
                <h1>Chat App</h1>
                <TextField
                    value={this.state.msg}
                    onChange={(e) => { this.setState({ msg: e.target.value }) }}
                    label="Your Image"
                />
                <Button variant="contained" color="primary" secondary={true}
                    onClick={() => {
                        let time = new Date();

                        let msg = {
                            type: 'TEXT',
                            msg: this.state.msg,
                            time: time.toString(),
                            seen: false
                            // time : 
                        }
                        console.log(msg);
                        this.props.addMsg(msg);
                        this.setState({ msg: '' });

                    }}
                >add Msg
      </Button>
                <br />
                <TextField
                    type="file"
                    //value={this.state.img}
                    onChange={(e) => { this.setState({ img: e.target.files[0] }) }}
                />
                <Button variant="contained" color="primary" secondary={true}
                    onClick={() => {
                        this.props.addImg({ file: this.state.img })
                        this.setState({ img: '' })
                    }}
                >Upload Image
      </Button>
                {
                    this.props.chatData !== null ?
                        ( Object.keys(obj).map((chatKey, i) => {
                            console.log(obj[chatKey].type)
                                    return (
                                <div>
                                     {(obj[chatKey].type === 'TEXT') ?  <p> {obj[chatKey].msg}
                                            <button onClick={() => this.deleteMsg(chatKey)}> Delete </button>
                                            <button onClick={() => this.editMsg(obj[chatKey].msg, chatKey)}> Update </button>
                                        </p> : <img src={obj[chatKey].img} width="300px" height="300px" />

                                       }
                                    </div>
                                    )
                        })) : <h1> Loading </h1>

                }
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getChatData: () => {
            dispatch(getChatData())
        },
        addMsg: (msg) => {
            dispatch(addMsg(msg))
        },
        addImg: (img) => {
            dispatch(addImg(img))
        }
    }
}

function mapStateToProps(state) {
    console.log(state.reducer)
    return ({
        chatData: state.reducer.chatData
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
