import * as constants from "../constants/actionTypes";
import * as reduxConf from "../reduxConfig";
import fetch from "fetch-everywhere";
function updateUserData(){
    return dispatch => {
        let data;
        fetch(`${reduxConf.get("host")}/api/user/me`,{
            method: 'get',
            credentials: 'same-origin',
            headers: {
                'token':reduxConf.get("token"),
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
        .then(function(response){
            console.log(response);
            if (response.status === 200) {
                return response.json();
            } else {
                data = {
                    success:false,
                    status:response.status
                }
            }
        })
        .then(json => {
            console.log(json);
            if (json.success){
                reduxConf.get("emitter").emit("update-user-data",json.result);
                dispatch(requestPostEnd(json));
            } else {
                dispatch(requestPostEnd({
                    success:false,
                    data:json
                }));
            }
        })
        .catch(error => {
            console.log(error);
            data = error;
            dispatch(requestPostEnd({
                success:false,
                data:error
            }));
        });
    }
}
function requestPostEnd(json){
    return {
        type:constants.updateUserData.RESPONSE,
        json:json
    }
}
module.exports = { updateUserData };