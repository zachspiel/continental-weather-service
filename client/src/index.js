import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.css';
import App from './app';

export default App;

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render;
  const render = (Component) =>
    renderMethod(<Component />, document.getElementById('root'));

  render(App);
}
