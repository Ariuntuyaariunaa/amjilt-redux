/**
 * Created by aggressor on 1/6/17.
 */
//ganzorig START
export const fetchTimeLine = {
    REQUEST:'FETCH_TIMELINE',
    RESPONSE:'FETCH_TIMELINE_RESPONSE'
};
export const postTimeLine = {
    REQUEST:'POST_TIMELINE',
    RESPONSE:'POST_TIMELINE_RESPONSE'
};
export const userLogin = {
    REQUEST:'LOGIN_REQUEST',
    RESPONSE:'LOGIN_SUCCESS'
};
export const timeLineComment = {
    REQUEST:'COMMENT_REQUEST',
    RESPONSE:'COMMENT_REQUEST_SUCCESS'
};
export const fetchTimeLike = {
    REQUEST:'LIKE_REQUEST',
    RESPONSE:'LIKE_REQUEST_SUCCESS'
};
export const timeLineReport = {
    REQUEST:'REPORT_REQUEST',
    RESPONSE:'REPORT_SUCCESS'
};
export const timeLineRemove = {
    REQUEST:'REMOVE_REQUEST',
    RESPONSE:'REMOVE_SUCCESS'
};
export const timeLinePostImage = {
    REQUEST:'UPLOAD_REQUEST',
    RESPONSE:'UPLOAD_SUCCESS'
};
export const timeLinePostSave = {
    REQUEST:'POST_REQUEST',
    RESPONSE:'POST_SUCCESS'
};
export const editPost = {
    REQUEST:'EDIT_POST_REQUEST1',
    RESPONSE:'EDIT_POST_RESPONSE1'
};
export const timeLineImageRemove = {
    REQUEST:'UPLOAD_IMAGE_REMOVE'
};
export const timeLinePostEdit = {
    REQUEST:'POST_EDIT_REQUEST',
    RESPONSE:'POST_EDIT_SUCCESS'
};
export const timeLinePostEditSave = {
    REQUEST:'POST_EDIT_SAVE_REQUEST',
    RESPONSE:'POST_EDIT_SAVE_SUCCESS'
};
export const fetchCategory = {
    REQUEST:'CATEGORY_REQUEST',
    RESPONSE:'CATEGORY_SUCCESS'
};
export const lessonCreate = {
    REQUEST:'CLESSON_CREATE',
};
export const lessoncloseModal = {
    REQUEST:'CLESSON_MODEL_CLOSE',
};
export const lessonTitle = {
    REQUEST:'LESSON_TITLE'
};
export const lessonDescription = {
    REQUEST:'LESSON_DESCRIPTION'
};
export const lessonCheckSuccess = {
    REQUEST:'LESSON_CHECK'
};
export const lessonPrice = {
    REQUEST:'LESSON_PRICE_EDIT'
};
export const lessonTag = {
    REQUEST:'LESSON_TAG_CHANGE'
};
export const lessonRemoveTag = {
    REQUEST:'LESSON_TAG_REMOVE'
};
export const lessonCategory = {
    REQUEST:'LESSON_CATEGORY'
};
export const lessonChildCategory = {
    REQUEST:'LESSON_CHILD_CATEGORY'
};
export const lessonType = {
    REQUEST:'LESSON_TYPE'
};
export const lessonUpload = {
    REQUEST:'LESSON_UPLOAD',
    RESPONSE:'LESSON_UPLOAD_SUCCESS'
};
export const lessonImageRemove = {
    REQUEST:'LESSON_IMAGE_REMOVE'
};
export const lessonFileRemove = {
    REQUEST:'LESSON_FILE_REMOVE'
};
export const lessonAudioRemove = {
    REQUEST:'LESSON_AUDIO_REMOVE'
};
export const lessonActivePrice = {
    REQUEST:'LESSON_PRICE_ACTIVE'
};
export const lessonPrice1 = {
    REQUEST:'LESSON_PRICE_A1'
};
export const lessonVideoRemove = {
    REQUEST:'LESSON_VIDEO_REMOVE'
};
export const lessonActionSave = {
    REQUEST:'LESSON_SAVE_REQUEST',
    RESPONSE:'LESSON_SAVE_RESPONSE'
};
export const lessonEdit = {
    REQUEST:'LESSON_EDIT',
    RESPONSE:'LESSON_EDIT_RESPONSE'
};
export const audioThumChange = {
    REQUEST:'LESSON_AUDIO_EDIT',
    RESPONSE:'LESSON_EDIT_AUDIO_RESPONSE'
};
export const purchaseConst = {
    REQUEST:'PAYMENT_REQUEST',
    RESPONSE:'PAYMENT_REQUEST_SUCCESS'
};
export const inputComploate = {
    REQUEST:'POST_COMPLETE_REMOVE'
};
export const timeLineSharePost = {
    REQUEST:'TIMELINE_SHARE_REQUEST',
    RESPONSE:'TIMELINE_SHARE_SUCCESS'
};
export const timeLineShareRemove = {
    REQUEST:'TIMELINE_SHARE_REMOVE_REQUEST',
    RESPONSE:'TIMELINE_SHARE_REMOVE_SUCCESS'
};
export const timeLineClear = {
    REQUEST:'TIMELINE_CLEAR_REQUEST',
};
export const singlePost = {
    REQUEST:'SINGLE_POST_REQUEST',
    RESPONSE:'SINGLE_POST_SUCCESS',
};
export const singleLesson = {
    REQUEST:'SINGLE_LESSON_REQUEST',
    RESPONSE:'SINGLE_LESSON_SUCCESS',
};
export const timeLineRstorePost = {
    REQUEST:'RSTORE_REQUEST',
    RESPONSE:'RSTORE_SUCCESS',
};
export const fetchTest = {
    REQUEST:'TEST_REQUEST',
    RESPONSE:'TEST_SUCCESS',
};
export const timeLineMoreComment = {
    REQUEST:'MORE_COMMENT_REQUEST',
    RESPONSE:'MORE_COMMENT_SUCCESS',
};
export const suggestFriend = {
    REQUEST:'SUGGEST_FRIENDS_REQUEST',
    RESPONSE:'SUGGEST_FRIENDS_SUCCESS',
};
export const suggestGroups = {
    REQUEST:'SUGGEST_GROUP_REQUEST',
    RESPONSE:'SUGGEST_GROUP_SUCCESS',
};
export const fetchLessonUsers = {
    REQUEST:'LESSON_USERS_REQUEST',
    RESPONSE:'LESSON_USERS_SUCCESS',
};
export const fetchNotification = {
    REQUEST:'NOTIFICATION_REQUEST',
    RESPONSE:'NOTIFICATION_SUCCESS',
};
export const fetchFriendRequestNotification = {
    REQUEST:'FRIEND_REQ_NOTIFICATION_REQUEST',
    RESPONSE:'FRIEND_REQ_NOTIFICATION_SUCCESS',
};
export const fetchFriendReqNotificationGetCount = {
    REQUEST:'FRIEND_REQ_NOTIFICATION_COUNT_REQUEST',
    RESPONSE:'FRIEND_REQ_NOTIFICATION_COUNT_SUCCESS',
};
export const fetchNotificationClear = {
    REQUEST:'NOTIFICATION_CLEAR',
};
export const headerMessages = {
    REQUEST:'HEADER_MESSAGES_REQUEST',
    RESPONSE:'HEADER_MESSAGES_SUCCESS',
};
export const fetchBalance = {
    REQUEST:'BALANCE_REQUEST',
    RESPONSE:'BALANCE_SUCCESS',
};
export const requestFriendList = {
    REQUEST : 'FRIEND_LIST_REQUEST',
    RESPONSE : 'FRIEND_LIST_RESPONSE'
}

