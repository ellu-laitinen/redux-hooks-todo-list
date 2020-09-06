import * as actionTypes from '../action';
import noteService from '../../services/note'

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.data];
        case actionTypes.INIT_NOTES:
            return action.data
        default: return state;
    };



};


export const initNotes = () => {
    return async (dispatch) => {
        const notes = await noteService.getAll();
        dispatch({ type: actionTypes.INIT_NOTES, data: notes })
    }
}
export const createNote = (content) => {
    return async (dispatch) => {
        const newNote = await noteService.createNew(content);
        dispatch({
            type: actionTypes.ADD_TODO,
            data: newNote,
        });
    };
};


export default reducer;