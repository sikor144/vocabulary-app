import { combineReducers } from 'redux';
import VocabularySetsReducer from './vocabulary-sets';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  sets: VocabularySetsReducer,
  form: formReducer
});

export default rootReducer;