export const fetchMessages = {
    REQUEST : 'FETCH_MESSAGES_REQUEST',
    RESPONSE : 'FETCH_MESSAGES_RESPONSE'
};

export const fetchMessagesMore = {
    REQUEST : 'FETCH_MESSAGES_REQUEST_MORE',
    RESPONSE : 'FETCH_MESSAGES_RESPONSE_MORE'
};

export const receiveChannel = {
    REQUEST : 'RECEIVE_CHANNEL_REQUEST',
};

export const receiveMessage = {
    REQUEST : 'RECEIVE_CHAT_MESSAGE_REQUEST',
    RESPONSE : 'RECEIVE_CHAT_MESSAGE_RESPONSE'
};

export const onNotificationReceived = {
    REQUEST : 'ON_NOTIFICATION_REQUEST',
    RESPONSE : 'ON_NOTIFICATION_RESPONSE'
};

export const closeChannel = {
    REQUEST : 'CLOSE_CHANNEL_REQUEST',
};
export const messagesUser = {
    REQUEST : 'GET_MESSAGE_USER_REQUEST',
    RESPONSE : 'GET_MESSAGE_USER_RESPONSE'
};
export const messagesUserMessages = {
    REQUEST : 'GET_MESSAGE_USER_FULL_REQUEST',
    RESPONSE : 'GET_MESSAGE_USER_FULL_RESPONSE'
};
export const messagesUserMessagesMore = {
    REQUEST : 'GET_MESSAGE_USER_FULL_REQUEST_MORE',
    RESPONSE : 'GET_MESSAGE_USER_FULL_RESPONSE_MORE'
};
export const msgRemoveOne = {
    REQUEST : 'MESSAGE_REMOVE_REQUEST',
    RESPONSE : 'MESSAGE_REMOVE_RESPONSE'
};
export const receiveFullMessage = {
    REQUEST : 'MESSAGE_FULL_REQUEST',
};
export const allMsgRemove = {
    REQUEST : 'ALL_MESSAGE_REMOVE_REQUEST',
    RESPONSE : 'ALL_MESSAGE_REMOVE_RESPONSE'
};
export const searchMsgUser = {
    REQUEST : 'MESSAGE_SEARCH_USER_REQUEST',
    RESPONSE : 'MESSAGE_SEARCH_USER_RESPONSE'
};
export const fetchNotificationNew = {
    REQUEST : 'NEW_NOTIFICATION',
};
export const fetchNotificationCount = {
    REQUEST : 'NEW_NOTIFICATION_REQUEST',
    RESPONSE : 'NEW_NOTIFICATION_RESPONSE'
};
export const lessonClose = {
    REQUEST : 'LESSON_MODEL_CLOSE',
};
export const lessonSubmitLoading = {
    REQUEST : 'LESSON_LOADING_TYPE',
};
export const mediaMemoSave = {
    REQUEST : 'MEDIA_MEMO_SAVE',
    RESPONSE : 'MEDIA_MEMO_SAVE_SUCCESS',
};
export const audioMemo = {
    REQUEST : 'AUDIO_MEMO_REQUEST',
    RESPONSE : 'AUDIO_MEMO_RESPONSE',
};
export const audioMemoClose = {
    REQUEST : 'AUDIO_MEMO_CLOSE',
};
export const getVideoMemo = {
    REQUEST : 'MEDIA_VIDEO_MEMO_SAVE',
    RESPONSE : 'MEDIA_VIDEO_MEMO_SAVE_SUCCESS',
};
export const videoMemoClose = {
    REQUEST : 'VIDEO_MEMO_CLOSE',
    RESPONSE : 'VIDEO_MEMO_CLOSE_SUCCESS',
};
export const removeDeleteMemo = {
    REQUEST : 'REMOVE_DELETE_MEMO_REQUEST',
    RESPONSE : 'REMOVE_DELETE_MEMO_RESPONSE',
};
//ganzorig END

