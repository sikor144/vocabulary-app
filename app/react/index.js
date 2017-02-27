import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRReactRouter from 'rwr-react-router';

integrationsManager.register('react-router', RWRReactRouter.integrationWrapper);
RWR.run();

import VocabularySetsIndex from './components/vocabulary-sets-index';
import VocabularySetsShow from './components/vocabulary-sets-show';
import VocabularySetsNew from './components/vocabulary-sets-new';

import VocabularyApp from './routes';

RWR.registerComponent('VocabularySetsIndex', VocabularySetsIndex);
RWR.registerComponent('VocabularySetsShow', VocabularySetsShow)
RWR.registerComponent('VocabularySetsNew', VocabularySetsNew)

RWRReactRouter.register('MyRouter', VocabularyApp);
