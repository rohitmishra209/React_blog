import * as React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from "./components/app/reducers";
import { setCurrentUser } from "./components/app/actions";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./components/app/App";

const rootEl = document.getElementById("root");

let store = createStore(reducers);

render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/app/App", () => {
        const NewApp = require("./components/app/App").default;

        render(
            <AppContainer>
                <Provider store={store}>
                    <NewApp />
                </Provider>
            </AppContainer>,
            rootEl
        );
    });
}
