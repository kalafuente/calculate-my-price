import React from 'react';
import configureStore from '../store';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme/Theme';
import withRedux from 'next-redux-wrapper/lib'
import './index.css';
import withReduxSaga from 'next-redux-saga'

function App({ Component, pageProps, store }) {
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Provider>
}

App.getInitialProps = async (context): Promise<any> => {
    const store = context.ctx.store;
    //esto serviría si quiero traer algo desde el servidor, con info de alguna api,
    //como no necesito no mando nada
    return { store };
}

export default withRedux(configureStore)(withReduxSaga(App))