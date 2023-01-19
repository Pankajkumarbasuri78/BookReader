import React from 'react';
import styled from 'styled-components';
import { Post } from '../Posts/Post';
import { Stories } from '../Stories/Stories';


const ScrollLayout = styled.div(props=>({
  padding:'20px 70px',
  backgroundColor:'#E7F1F8',
  [`@media (max-width: 600px)`]:
  {
    padding:'20px 10px'
  }
}))


export const ScrollBar = () => {
  return (
    <ScrollLayout>
      <Stories />
      <Post />
    </ScrollLayout>
  )
}