//nanduk START
export const fetchProfile = {
    REQUEST:'LOAD_PROFILE',
    RESPONSE:'LOAD_PROFILE_SUCCESS'
}

export const fetchSearch = {
    REQUEST:'LOAD_SEARCH',
    RESPONSE:'LOAD_SEARCH_SUCCESS'
}
export const fetchSearchRecent = {
    REQUEST:'LOAD_SEARCH_RECENT',
    RESPONSE:'LOAD_SEARCH_RECENT_SUCCESS'
}
export const fetchSearchRecentreq = {
    REQUEST:'LOAD_SEARCH_RECENT_REQ',
    RESPONSE:'LOAD_SEARCH_RECENT_REQ_SUCCESS'
}
export const fetchPageSearch = {
    REQUEST:'LOAD_SEARCH_PAGE',
    RESPONSE:'LOAD_SEARCH_PAGE_SUCCESS'
}
export const fetchPageSearchfull = {
    REQUEST:'LOAD_SEARCH_PAGEFULL',
    RESPONSE:'LOAD_SEARCH_PAGEFULL_SUCCESS'
}

export const fetchGroup = {
    REQUEST:'LOAD__USER_GROUPS',
    RESPONSE:'LOAD_USER_GROUPS_SUCCESS'
}

export const cancellationGroup = {
    REQUEST: 'LOAD_CANCELLATION_GROUP',
    RESPONSE: 'LOAD_CANCELLATION_GROUP_SUCCESS'
}

