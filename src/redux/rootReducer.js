import { combineReducers } from 'redux';

import quiz from './reducer/quizReducer';
import user from './reducer/userReducer';

export default combineReducers({
    quiz,
    user
});
