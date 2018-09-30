import React, { Component, Children } from 'react';
import { createStore, applyMiddleware, compose as defaultCompose} from 'redux';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import reducer from '../../reducers';

const FILTER_KEY = 'season-explorer-filters';

// Allow the same filters to remain when the page gets refreshed
const saveFilterMiddleware = store => next => action => {
  // dispatch action
  next(action);
  // save filters
  if (action.type !== '@@INIT') {
    const filters = store.getState().filters;
    Cookie.set(FILTER_KEY, JSON.stringify(filters));
  }
}

export default class ReduxStore extends Component {
  getInitialState() {
    try {
      return {
        filters: JSON.parse(Cookie.get(FILTER_KEY))
      };
    } catch(e) {
      return {};
    }
  }

  render() {
    const compose = (typeof window !== "undefined"
                          && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
                    || defaultCompose;
    const store = createStore(
      reducer,
      this.getInitialState(),
      compose(applyMiddleware(saveFilterMiddleware))
    );
    return (
      <Provider store={store}>
        {Children.only(this.props.children)}
      </Provider>
    );
  }
}
