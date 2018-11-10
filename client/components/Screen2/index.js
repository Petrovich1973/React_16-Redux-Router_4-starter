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

import './style.less';

class Screen2 extends React.Component {

    state = this.initialize = {
        json: '[{ "value" : 922337203685477580701, "v2": 123 }]',
        name1: {
            value: '',
            required: true,
            minlength: 2,
            maxlength: 10,
            classname: 'vertical',
            message: null,
            error: false
        },
        name2: {
            value: '',
            required: false,
            minlength: 4,
            maxlength: 20,
            classname: 'vertical',
            message: null,
            error: false,
            success: false
        },
        name3: {
            value: '',
            required: false,
            minlength: 3,
            maxlength: 15,
            classname: 'vertical',
            message: null,
            error: false,
            success: false
        },
        name4: {
            value: '',
            required: false,
            minlength: 4,
            maxlength: 20,
            classname: 'vertical',
            message: null,
            error: false,
            success: false
        },
        rules: {            
            messages: {
                required: "Поле не может быть пустым",
                minlength: "Минимум $X\xa0символа",
                maxlength: "Максимум $X\xa0символов"
            }
        }
    }

    validateInput = element => {

        const {value, name} = element;
        const {messages} = this.state.rules;
        const _self = this.state[name];

        const required = _self.required ? !value.length : false;
        const minlength = value.length && value.length < _self.minlength;
        const maxlength = value.length > _self.maxlength;

        let message = [];

        if(required) message.push(messages.required)
        if(minlength) message.push(messages.minlength.replace('$X', _self.minlength))
        if(maxlength) message.push(messages.maxlength.replace('$X', _self.maxlength))

        let result = {
            [name]: {
               ..._self,
               value: value,
               message: message.length ? message.join(', ') : null,
               error: message.length,
               success: !message.length
            }
        }
        if(!('success' in _self)) delete result[name].success;
        this.setState({
            ...this.state,
            ...result
        })
    }

    handleReset = () => {
        this.setState({
            ...this.initialize
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
                
                <div className="form">
                    <table className="table-form">
                        <tbody>
                            <tr>
                                <td>
                                    <Input 
                                    name="name1"
                                    label="Наименование 1 поля" 
                                    {...this.state.name1}
                                    onchange={this.validateInput} />
                                </td>
                                <td>
                                    <Input 
                                    name="name2"
                                    label="Наименование 2 поля" 
                                    {...this.state.name2}
                                    onchange={this.validateInput} />
                                </td>
                                <td>
                                    <Input 
                                    name="name3"
                                    label="Наименование 3 поля" 
                                    {...this.state.name3}
                                    onchange={this.validateInput} />
                                </td>
                                <td>
                                    <Input 
                                    name="name4"
                                    label="Наименование 4 поля" 
                                    {...this.state.name4}
                                    onchange={this.validateInput} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input 
                                    name="name1"
                                    label="Наименование 1 поля" 
                                    {...this.state.name1}
                                    onchange={this.validateInput} />
                                </td>
                                <td>
                                    <Input 
                                    name="name2"
                                    label="Наименование 2 поля" 
                                    {...this.state.name2}
                                    onchange={this.validateInput} />
                                </td>
                                <td>
                                    <Input 
                                    name="name3"
                                    label="Наименование 3 поля" 
                                    {...this.state.name3}
                                    onchange={this.validateInput} />
                                </td>
                                <td>
                                    <Input 
                                    name="name4"
                                    label="Наименование 4 поля" 
                                    {...this.state.name4}
                                    onchange={this.validateInput} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button disabled={ equal(this.state, this.initialize) } onClick={this.handleReset}>Reset</button>


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