export const fetchGroupSingle = {
    REQUEST:'LOAD_GROUP_SINGLE',
    RESPONSE:'LOAD_GROUP_SINGLE_SUCCESS'
}

export const fetchSlugGroup = {
    REQUEST: 'LOAD_SLUG_GROUP',
    RESPONSE: 'LOAD_SLUG_GROUP_SUCCESS'
}

export const fetchEditGroup = {
    REQUEST: 'LOAD_EDIT_GROUP',
    RESPONSE: 'LOAD_EDIT_GROUP_SUCCESS'
}

export const changeTypeGroup = {
    REQUEST: 'LOAD_EDIT_TYPE',
    RESPONSE: 'LOAD_EDIT_TYPE_SUCCESS'
}

export const fetchRemoveGroup = {
    REQUEST: 'LOAD_REMOVE_GROUP',
    RESPONSE: 'LOAD_REMOVE_GROUP_SUCCESS'
}

export const fetchMemberRequestGroup = {
    REQUEST: 'LOAD_REQUEST_GROUP',
    RESPONSE: 'LOAD_REQUEST_GROUP_SUCCESS'
}

export const uploadImage = {
    REQUEST: 'PROFILE_IMAGE_UPLOAD_REQUEST',
    RESPONSE: 'PROFILE_IMAGE_UPLOAD_SUCCESS'
}

export const fetchSingleGroupCoverSave = {
    REQUEST: 'COVER_IMAGE_SAVE_REQUEST',
    RESPONSE: 'COVER_IMAGE_SAVE_SUCCESS'
}

export const searchMember = {
    REQUEST: 'GROUP_USER_GROUP_SUBMIT',
    RESPONSE: 'GROUP_USER_GROUP_SUCCESS'
}

export const groupAddUser = {
    REQUEST: 'GROUP_USER_GROUP_ADD_SUBMIT',
    RESPONSE: 'GROUP_USER_GROUP_ADD_SUCCESS'
}

export const fetchLeaveGroup = {
    REQUEST: 'LOAD_LEAVE_GROUP',
    RESPONSE: 'LOAD_LEAVE_GROUP_SUCCESS'
}

export const membersGroupApprove = {
    REQUEST: 'LOAD_GROUP_APPROVE_MEMBERS',
    RESPONSE: 'LOAD_GROUP_APPROVE_MEMBERS_SUCCESS'
}

export const membersMoreGroupApprove = {
    REQUEST: 'LOAD_GROUP_APPROVE_MEMBERS_MORE',
    RESPONSE: 'LOAD_GROUP_APPROVE_MEMBERS_MORE_SUCCESS'
}

export const approveGroupAction = {
    REQUEST: 'LOAD_BLOCK_APPROVE_ACTION',
    RESPONSE: 'LOAD_GROUP_APPROVE_ACTION_SUCCESS'
}

export const membersGroupBlock = {
    REQUEST: 'LOAD_GROUP_BLOCK_MEMBERS',
    RESPONSE: 'LOAD_GROUP_BLOCK_MEMBERS_SUCCESS'
}

