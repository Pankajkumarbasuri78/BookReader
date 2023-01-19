import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BiDotsHorizontal} from 'react-icons/bi';
import {AiOutlineLike,AiOutlineDislike, AiOutlineComment ,AiOutlineShareAlt } from 'react-icons/ai';
import styled from 'styled-components';
import { Comments } from '../../Comments/Comments';


const PosterLayout = styled.div(props=>({
    WebkitBoxShadow:'0px 0px 25px -10px rgba(0, 0, 0, 0.38)',
    boxShadow:'0px 0px 25px -10px rgba(0, 0, 0, 0.38)',
    borderRadius:'20px',
    backgroundColor:'#ffffff',
    color:'red',
    
}))
const PosterWrapper = styled.div(props=>({
    padding:'20px',
}))
const UserData = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
}))
const UserInfo = styled.div(props=>({
    display:'flex',
    gap:'20px',
    img:{
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        objectFit:'cover',
    }
}))
const Details = styled.div(props=>({
    display:'flex',
    flexDirection:'column',
}))
const Span = styled.div(props=>({
    fontWeight:'bold',
}))
const Time = styled.div(props=>({
    fontSize:'12px',
}))


const ImageContainer= styled.div(props=>({
    margin:'20px 0px',
    img:{
        width:'100%',
        maxHeight:'500px',
        marginTop:'20px',
    }
}))
const PosterInfo = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'20px',
}))
const Item = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    cursor:'pointer',
    fontSize:'14px',
}))




export const Poster = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false);
    //TEMPORARY
  const liked = false;

  return (
    <PosterLayout>
        <PosterWrapper>
            <UserData>
                <UserInfo>
                    <img src={post.profilePic} alt="" />
                    <Details>
                        <Link 
                          to='/content'
                          style={{textDecoration: "none", color: "inherit"}} 
                          >
                            <Span>{post.name}</Span>
                          </Link>
                          <Time>1 min ago</Time>
                    </Details>
                </UserInfo>
                <BiDotsHorizontal />            
            </UserData>
            
            <ImageContainer>
            <Link to='/content'
                          style={{textDecoration: "none", color: "inherit"}} 
                          >
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
                </Link>
            </ImageContainer>

            <PosterInfo>
                <Item>
                    {liked ? <AiOutlineLike /> : <AiOutlineDislike />}
                    12 likes
                </Item>
                <Item onClick={() => setCommentOpen(!commentOpen)}>
                    <AiOutlineComment />
                    12 comments
                </Item>
                <Item>
                    <AiOutlineShareAlt />
                    Share
                </Item>

            </PosterInfo>
            {commentOpen && <Comments/>}
        </PosterWrapper>
    </PosterLayout>
  )
}
