import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT',
 	REMOVE_COMMENT = 'REMOVE_COMMENT',
 	EDIT_COMMENT = 'EDIT_COMMENT',
 	THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
 	THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


//kreator akcji
function addComment(text) {
 	return {
 		type: ADD_COMMENT,
 		text,
 		id: uuid.v4()
 	}
 }

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}

function thumbUpComment (id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

function thumbDownComment (id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}


//bound action creator - tworzy i wysyła akcję za pomocą metody dispatch()
const boundAddComment = (text) => dispatch(addComment(text)),
	boundRemoveComment = (id) => dispatch(removeComment(id)),
	boundEditComment = (text, id) => dispatch(editComment(text, id)),
	boundThumbUpComment = (id) => dispatch(thumbUpComment(id)),
	boundThumbDownComment = (id) => dispatch(thumbDownComment(id));