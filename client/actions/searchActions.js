export function updateCurrent(value) {
    return {
        type: 'UPDATE_CURRENT_SEARCH',
        payload: value
    };
}

export function changeField(params) {
    return {
        type: 'CHANGE_FIELD_SEARCH',
        payload: params
    };
}

export function resetFields(setName) {
    return {
        type: 'RESET_FIELDS_SEARCH',
        setName: setName
    };
}