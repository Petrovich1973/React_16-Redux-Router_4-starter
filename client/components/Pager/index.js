import React from 'react';

import './style.less';

class Pager extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialize = {
            total: this.props.total || 10,
            currentPage: this.props.currentPage || 1,
            perPage: this.props.perPage || 5
        };
         this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.handleClick(this.props.currentPage);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.perPage !== this.state.perPage) this.changeState(nextProps);
    }

    changeState(nextProps) {
        this.setState({
            perPage: nextProps.perPage,
            currentPage: nextProps.currentPage
        });
        setTimeout(() => this.handleClick(1), 0);
    }

    handleClick(event) {
        const { perPage } = this.state;
        const currentPage = Number(typeof event.target == 'object' ? event.target.innerText : event);
        this.setState({
            currentPage: currentPage
        });
        const indexOfLastTodo  = currentPage * perPage;
        const indexOfFirstTodo = indexOfLastTodo - perPage;
        this.props.range(indexOfFirstTodo, indexOfLastTodo);
    }

    render() {

        const { total, currentPage, perPage } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(total / perPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                className={currentPage == number ? 'active' : null}
                key={number}
                onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        
        return <ul className="page-numbers">{renderPageNumbers}</ul>;
    }

}

Pager.displayName = 'Pager';

export default Pager;