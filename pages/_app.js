import '../styles/globals.css'
import 'animate.css';
import 'material-icons/iconfont/material-icons.css';
import store from "../components/store";
import {Provider} from "react-redux";
import PropTypes from 'prop-types';

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

function  MyApp({ Component, pageProps }) {
  const design = (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
  return design;
}

export default MyApp
