import React from 'react';
import styled from 'styled-components';
import {GoPerson} from 'react-icons/go';

const RightBarLayout = styled.div(props=>({
    flex:3,
    position:'sticky',
    top:'50px',
    height: 'calc(100vh - 50px)',
    //overflow:'scroll',
    backgroundColor:'#f2f2f2',
}))
const RightBarWrapper = styled.div(props=>({
    padding:'20px',
}))
const Item = styled.div(props=>({
    WebkitBoxShadow:'0px 0px 15px 1px rgba(0, 0, 0, 0.09)',
    boxShadow:'0px 0px 15px 1px rgba(0, 0, 0, 0.09)',
    padding:'20px',
    marginBottom:'20px',
    backgroundColor:'#ffffff',
}))
const Span = styled.div(props=>({
    color:'gray',
}))
const UserContainer = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    margin:'20px 0px',
    // [`@media (max-width: 600px)`]:
    // {
    //     display:'flex',
    //     flexDirection:'column'
    // }
}))
const UserInfo = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'20px',
    position:'relative',

    img:{
        width:'40px',
        borderRadius:'50%',
        objectFit:'cover',
    },
    p:{
        color:'themed("textColorSoft")',
    },
    span:{
        fontWeight:'bold',
        color:'red',
    },
    [`@media (max-width: 600px)`]:
    {
        gap:'10px'
    }
}))
const Buttons = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    button:{
        padding:'5px',
        color:'red',
        cursor:'pointer',
    }
    
}))

export const RightBar = () => {
  return (
    <RightBarLayout>
        <RightBarWrapper>
          <Item>
                  <Span>Suggestions for you</Span>
            
              <UserContainer>
                  <UserInfo>
                      
                      <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                      <Span>Ankit</Span>
                  </UserInfo>
                  <Buttons>
                      <button>Follow</button>
                      <button>Unfollow</button>
                  </Buttons>
              </UserContainer>

              <UserContainer>
                  <UserInfo>
                      <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                      <Span>Ankit</Span>
                  </UserInfo>
                  <Buttons>
                      <button>Follow</button>
                      <button>Unfollow</button>
                  </Buttons>
              </UserContainer>

              <UserContainer>
                  <UserInfo>
                      <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                      <Span>Ankit</Span>
                  </UserInfo>
                  <Buttons>
                      <button>Follow</button>
                      <button>Unfollow</button>
                  </Buttons>
              </UserContainer>
          </Item>

          <Item>
            <Span>Latest Activites</Span>
            <UserContainer>
                <UserInfo>
                   <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                   <p>
                    <span>ankit</span> changed his cover pic
                   </p>
                </UserInfo>
                <Span>1 min ago</Span>
            </UserContainer>

            <UserContainer>
                <UserInfo>
                   <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                   <p>
                    <span>ankit</span> changed his cover pic
                   </p>
                </UserInfo>
                <Span>1 min ago</Span>
            </UserContainer>

            <UserContainer>
                <UserInfo>
                   <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                   <p>
                    <span>ankit</span> changed his cover pic
                   </p>
                </UserInfo>
                <Span>1 min ago</Span>
            </UserContainer>

            <UserContainer>
                <UserInfo>
                   <GoPerson style={{width:'40px', borderRadius:'50%', objectFit:'cover'}} size={25}/>
                   <p>
                    <span>ankit</span> changed his cover pic
                   </p>
                </UserInfo>
                <Span>1 min ago</Span>
            </UserContainer>
          </Item>
        </RightBarWrapper>
    </RightBarLayout>
  )
}
