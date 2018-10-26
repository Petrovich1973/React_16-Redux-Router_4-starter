import React from 'react';
import { connect } from 'react-redux';

import Pager from '../Pager';

import './style.less';

@connect((store) => {
    return {
        screen1: store.screen1
    };
})

class Screen1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialize = {
            todos: this.createArray(),
            start: 0,
            end: 0,
            perPage: 10
        };
        this.handlePager = this.handlePager.bind(this);
        this.handleChangePerPage = this.handleChangePerPage.bind(this);
    }

    createArray() {
        let res = [];
        for (let i = 0; i < 100; i++) {
            res.push(i);
        }
        return res;
    }

    handlePager(start, end) {

        this.setState({
            start: start,
            end: end
        });

    }

    handleChangePerPage(event) {
        this.setState({
            perPage: event.target.value
        })
    }

    render() {

        const { todos, start, end, perPage } = this.state;

        const currentTodos = todos.slice(start, end);
        
        const renderTodos = currentTodos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        });

        return (
            <div className="container">

                <h2>Hello W!</h2>
                <select value={perPage} onChange={this.handleChangePerPage}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>

                <div className="list">{renderTodos}</div>

                <Pager 
                range={this.handlePager} 
                total={todos.length} 
                currentPage={1} 
                perPage={perPage} />

            </div>
            );
    }

}

Screen1.displayName = 'Screen1';

export default Screen1;