export const blockGroupAction = {
    REQUEST: 'LOAD_BLOCK_PENDING_ACTION',
    RESPONSE: 'LOAD_GROUP_BLOCK_ACTION_SUCCESS'
}

export const membersGroupBlockMore = {
    REQUEST: 'LOAD_GROUP_BLOCK_MEMBERS_MORE',
    RESPONSE: 'LOAD_GROUP_BLOCK_MEMBERS_MORE_SUCCESS'
}

export const membersGroupPending = {
    REQUEST: 'LOAD_GROUP_PENDING_MEMBERS',
    RESPONSE: 'LOAD_GROUP_PENDING_MEMBERS_SUCCESS'
}

export const membersGroupPendingMore = {
    REQUEST: 'LOAD_GROUP_PENDING_MEMBERS_MORE',
    RESPONSE: 'LOAD_GROUP_PENDING_MEMBERS_MORE_SUCCESS'
}

export const pendingGroupAction = {
    REQUEST: 'LOAD_GROUP_PENDING_ACTION',
    RESPONSE: 'LOAD_GROUP_PENDING_ACTION_SUCCESS'
}

export const fetchTotalGroup = {
    REQUEST : 'LOAD_TOTAL_GROUPS',
    RESPONSE : 'LOAD_TOTAL_GROUPS_SUCCESS'
}

export const postGroup = {
    REQUEST : 'POST_GROUP_SUBMIT',
    RESPONSE : 'POST_GROUP_SUCCESS'
}

export const fetchSuggestGroup = {
    REQUEST : 'LOAD_SUGGEST_GROUP',
    RESPONSE : 'LOAD_SUGGEST_GROUP_SUCCESS'
}

export const fetchUserSupports = {
    REQUEST : 'LOAD_USER_SUPPORTS',
    RESPONSE : 'LOAD_USER_SUPPORTS_SUCCESS'
}

export const fetchSupportSingle = {
    REQUEST : 'LOAD_USER_SUPPORTS_SINGLE',
    RESPONSE : 'LOAD_USER_SUPPORTS_SINGLE_SUCCESS'
}

export const supportCom = {
    REQUEST : 'LOAD_USER_SUPPORTS_COM',
    RESPONSE : 'LOAD_USER_SUPPORTS_COM_SUCCESS'
}

export const supportInbox = {
    REQUEST : 'LOAD_SUPPORT_INBOX',
    RESPONSE : 'LOAD_SUPPORT_INBOX_SUCCESS'
}

export const fetchGroupManaged = {
    REQUEST : 'LOAD_GROUP_MANAGED',
    RESPONSE : 'LOAD_GROUP_MANAGED_SUCCESS'
}

export const fetchGroupJoined = {
    REQUEST : 'LOAD_GROUP_JOINED',
    RESPONSE : 'LOAD_GROUP_JOINED_SUCCESS'
}

export const fetchGroupPending = {
    REQUEST : 'LOAD_GROUP_PENDING',
    RESPONSE : 'LOAD_GROUP_PENDING_SUCCESS'
}

export const userReport = {
    REQUEST : 'USER_REPORT_SUBMIT',
    RESPONSE: 'USER_REPORT_SUCCESS',
}

export const GROUP_USER_GROUP_CLOSE = 'GROUP_USER_GROUP_CLOSE';

export const groupUploadImage = {
    REQUEST : 'COVER_IMAGE_UPLOAD_REQUEST',
    RESPONSE : 'COVER_IMAGE_UPLOAD_SUCCESS'
}
export const fetchSaveLesson = {
    REQUEST : 'REQUEST_SAVE_POST',
    RESPONSE : 'REQUEST_SAVE_SUCCESS'
}

export const groupReport = {
    REQUEST : 'REQUEST_GROUP_REPORT',
    RESPONSE : 'REQUEST_GROUP_REPORT_SUCCESS'
}

export const grmo = {
    REQUEST : 'GROUP_REPORT_MODAL_OPEN',
}
export const grmc = {
    REQUEST : 'GROUP_REPORT_MODAL_CLOSE',
}

