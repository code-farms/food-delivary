/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
