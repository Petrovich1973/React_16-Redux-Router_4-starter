import React from 'react';
import { connect } from 'react-redux';

import JSONbig from 'json-bigint';
import JSONBigNumber from 'json-bignumber';

@connect((store) => {
    return {
        screen2: store.screen2
    };
})

class Screen2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialize = {
            json: '[{ "value" : 922337203685477580701, "v2": 123 }]'
        };
    }

    render() {

        var r1 = JSONbig.parse(this.state.json);
        var r2 = JSONBigNumber.parse(this.state.json);

        return (
            <div className="container">

                Screen2 
                <p>({r2[0].value.toString()})</p>
                <p>({r1[0].value.toString()})</p>
                <p>({JSON.parse(this.state.json)[0].value.toString()})</p>

            </div>
        );
    }

}

Screen2.displayName = 'Screen2';

export default Screen2;