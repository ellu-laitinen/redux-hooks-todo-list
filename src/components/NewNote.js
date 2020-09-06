import React from 'react';
import { useDispatch } from 'react-redux'
import * as actionTypes from '../store/action'
import { createNote } from '../store/reducers/reducer'

const NewNote = () => {

    const dispatch = useDispatch();


    const addTodo = async (event) => {
        event.preventDefault();
        const text = event.target.notes.value;
        event.target.notes.value = "";
        dispatch(createNote(text))

    }

    return (
        <div>
            <h2>enter your notes</h2>
            <form onSubmit={addTodo}>
                <input name="notes" />
                <button type="submit">add note</button>
            </form>

        </div>
    );
}

export default NewNote;
