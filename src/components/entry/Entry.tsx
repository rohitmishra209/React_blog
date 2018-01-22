import * as React from 'react';

interface AppProps {

}

export default class Entry extends React.Component<AppProps, undefined> {
    constructor (props) {
        super(props);
        console.log("LOL : ", arguments);
    }

    render() {
        return (
            <div className="app">
                <h1>Hello World! try this great djdjd</h1>
                <p>Foo to the barz</p>
                <img src="#" height="480"/>
            </div>
        );
    }
}