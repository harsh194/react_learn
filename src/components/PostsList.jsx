import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';
// import PhotoCollection from '../photos/PhotoCollection';

function PostsList({isPosting})
{
    
    const[enteredBody, setEnteredBody] = useState('');
    const[enteredAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event)
    {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event)
    {
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if(modalIsVisible)
    {
        modalContent = (
            <Modal onClose = {hideModalHandler}>
            <NewPost 
                onBodyChange = {bodyChangeHandler} 
                onAuthorChange = {authorChangeHandler}
            />
            </Modal>
        );
    }

    return (
        <>
            {isPosting && (
                {modalContent}
            )}
            
            <ul className = {classes.posts}>
                <Post author = {enteredAuthor} body = {enteredBody} />
                <Post author = "min" body = "awesome"/>
            </ul>
            {/* <PhotoCollection/> */}
        </>
    );

}

export default PostsList