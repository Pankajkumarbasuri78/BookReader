import React from 'react';
import styled from 'styled-components';
import { AiFillHome,AiFillBell ,AiOutlineMenuFold, AiOutlineSearch, AiFillMessage } from 'react-icons/ai';
import {RxAvatar} from 'react-icons/rx';
import { Link } from 'react-router-dom';

const NavbarLayout = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'10px 20px',
    height:'auto',
    borderBottom:'1px solid gray',
    position:'sticky',
    top: 0,
    backgroundColor:'#602EF0',
    textDecorationColor:'red',
    zIndex:'999'
}))
const Left = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'30px',
}))

const Span = styled.div(props=>({
    fontWeight:'bold',
    fontSize:'20px',
    color:'black',
}))
const Search =styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    border:'1px solid Black',
    borderRadius:'5px',
    padding:'5px',
    backgroundColor:'#ffffff',

    input:{
        border:'none',
        width:'500px',
        backgroundColor:'transparent',
        outline:'0px',
        color:'themed("textColor")',
    },
    [`@media (max-width: 600px)`]:
    {
        input:{
            width:'100px'
        }
    }
}))

const Right = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'20px',
    [`@media (max-width: 600px)`]:
    {
        display:'none'
    }
}))
const UserName = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    fontWeight:'bold',
}))

export const Navbar = () => {
  return (
    <NavbarLayout>
        <Left>
            <Link to="/" style={{textDecoration:"none"}}>
            <Span>Books</Span>
            </Link>
            <AiFillHome size={25}/>
            <AiOutlineMenuFold size={25}/>
            <Search>
                <AiOutlineSearch/>
                <input type='text' placeholder="search...."/>
            </Search>
        </Left>

        <Right>
            <AiFillMessage size={25}/>
            <AiFillBell size={25}/>
            <UserName>
                <RxAvatar size={25}/>
                <Span>Pankaj</Span>
            </UserName>
        </Right>
    </NavbarLayout>
  )
}