export const smo = {
    REQUEST : 'SUPPORT_REPORT_MODAL_OPEN',
}
export const smc = {
    REQUEST : 'SUPPORT_REPORT_MODAL_CLOSE',
}

export const urmo = {
    REQUEST : 'USER_REPORT_MODAL_OPEN',
}
export const urmc = {
    REQUEST : 'USER_REPORT_MODAL_CLOSE',
}

export const wrmo = {
    REQUEST : 'WALL_REPORT_MODAL_OPEN',
}
export const wrmc = {
    REQUEST : 'WALL_REPORT_MODAL_CLOSE',
}
export const fetchCharger = {
    REQUEST: 'USER_CHARGER_REQUEST',
    RESPONSE: 'USER_CHARGER_SUCCESS'
}
export const userChargeAdd = {
    REQUEST: 'USER_CHARGER_ADD_REQUEST',
    RESPONSE: 'USER_CHARGER_ADD_SUCCESS'
}
export const cmo = {
    REQUEST: 'CHARGE_MODAL_OPEN',
}
export const cmc = {
    REQUEST: 'CHARGE_MODAL_CLOSE',
}
export const fetchBoard = {
    REQUEST: 'LEADER_BOARD_REQUEST',
    RESPONSE: 'LEADER_BOARD_RESPONSE'
}
export const hmo = {
    REQUEST: 'HELPER_MODAL_OPEN',
}
export const hmc = {
    REQUEST: 'HELPER_MODAL_CLOSE',
}
export const stepStart = {
    REQUEST: 'STEP_START',
}
export const stepFirst = {
    REQUEST: 'STEP_FIRST',
    RESPONSE: 'STEP_FIRST_READY',
}
export const stepSecond = {
    REQUEST: 'STEP_SECOND',
    RESPONSE: 'STEP_SECOND_READY'
}
export const stepThird = {
    REQUEST: 'STEP_THIRD',
}
export const addLocation= {
    REQUEST: 'ADD_LOCATION',
    RESPONSE: 'ADD_LOCATION_SUCCESS'
}
export const fetchMessagesGetCount = {
    REQUEST: 'HEADER_MSG_COUNT',
    RESPONSE: 'HEADER_MSG_COUNT_SUCCESS'
}
//nanduk END

