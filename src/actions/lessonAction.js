/**
 * Created by Ganzorig on 2017-01-18.
 */
import reduxConf from '../reduxConfig';
import * as networkActions from '../networkActions';
import * as constants from '../constants/actionTypes';

export function createLesson(threadID=null){
    return {
        type: constants.lessonCreate.REQUEST,
        threadID
    }
}
export function closeModal(threadID=null){
    return {
        type: constants.lessoncloseModal.REQUEST,
        threadID
    }
}
export function LessonInputTitle(json,threadID=null) {
    return {
        type: constants.lessonTitle.REQUEST,
        threadID,
        json
    }
}
export function LessonInputDescription(json,threadID=null) {
    return {
        type: constants.lessonDescription.REQUEST,
        threadID,
        json
    }
}
export function lessonCheckSuccess(json,threadID=null){
    return {
        type:constants.lessonCheckSuccess.REQUEST,
        threadID,
        json
    }
}
export function LessonInputPrice(json,threadID=null){
    return {
        type:constants.lessonPrice.REQUEST,
        threadID,
        json
    }
}
export function LessonInputPrice1(json,threadID=null){
    return {
        type:constants.lessonPrice1.REQUEST,
        threadID,
        json
    }
}
export function LessonActivePrice(threadID=null){
    return {
        type:constants.lessonActivePrice.REQUEST,
        threadID,
    }
}
export function tagChange(json,threadID=null){
    return {
        type:constants.lessonTag.REQUEST,
        threadID,
        json
    }
}
export function lessonTagRemove(json,threadID=null){
    return {
        type:constants.lessonRemoveTag.REQUEST,
        threadID,
        json
    }
}
export function lessonCategoryChange(json,threadID=null) {
    return {
        type:constants.lessonCategory.REQUEST,
        threadID,
        json
    }
}
export function lessonChildCategoryChange(json,threadID=null){
    return {
        type:constants.lessonChildCategory.REQUEST,
        threadID,
        json
    }
}
export function lessonTypeChange(json,threadID=null) {
    return {
        type:constants.lessonType.REQUEST,
        threadID,
        json
    }
}
export function lessonImageRemove(json,threadID=null) {
    return {
        type:constants.lessonImageRemove.REQUEST,
        threadID,
        json
    }
}
export function lessonFileRemove(json,threadID=null) {
    return {
        type:constants.lessonFileRemove.REQUEST,
        threadID,
        json
    }
}
export function lessonAudioRemove(json,threadID=null) {
    return {
        type:constants.lessonAudioRemove.REQUEST,
        threadID,
        json
    }
}
export function lessonVideoRemove(json,threadID=null) {
    return {
        type:constants.lessonVideoRemove.REQUEST,
        threadID,
        json
    }
}
export function audioThumbnailUpload(files,type,audio_id) {
    let url = `/api/${type}/upload/${audio_id}`;
    return networkActions.requestUploadPost(constants.audioThumChange,url,{},null,files,type)
}
export function mediaUpload(files,type){
    let url = `/api/${type}/upload`;
    return networkActions.requestUploadPost(constants.lessonUpload,url,{},null,files,type)
}
export function lessonSave(data,header=null, requestParams = null,threadID = 'main'){
    let requestActions = constants.lessonActionSave;
    let url = `/api/lesson/save`;
    return dispatch => {
        dispatch(requestLessonSaveStart(data,threadID,requestActions));
        if(reduxConf.get('token') !== undefined){
            header = {
                ...header,
                token:reduxConf.get('token')
            }
        }
        header = {
            ...header,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let currentUrl = `${reduxConf.get('host')}${url}`;
        if(requestParams){
            currentUrl +='?'+querystring.stringify(requestParams)
        }
        return fetch(currentUrl, {
            method: 'post',
            credentials: 'same-origin',
            headers: header,
            body: JSON.stringify(data)
        })
            .then(function (response) {
                if (response.status == 200) {
                    return response.json();
                } else {
                    if(response.status == 401){
                        if(em = reduxConf.get('emitter'))
                            em.emit('auth-error');
                    }
                    return {
                        success:false,
                        status:response.status
                    }
                }
            })
            .then(json => {
                if(!json.success){
                    reduxConf.get('emitter').emit('system-errors',json);
                }else{
                    if(json.result.status.toLowerCase() == 'p'){
                        reduxConf.get('emitter').emit('lesson-payment',json);
                    }
                    if(json.result.status.toLowerCase() != 'p'){
                        if(json.result.status.toLowerCase() == 'convert'){
                            reduxConf.get('emitter').emit('lesson-info',json);
                        }else{
                            window.location.assign("/lesson/"+json.result.slug);
                        }
                    }else{
                        //window.location.assign("/lesson/"+json.result.slug);
                    }
                }
                dispatch(requestLessonModelSubmitLoading());
            })
            .catch(error => {
                reduxConf.get('emitter').emit('system-errors',json);
                // dispatch(requestLessonSaveEnd({
                //     success:false
                // },threadID,requestActions))

            });

    }
}
export function requestLessonSaveStart(json,threadID,requestParams) {
    return {
        type: requestParams.REQUEST,
        threadID,
        json
    }
}
export function requestLessonSaveEnd(json,threadID,requestParams) {
    return {
        type: requestParams.RESPONSE,
        threadID,
        json
    }
}
export function requestLessonModelClose(threadID='main') {
    return {
        type: constants.lessonClose.REQUEST,
        threadID,
    }
}
export function requestLessonModelSubmitLoading(threadID='main') {
    return {
        type: constants.lessonSubmitLoading.REQUEST,
        threadID,
    }
}
export function editLesson(id){
    let url = `/api/lesson/edit/${id}`;
    return networkActions.requestGet(constants.lessonEdit,url,{},null)
}