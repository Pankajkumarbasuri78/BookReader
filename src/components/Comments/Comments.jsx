import React from 'react'
import styled from 'styled-components';
import {AiOutlineFileText} from 'react-icons/ai';

const CommentContainer = styled.div(props=>({

}))
const Write = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    gap:'20px',
    margin:'20px 0px',
    img:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover',
    },
    input:{
        flex:5,
        padding:'10px',
        border:'1px solid black',
        backgroundColor:'transparent',
        color:'red',
    },
    button:{
        border:'none',
        backgroundColor:'#5271ff',
        color:'#ffffff',
        padding:'10px',
        cursor:'pointer',
        borderRadius:'3px',
    }
}))
const Comment = styled.div(props=>({
    margin:'30px 0px',
    display:'flex',
    justifyContent:'space-between',
    gap:'20px',
    img:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover',
    }
}))
const Info = styled.div(props=>({
    flex:5,
    display:'flex',
    flexDirection:'column',
    gap:'3px',
    alignItems:'flex-start',
    span:{
        fontWeight:'bold',
    },
    p:{
        color:'blue',
    }
}))
const Time = styled.div(props=>({
    flex:1,
    alignSelf:'center',
    color:'gray',
    fontSize:'12px',
}))



export const Comments = () => {
    //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Pankaj",
      userId: 1,
      profilePicture:
        "https://media.licdn.com/dms/image/C4D03AQEGf4iZEX2HVA/profile-displayphoto-shrink_800_800/0/1597166200120?e=1679529600&v=beta&t=J6TDHci7W76w2UYvufx7xV3EB8iAqKfsiEHGRdGeLkE",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Basuri",
      userId: 2,
      profilePicture:
        "https://media.licdn.com/dms/image/C4D03AQEGf4iZEX2HVA/profile-displayphoto-shrink_800_800/0/1597166200120?e=1679529600&v=beta&t=J6TDHci7W76w2UYvufx7xV3EB8iAqKfsiEHGRdGeLkE",
    },
  ];

  return (
    <CommentContainer>
        <Write>
            <AiOutlineFileText size={30} style={{color:'black'}}/>
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
        </Write>
        {comments.map((comment)=>(
            <Comment>
                <img src={comment.profilePicture} alt="" />
                <Info>
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </Info>
                <Time>1 Hour Ago</Time>
            </Comment>
        ))}
    </CommentContainer>
  )
}
