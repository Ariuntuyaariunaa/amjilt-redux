/**
 * Created by Ganzorig on 2017-01-18.
 */
import {fetchTimeLine,lessonCreate,lessoncloseModal,lessonTitle,lessonDescription,lessonCheckSuccess,
    lessonPrice,lessonTag,lessonRemoveTag,lessonCategory,lessonChildCategory,lessonType,lessonUpload,
    lessonImageRemove,lessonFileRemove,lessonAudioRemove,lessonVideoRemove,lessonEdit,audioThumChange,
    lessonActivePrice,lessonPrice1,lessonClose,lessonActionSave,lessonSubmitLoading} from '../constants/actionTypes';
const initialState = {
    visible:false,
    loading:false,
    lesson:{
        images:[],
        category:'',
        files:[],
        videos:[],
        audios:[],
        tags:[],
        price:0,
        priceType:false,
        title:'',
        type_id:'',
        child_category:'',
        description:'',
        status:'A',
        thumbnail:{}
    },
    status:0//0 amjilttai unshij duussan 1 - loading 2 - error 3-not found
};
export default function lesson(state = initialState, action) {
    switch (action.type) {
        case fetchTimeLine.REQUEST:
            return state;
        case fetchTimeLine.RESPONSE:
            return state;
        case lessonCreate.REQUEST:
            return {
                ...state, visible: true,loading:false
            };
        case lessonActionSave.REQUEST:
            return {
                ...state,loading:true,
            };
        case lessonSubmitLoading.REQUEST:
            return {
                ...state,loading:false
            }
        case lessonClose.REQUEST:
            return {
                ...state, visible: false,
                loading:false,
                lesson:{
                    images:[],
                    category:'',
                    files:[],
                    videos:[],
                    audios:[],
                    tags:[],
                    price:0,
                    priceType:false,
                    title:'',
                    type_id:'',
                    child_category:'',
                    description:'',
                    status:'A',
                    thumbnail:{}
                },
            }
        case lessonTitle.REQUEST:
            console.log('ggggaaa');
            return {...state,
                lesson:{...state.lesson,
                    title:action.json
                }
            };
        case lessonDescription.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                    description:action.json
                }
            };
        case lessonCheckSuccess.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                    status:action.json
                }
            }
        case lessonPrice.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                    price:action.json,
                }
            };
        case lessonPrice1.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                price:action.json,
                priceType:false,
            }
        };
        case lessonActivePrice.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                priceType:true
            }
        };
        case lessonTag.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                    tags:action.json
                }
            };
        case lessonRemoveTag.REQUEST:
            var filtered = state.lesson.tags.filter(function(val){
                if(val==action.json){
                    return false;
                }else{
                    return true;
                }
            });
            return {...state,
                lesson:{...state.lesson,
                    tags:filtered
                }
            }
        case lessonCategory.REQUEST:
            var type_id = state.lesson.type_id;
            var child_category = state.lesson.child_category;
            if(action.json == ''){
                type_id='';
                child_category='';
            }
            return {...state,
                lesson:{...state.lesson,
                    category:action.json,
                    type_id:type_id,
                    child_category:child_category,
                }
            }
        case lessonChildCategory.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                    child_category:action.json
                }
            };
        case lessonType.REQUEST:
            return {...state,
                lesson:{...state.lesson,
                    type_id:action.json
                }
            };
        case lessoncloseModal.REQUEST:
            return {
                ...state, visible: false,lesson:{
                    images:[],
                    category:'',
                    files:[],
                    videos:[],
                    audios:[],
                    tags:[],
                    price:0,
                    title:'',
                    type_id:'',
                    child_category:'',
                    description:'',
                    status:'A',
                    thumbnail:{}
                }
            };
        case lessonUpload.REQUEST:
            if(action.mediaType == 'image'){
                return {...state,
                    lesson:{...state.lesson,
                        images:[...state.lesson.images,...[{loading:true,id:action.json.id}]]
                    }
                }
            }
            if(action.mediaType == 'file'){
                return {...state,
                    lesson:{...state.lesson,
                        files:[...state.lesson.files,...[{loading:true,id:action.json.id}]]
                    }
                }
            }
            if(action.mediaType == 'video'){
                return {...state,
                    lesson:{...state.lesson,
                        videos:[...state.lesson.videos,...[{loading:true,id:action.json.id}]]
                    }
                }
            }
            if(action.mediaType == 'audio'){
                return {...state,
                    lesson:{...state.lesson,
                        audios:[...state.lesson.audios,...[{loading:true,id:action.json.id}]]
                    }
                }
            }
            if(action.mediaType == 'lessonthumbnail'){
                return {...state,
                    lesson:{...state.lesson,
                        thumbnail:{loading:true,id:action.json.id}
                    }
                }
            }
            return state;
        case lessonUpload.RESPONSE:
            if(action.json.success){
                if(action.mediaType == 'image'){
                    return {...state,
                        lesson:{...state.lesson,
                            images:state.lesson.images.map((image, index) => {
                                if(image.id == action.json.id){
                                    return action.json.image
                                }
                                return image;
                            })
                        }
                    }
                }
                if(action.mediaType == 'file'){
                    return {...state,
                        lesson:{...state.lesson,
                            files:state.lesson.files.map((file, index) => {
                                if(file.id == action.json.id){
                                    return action.json.result
                                }
                                return file;
                            })
                        }
                    }
                }
                if(action.mediaType == 'video'){
                    return {...state,
                        lesson:{...state.lesson,
                            videos:state.lesson.videos.map((video, index) => {
                                if(video.id == action.json.id){
                                    return action.json.result
                                }
                                return video;
                            })
                        }
                    }
                }
                if(action.mediaType == 'audio'){
                    return {...state,
                        lesson:{...state.lesson,
                            audios:state.lesson.audios.map((audio, index) => {
                                if(audio.id == action.json.id){
                                    return action.json.result
                                }
                                return audio;
                            })
                        }
                    }
                }
                if(action.mediaType == 'lessonthumbnail'){
                    return {...state,
                        lesson:{...state.lesson,
                            thumbnail:action.json.image
                        }
                    }
                }
                return state;
            }else{
                if(action.mediaType == 'image'){
                    return {...state,
                        lesson:{...state.lesson,
                            images:state.lesson.images.filter(function(elm){
                                return (elm.id != action.json.id);
                            })
                        }
                    }
                }
                if(action.mediaType == 'file'){
                    return {...state,
                        lesson:{...state.lesson,
                            files:state.lesson.files.filter(function(elm){
                                return (elm.id != action.json.id);
                            })
                        }
                    }
                }
                if(action.mediaType == 'video'){
                    return {...state,
                        lesson:{...state.lesson,
                            videos:state.lesson.videos.filter(function(elm){
                                return (elm.id != action.json.id);
                            })
                        }
                    }
                }
                if(action.mediaType == 'audio'){
                    return {...state,
                        lesson:{...state.lesson,
                            audios:state.lesson.audios.filter(function(elm){
                                return (elm.id != action.json.id);
                            })
                        }
                    }
                }
                if(action.mediaType == 'lessonthumbnail'){
                    return {...state,
                        lesson:{...state.lesson,
                            thumbnail:{loading:false}
                        }
                    }
                }
                return state;
            }
        case lessonImageRemove.REQUEST:
            var filtered = state.lesson.images.filter(function(val){
                if(val._id == action.json.id){
                    return false;
                }else{
                    return true;
                }
            });
            return {...state,
                lesson:{...state.lesson,
                    images:filtered
                }
            };
        case lessonFileRemove.REQUEST:
            var filtered = state.lesson.files.filter(function(val){
                if(val._id == action.json.id){
                    return false;
                }else{
                    return true;
                }
            });
            return {...state,
                lesson:{...state.lesson,
                    files:filtered
                }
            };
        case lessonAudioRemove.REQUEST:
            var filtered = state.lesson.audios.filter(function(val){
                if(val._id == action.json.id){
                    return false;
                }else{
                    return true;
                }
            });
            return {...state,
                lesson:{...state.lesson,
                    audios:filtered
                }
            };
        case lessonVideoRemove.REQUEST:
            var filtered = state.lesson.videos.filter(function(val){
                if(val._id == action.json.id){
                    return false;
                }else{
                    return true;
                }
            });
            return {...state,
                lesson:{...state.lesson,
                    videos:filtered
                }
            };
        case lessonEdit.REQUEST:
            return state;
        case lessonEdit.RESPONSE:
            if(action.json.success){
                var priceType = false;
                if(action.json.result.price != 0){
                    priceType = true;
                }
                return {...state,
                    visible:true,
                    lesson:{...state.lesson,
                        _id:action.json.result._id,
                        images:action.json.result.images,
                        category:action.json.result.category,
                        files:action.json.result.files,
                        videos:action.json.result.videos,
                        audios:action.json.result.audios,
                        tags:action.json.result.tags,
                        price:action.json.result.price,
                        priceType:priceType,
                        title:action.json.result.title,
                        type_id:action.json.result.type_id,
                        child_category:action.json.result.child_category,
                        description:action.json.result.description,
                        status:action.json.result.status,
                        thumbnail:action.json.result.thumbnail
                    }
                };
            }else{
                return state;
            }
        case audioThumChange.REQUEST:
            return state;
        case audioThumChange.RESPONSE:
            if(action.json.success){
                return {...state,
                    lesson:{...state.lesson,
                        audios:state.lesson.audios.map((audio, index) => {
                            if(audio._id == action.json.id){
                                return action.json.image
                            }
                            return audio;
                        })
                    }
                }
                return state;
            }
        default:
            return state;
    }
}