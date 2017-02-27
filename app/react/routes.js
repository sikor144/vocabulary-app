import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

import App from './components/app';
import VocabularySetsIndex from './components/vocabulary-sets-index';
import VocabularySetsShow from './components/vocabulary-sets-show';
import VocabularySetsNew from './components/vocabulary-sets-new';
import TermsNew from './components/terms-new';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const VocabularyApp = props => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={VocabularySetsIndex} />
        <Route path="vocabulary_sets/new" component={VocabularySetsNew} />
        <Route path="vocabulary_sets/:id" component={VocabularySetsShow} />
        <Route path="vocabulary_sets/:id/new_term" component={TermsNew} />
      </Route>
    </Router>
  </Provider>
);

export default VocabularyApp;
