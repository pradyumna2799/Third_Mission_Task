import React from 'react';

function Task({ taskName, onRemove }) {
    return (
        <div>
            <p>{taskName}</p>
            <button type="button" onClick={onRemove}>Remove</button>
        </div>
    );
}
export default Task;