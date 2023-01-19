import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import styled from 'styled-components';

const LeftBarLayout = styled.div(props=>({
    flex:'2',
    position:'sticky',
    height:'auto',
    top:'50px',
    height: 'calc(100vh - 50px)',
    backgroundColor:'#f2f2f2',
    [`@media (max-width: 600px)`]:
    {
        position:'relative',
        top:"0",
    }
}))
const Container = styled.div(props=>({
    padding:'20px',
}))
const Menu = styled.div(props=>({
    display:'flex',
    flexDirection:'column',
    gap:'40px',
}))
const Home = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'20px',
}))
const Item = styled.div(props=>({
    display:'flex',
    alignItems:'center',
    gap:'20px',
}))
const Span =styled.div(props=>({
    fontSize:'18px',
    fontWeight:'-moz-initial'
}))

export const LeftBar = () => {
  return (
    <LeftBarLayout>
        <Container>
            <Menu>
                <Home>
                    <AiFillHome size={25}/>
                    <Span>Pankaj</Span>
                </Home>
                <Item>
                    <BsPerson size={25}/>
                    <Span>Friends</Span>
                </Item>
                <Item>
                    <FiSettings size={25}/>
                    <Span>Settings</Span>
                </Item>
                <Item>
                    <CgProfile size={25}/>
                    <Span>Profile</Span>
                </Item>
            </Menu>

        </Container>
    </LeftBarLayout>
  )
}
