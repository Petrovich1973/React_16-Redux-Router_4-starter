import React from 'react';
import classNames from 'classnames';
import './style.less';

const Input = props => {

    return (
        <div className={classNames('inputBox', props.classname || null, {'error': props.error || false})}>

            {props.label ? <label>{props.label}</label> : null}
            <input 
            type={props.type || 'text'}
            name={props.name || ''}
            value={props.value || ''}
            onChange={(e) => ( props.onchange(e.target) || null )}
            disabled={props.disabled || false} />
            {props.message ? <div className="message">{props.message}</div> : null}

        </div>
    );
}

Input.displayName = 'Input';

export default Input;