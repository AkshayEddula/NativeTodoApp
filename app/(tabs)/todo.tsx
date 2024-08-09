import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TodoApp from '../..//components/TodoApp';
import SplashScreen from '../../components/SplashScreen';

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  return (
    <Provider store={store}>

      {isSplashVisible ? (
        <SplashScreen onFinish={() => setSplashVisible(false)} />
      ) : (
        <TodoApp />
      )}
    </Provider>
  );
}