//lkhavga START
export const getEducations = {
    REQUEST:'USER_EDUCATIONS_REQUEST',
    RESPONSE:'REQUEST_USER_EDUCATIONS_SUCCESS'
}
export const addEbc = {
    REQUEST:'USER_EDUCATIONS_EBC_REQUEST',
    RESPONSE:'REQUEST_USER_EDUCATIONS_EBC_SUCCESS',
    RESPONSE1:'REQUEST_USER_EDUCATIONS_EBC_EDIT_SUCCESS'
}
export const addHigh = {
    REQUEST:'USER_EDUCATIONS_HIGH_REQUEST',
    RESPONSE:'REQUEST_USER_EDUCATIONS_HIGH_SUCCESS',
    RESPONSE1:'REQUEST_USER_EDUCATIONS_HIGH_EDIT_SUCCESS'
}
export const addWork = {
    REQUEST:'USER_EDUCATIONS_WORK_REQUEST',
    RESPONSE:'REQUEST_USER_EDUCATIONS_WORK_SUCCESS',
    RESPONSE1:'REQUEST_USER_EDUCATIONS_WORK_EIDT_SUCCESS'
}
export const fetchDeleteEbc = {
    REQUEST:'USER_EDUCATIONS_EBC_DELETE_REQUEST',
    RESPONSE:'USER_EDUCATIONS_EBC_DELETE_REQUEST',
}
export const fetchDeleteHigh = {
    REQUEST:'USER_EDUCATIONS_HIGH_DELETE_REQUEST',
    RESPONSE:'REQUEST_USER_EDUCATIONS_HIGH_DELETE_SUCCESS',
}
export const fetchDeleteWork = {
    REQUEST:'USER_EDUCATIONS_WORK_DELETE_REQUEST',
    RESPONSE:'REQUEST_USER_EDUCATIONS_WORK_DELETE_SUCCESS',
}
export const fetchSlugUser = {
    REQUEST:'LOAD_USER_GROUP',
    RESPONSE:'LOAD_SLUG_USER_SUCCESS',
}
export const getBank = {
    REQUEST:'USER_BANK_REQUEST',
    RESPONSE:'REQUEST_USER_BANK_SUCCESS',
}
export const getSettings = {
    REQUEST:'USER_SETTINGS_REQUEST',
    RESPONSE:'REQUEST_USER_SETTINGS_SUCCESS',
}
export const changePhone = {
    REQUEST:'REQUEST_USER_PHONE_CHANGE_SUCCESS',
}
export const changeBirthday = {
    REQUEST:'REQUEST_USER_BIRTHDAY_CHANGE_SUCCESS',
}
export const changeGander = {
    REQUEST:'REQUEST_USER_GANDER_CHANGE_SUCCESS',
}
export const changeBank = {
    REQUEST:'REQUEST_USER_BANK_NAME_SUCCESS',
}
export const changeBankNumber = {
    REQUEST:'REQUEST_USER_BANK_NUMBER_SUCCESS',
}
export const addBank = {
    REQUEST:'LOAD_SETTINGS_SUBMIT',
    RESPONSE:'LOAD_SETTINGS_SUCCESS',
}
export const addName = {
    REQUEST:'USER_NAME_REQUEST',
    RESPONSE:'REQUEST_USER_NAME_SUCCESS',
}
export const addBday = {
    REQUEST:'USER_BDAY_REQUEST',
    RESPONSE:'REQUEST_USER_BDAY_SUCCESS',
    RESPONSE1:'REQUEST_USER_GANDER_SUCCESS',
}
export const addPhone = {
    REQUEST:'USER_PHONE_REQUEST',
    RESPONSE:'REQUEST_USER_PHONE_SUCCESS',
}
export const userPassword = {
    REQUEST:'LOAD_PASSWORD_SUBMIT',
    RESPONSE:'LOAD_PASSWORD_SUCCESS',
}
export const addSlug = {
    REQUEST:'USER_NAME_REQUEST',
    RESPONSE:'LOAD_SETTINGS_PROFILE_SLUG_SUCCESS',
    RESPONSE1:'LOAD_SETTINGS_PROFILE_SLUG_DATE_SUCCESS',
}
export const mutalFriends = {
    REQUEST:'REQUEST_MUTAL_FRIEND_LIST',
    RESPONSE:'REQUEST_MUTAL_FRIEND_LIST_SUCCESS',
}
export const fetchFriendList = {
    REQUEST:'REQUEST_FRIEND_LIST',
    RESPONSE:'REQUEST_FRIEND_LIST_SUCCESS',
}
export const fetchFriendListMore = {
    REQUEST:'REQUEST_FRIEND_LIST_MORE',
    RESPONSE:'REQUEST_FRIEND_LIST_MORE_SUCCESS',
}
export const fetchFriendRemove = {
    REQUEST:'REQUEST_FRIEND_REMOVE',
    RESPONSE:'REQUEST_FRIEND_REMOVE_SUCCESS',
}
export const uploadAvatar = {
    REQUEST:'PROFILE_AVATAR_UPLOAD_REQUEST',
    RESPONSE:'PROFILE_AVATAR_UPLOAD_SUCCESS',
}
export const fetchUserAvatarSave = {
    REQUEST:'USER_AVATAR_SAVE_REQUEST',
    RESPONSE:'USER_AVATAR_SAVE_SUCCESS',
}
export const fetchPhotos = {
    REQUEST:'LOAD_USER_PHOTOS',
    RESPONSE:'LOAD_USER_PHOTOS_SUCCESS',
}
export const fetchAvatars = {
    REQUEST:'LOAD_USER_AVATARS',
    RESPONSE:'LOAD_USER_AVATARS_SUCCESS',
}
export const fetchCovers = {
    REQUEST:'LOAD_USER_COVERS',
    RESPONSE:'LOAD_USER_COVERS_SUCCESS',
}
export const fetchBusinessCheck = {
    REQUEST:'LOAD_BUSINESS',
    RESPONSE:'LOAD_BUSINESS_SUCCESS',
}
export const fetchTeacherRequest = {
    REQUEST:'TEACHER_REQUEST_LOADING',
    RESPONSE:'TEACHER_REQUEST_SUCCESS',
}
export const fetchOrlogo = {
    REQUEST:'USER_ORLOGO_REQUEST',
    RESPONSE:'REQUEST_USER_ORLOGO_SUCCESS',
}
export const friendAction = {
    REQUEST:'REQUEST_FRIEND',
    RESPONSE:'REQUEST_FRIEND_SUCCESS',
}
export const fetchFriendRequest = {
    REQUEST:'REQUEST_FRIEND_REQUEST',
    RESPONSE:'REQUEST_FRIEND_REQUEST_SUCCESS',
}

