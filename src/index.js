/**
 * Created by battumur on 11/4/2016.
 */
import * as tActions from './actions/timeLineActions';
import * as rds from './reducers';
import reduxConf from './reduxConfig';
// GANZORIG START
import * as userAction from './actions/userActions';
import * as lAction from './actions/lessonAction';
import * as cAction from './actions/categoryAction';
import * as pAction from './actions/paymentAction';
import * as spAction from './actions/singlePostAction';
import * as lpAction from './actions/lessonSingleAction';
import * as tpAction from './actions/singleTestAction';
import * as sfAction from './actions/suggestFriendAction';
import * as sgAction from './actions/suggestGroupAction';
import * as lessUserAction from './actions/lessonUserAction';
import * as notiAction from './actions/NotificationAction';
import * as msgAction from './actions/messagesAction';
import * as ba from './actions/balanceActions';
import * as mcht from './actions/mainChatAction';
// GANZORIG END

// NANDUK START
import * as searchActions from './actions/searchActions';
import * as groupActions from './actions/groupActions';
import * as groupSingleActions from './actions/groupSingleActions';
import * as groupMemberApproves from './actions/groupMemberApprove';
import * as groupMemberBlocks from './actions/groupMemberBlock';
import * as groupMemberPendings from './actions/groupMemberPending';
import * as chatActions from './actions/chatActions';
import * as supportActions from './actions/supportActions';
import * as userChargers from './actions/userCharger';
import * as leaderBoardActions from './actions/leaderBoardAction';
import * as helperActions from './actions/helperAction';
// LKHAGVA START
import * as profileActions from './actions/profileActions';
import * as frdAction from './actions/friendAction';
import * as frdRqAction from './actions/friendRequestsAction';
import * as aAction from './actions/aboutAction';
import * as sttAction from './actions/settingsAction';
import * as phtoAction from './actions/photoAction';
// LKHAGVA END

// ARIUK START
import * as frdsAction from './actions/friendAction';
//ARIUK END


export default  rds;
export const reducers = rds;
export const reduxConfig = reduxConf;
// GANZORIG START
export const userActions = userAction;
export const timeLineActions = tActions;
export const lessonActions = lAction;
export const categoryAction = cAction;
export const paymentActions = pAction;
export const singlePostAction = spAction;
export const lessonSingleAction = lpAction;
export const singleTestActions = tpAction;
export const suggestFriendAction = sfAction;
export const suggestGroupAction = sgAction;
export const lessonUserAction = lessUserAction;
export const notification_action = notiAction;
export const msg_action = msgAction;
export const balanceAction = ba;
export const mainChatAction = mcht;
// GANZORIG END

//NANDUK START
export const searchAction = searchActions;
export const groupAction = groupActions;
export const groupSingleAction = groupSingleActions;
export const groupMemberApprove =  groupMemberApproves;
export const groupMemberBlock =  groupMemberBlocks;
export const groupMemberPending =  groupMemberPendings;
export const chatAction = chatActions;
export const supportAction = supportActions;
export const userCharger = userChargers;
export const leaderBoard = leaderBoardActions;
export const helperAction = helperActions;
//NANDUK END


//LKHAGVA START
export const profileAction = profileActions;
export const friendAction = frdAction;
export const friendRequestsAction = frdRqAction;
export const aboutAction = aAction;
export const settingsAction = sttAction;
export const photoAction = phtoAction;
//LKHAGVA END

export const userUpdate = require("./actions/userUpdate");