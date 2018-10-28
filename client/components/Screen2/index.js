import React from 'react';
import { connect } from 'react-redux';

import JSONbig from 'json-bigint';
import JSONBigNumber from 'json-bignumber';
import qs from 'qs';
import ObSer from 'object-serialize';
import equal from 'equals';

import { changeFormField } from '../../actions/formAction';
import { getJournal } from '../../actions/journalActions';

class Screen2 extends React.Component {

    state = this.initialize = {
        json: '[{ "value" : 922337203685477580701, "v2": 123 }]'
    }

    componentDidMount() {
        const search = qs.parse(this.props.history.location.search, { ignoreQueryPrefix: true });
        if(Object.keys(search).length) {
            this.props.dispatch( changeFormField({filter: {...this.props.screen2.filter, ...search}}) );
            this.props.dispatch( getJournal({...this.props.screen2.filter, ...search}) );
        }
    }

    componentWillReceiveProps() {
        // qs.parse('a=c');
        // console.log('componentWillReceiveProps', qs.parse(this.props.history.location.search, { ignoreQueryPrefix: true }));
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log('componentWillUpdate', nextProps.history.location.search);
    }

    handleClick = () => {
        console.log('handleClick');
    }

    handleClick2 = () => {
        console.log('handleClick2');
    }

    handleChangeFormField = (e) => {
        this.props.dispatch( changeFormField({filter: {...this.props.screen2.filter, [e.target.name]: e.target.value}}) );
    }

    handleSendForm = () => {
        const filter = this.props.screen2.filter;
        const send = ObSer(filter);
        this.props.history.push(`?${send}`);
        this.props.dispatch( getJournal(filter) );
    }

    render() {

        const r1 = JSONbig.parse(this.state.json);
        const r2 = JSONBigNumber.parse(this.state.json);

        const { test, filter } = this.props.screen2;
        const { name, age, date } = filter;
        const { data, spinner } = this.props.journal;

        return (
            <div className="container">

                Screen2 {test}
                <button onClick={() => this.handleClick()}>Add search1</button>
                <button onClick={this.handleClick2}>Add search2</button>

                <pre>
                    {JSON.stringify(filter)}
                </pre>

                <div className="filter">
                    <p>
                        <label>Name</label>
                        <input name="name" value={name} onChange={this.handleChangeFormField}/>
                    </p>
                    <p>
                        <label>Age</label>
                        <input name="age" value={age} onChange={this.handleChangeFormField}/>
                    </p>
                    <p>
                        <label>Date</label>
                        <input name="date" value={date} onChange={this.handleChangeFormField}/>
                    </p>
                    <button onClick={() => this.handleSendForm()}>Send Form</button>
                </div>

                <div style={spinner ? {opacity: '.3', backgroundColor: '#ccc', minHeight: '100px'} : null}>
                    {data.map((m, i) => {
                        return (
                            <p key={i}>{m.a} | {m.b}</p>
                        );
                    })}
                </div>


                <p>({r2[0].value.toString()})</p>
                <p>({r1[0].value.toString()})</p>
                <p>({JSON.parse(this.state.json)[0].value.toString()})</p>

            </div>
        );
    }

}

const Screen2Connect = connect((store) => {
    return {
        screen2: store.screen2,
        journal: store.journal
    };
})(Screen2)

Screen2.displayName = 'Screen2';

export default Screen2Connect;