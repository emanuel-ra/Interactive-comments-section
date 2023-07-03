import { iconDelete, iconEdit, iconReply } from "../assets/images";
import PropTypes from 'prop-types';

function PostActions({ isUserLogged, handleReply, handleDelete, handleEdit }) {
  return (
    <>        
        {(!isUserLogged) &&
            <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleReply}>
                <img src={iconReply} alt={`Reply Icon`} /> Reply
            </button>                               
        }

        {(isUserLogged) && 
            <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleDelete} >
                <img src={iconDelete} alt="Delete Icon" /> Delete
            </button>                                                                                        
        }

        {(isUserLogged) &&                                
            <button className='flex gap-2 items-center text-moderate-blue font-semibold hover:opacity-50' onClick={handleEdit} >
                <img src={iconEdit} alt="Edit Icon" /> Edit
            </button>                                                                                        
        }    
    </>
  )
}

PostActions.propTypes = {
    isUserLogged: PropTypes.bool ,
    handleReply: PropTypes.func.isRequired ,
    handleDelete: PropTypes.func.isRequired ,
    handleEdit: PropTypes.func.isRequired ,
}

export default PostActions