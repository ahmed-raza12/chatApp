import CON from '../constant';
import * as firebase from 'firebase';
import { fireDB, fireStore } from '../../database';
import history from '../../history';

export function getChatData(msg) {
    return dispatch => {
        fireDB.ref('chatData').on('child_added', (s) => {
            dispatch({
                type: CON.GET_CHAT_DATA, payload: {
                    key: s.key,
                    msgData: s.val()
                }
            })
        })
        fireDB.ref('chatData').on('child_removed', (s) => {
            dispatch({
                type: CON.GET_CHAT_REMOVED, payload: {
                    key: s.key,
                }
            })
        })
        fireDB.ref('chatData').on('child_changed', (s) => {
            dispatch({
                type: CON.GET_CHAT_UPDATE, payload: {
                    key: s.key,
                    msgData: s.val()
                }
            })
        })
    }
}


export function addMsg(msg) {
    console.log(msg)
    return dispatch => {
        fireDB.ref('chatData/').push(msg)
            .then(() => {
                // dispatch({ type: CON.MSG, payload: msg })
            })
    }
}

export function addImg(img) {
    console.log(img)
    return dispatch => {
        fireStore.ref(`photos/${img.file.name}/`).put(img.file)
            .then((snap) => {
                return snap.ref.getDownloadURL()
            })
            .then(downloadUrl => {
                console.log(downloadUrl)
                let time = new Date()
                var msgImg = {
                    type: 'IMG',
                    time: time,
                    img: downloadUrl
                }
                fireDB.ref('chatData/').push(msgImg)
            })
                // dispatch({type: CON.GET_CHAT_DATA, payload: msgImg})
                // let img = res.downloadURL
            // addMsg(msgImg)
    }
}


export function login(user) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createUser) => {
                console.log(user)
                delete user.password;
                user.uid = createUser.user.uid
                console.log(user.uid)
                console.log(user)
                fireDB.ref('users/' + createUser.user.uid + '/').set(user)
                    .then((userData) => {
                        let currentUserUid = firebase.auth().currentUser.uid;
                        dispatch({ type: CON.CURRENT_UID, payload: currentUserUid })
                    })
            }).catch((err) => {
                alert(err.message)
            })

    }
}


export function deleteTodo(key) {
    return dispatch => {
        dispatch({ type: CON.DELETE_TODD, payload: key })
        console.log(key)
    }
}

export function edit(txt, i) {
    return dispatch => {
        // console.log(txt, i)
        dispatch({ type: CON.EDIT_TODO, payload: { txt, i } })
    }
}
export function isMarkDone(i, isDone) {

    return dispatch => {
        dispatch({ type: CON.IS_DONE, payload: { i, isDone } })
    }
}