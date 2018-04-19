import React from 'react'
 
import {
  NavLink
} from            'react-router-dom';

import            './Navigation.less';
 
export default class Navigation extends React.Component {
 
    render() {
 
        return (            
            
            <ul className="navigation">
                <li><NavLink to="/screen1" activeClassName="active">
                        <i className="fa fa-line-chart" />
                        <span>Мониторинг репликации</span>
                    </NavLink></li>
                <li><NavLink to="/screen2" activeClassName="active">
                        <i className="fa fa-eye" />
                        <span>Просмотр журнала</span>
                    </NavLink></li>
                <li><NavLink to="/screen3" activeClassName="active">
                        <i className="fa fa-eye" />
                        <span>3 Просмотр журнала</span>
                    </NavLink></li>
            </ul>            
 
            );
        
    }
 
}