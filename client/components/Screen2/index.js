import React from 'react';
import { connect } from 'react-redux';

import JSONbig from 'json-bigint';
import JSONBigNumber from 'json-bignumber';
import qs from 'qs';
import ObSer from 'object-serialize';
import equal from 'equals';

import Input from '../Input';

import { changeFormField } from '../../actions/formAction';
import { getJournal } from '../../actions/journalActions';

class Screen2 extends React.Component {

    state = this.initialize = {
        json: '[{ "value" : 922337203685477580701, "v2": 123 }]',
        name: {
            value: '',
            required: true,
            minlength: 2,
            maxlength: 10,
            classname: 'vertical',
            message: null,
            error: false
        },
        rules: {            
            messages: {
                required: "Поле не может быть пустым",
                minlength: "Минимум 2 символа",
                maxlength: "Максимум 10 символов"
            }
        }
    }

    validateInput = (element) => {

        let required = this.state[element.name].required ? !element.value.length : false;
        let minlength = element.value.length < this.state[element.name].minlength;
        let maxlength = element.value.length > this.state[element.name].maxlength;
        let message = [];
        if(required) message.push(this.state.rules.messages.required)
        if(minlength) message.push(this.state.rules.messages.minlength)
        if(maxlength) message.push(this.state.rules.messages.maxlength)

        let result = {
            [element.name]: {
               ...this.state[element.name],
               value: element.value,
               message: message.length ? message.join(', ') : null,
               error: message.length
            }
        }
        this.setState({
            ...result
        })
    }

    componentDidMount() {
        document.title = 'Просмотр журнала';
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

                {this.state.name.value}

                <Input 
                label="Наименование поля" 
                classname={this.state.name.classname}
                error={this.state.name.error}
                message={this.state.name.message}
                name="name"
                value={this.state.name.value}
                onchange={this.validateInput} />


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