export const requestsClear = {
    REQUEST:'FRIEND_REQUESTS_CLEAR'
};
export const checkFriendship = {
    REQUEST:'REQUEST_FRIEND_SHIP',
    RESPONSE:'REQUEST_FRIEND_SHIP_SUCCESS',
    RESPONSE1:'REQUEST_FRIEND_SHIP_ID_SUCCESS',
}
export const userVerify = {
    REQUEST:'LOAD_VERIFY_SUBMIT',
    RESPONSE:'LOAD_VERIFY_SUCCESS',
}
export const userRegister = {
    REQUEST:'LOAD_REGISTER_SUBMIT',
    RESPONSE:'LOAD_REGISTER_SUCCESS',
}
export const resetPassword = {
    REQUEST:'LOAD_RESET_SUBMIT',
    RESPONSE:'LOAD_RESET_SUCCESS',
}
export const follow = {
    REQUEST:'REQUEST_FOLLOW',
    RESPONSE:'REQUEST_FOLLOW_SUCCESS',
}
//lkhavga END
//ariuk START

//ariuk END
//uugan START
export const fetchTimeLineAlt = {
    REQUEST:"FETCH_TIMELINE_MOBILE",
    RESPONSE:"FETCH_TIMELINE_MOBILE_RES",
};
export const fetchNotificationAlt = {
    REQUEST:"FETCH_NOTIFIC_MOBILE",
    RESPONSE:"FETCH_NOTIFIC_MOBILE_RES",
};
export const fetchGroupClear = {
    REQUEST:'CLEAR_USER_GROUPS',
};
export const fetchTotalGroupClear = {
    REQUEST:'CLEAR_TOTAL_GROUP_LIST',
};
export const fetchGroupJoinedClear = {
    REQUEST:'CLEAR_JOINED_GROUP_LIST',
};
export const fetchGroupManagedClear = {
    REQUEST:'CLEAR_MANAGED_GROUP_LIST',
};
export const fetchGroupPendingClear = {
    REQUEST:'CLEAR_PENDING_GROUP_LIST',
};
export const fetchPageSearchUser = {
    REQUEST:"SEARCHEES_USER_AVIIYAA",
    RESPONSE:"SEARCH_USER_TNX",
};
export const fetchPageSearchGroup = {
    REQUEST:"SEARCHEES_GROUP_AVIIYAA",
    RESPONSE:"SEARCH_GROUP_TNX",
};
export const fetchPageSearchLesson = {
    REQUEST:"SEARCHEES_LESSON_AVIIYAA",
    RESPONSE:"SEARCH_LESSON_TNX",
};
export const fetchPageSearchTest = {
    REQUEST:"SEARCHEES_TEST_AVIIYAA",
    RESPONSE:"SEARCH_TEST_TNX",
};
export const fetchPageSearchPost = {
    REQUEST:"SEARCHEES_POST_AVIIYAA",
    RESPONSE:"SEARCH_POST_TNX",
};
export const fetchPageSearchClear = {
    REQUEST:"SEARCH_PAGE_LIST_DEL",
};
export const updateUserData = {
    REQUEST:"FETCH_NEW_USER_DATA",
    RESPONSE:"FETCH_NEW_USER_DATA_SUCCESS",
};
//uugan END