import React from 'react';
import styled from 'styled-components';

const StoriesLayout = styled.div(props=>({
  display:'flex',
  gap:'10px',
  height:'250px',
  marginBottom:'30px',
  [`@media (max-width: 600px)`]:
  {
    height:'100px'
  }
}))
const Story = styled.div(props=>({
  flex:1,
  borderRadius:'10px',
  overflow:'hidden',
  position:'relative',
  img:{
    width:'100%',
    height:'100%',
    objectFit:'50%',
  }
}))
const Span = styled.div(props=>({
  position:'absolute',
  bottom:'10px',
  left:'10px',
  color:'#ffffff',
  fontWeight:'bold',
  [`@media (max-width: 600px)`]:
  {
    display:'none'
  }
}))
const Button = styled.div(props=>({
  position:'absolute',
  bottom:'0px',
  left:'10px',
  color:'#ffffff',
  backgroundColor:'#5070ff',
  border:'none',
  borderRadius:'50%',
  width:'30px',
  height:'30px',
  cursor:'pointer',
  fontSize:'30px',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  [`@media (max-width: 600px)`]:
  {
    width:'20px',
  height:'20px',
  }
}))



export const Stories = () => {
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Robert T. Kiyosaki",
      img: "https://m.media-amazon.com/images/I/71yR6I17NQS.jpg",
    },
    {
      id: 2,
      name: "Robert T. Kiyosaki",
      img: "https://i.etsystatic.com/24307483/r/il/582184/3121962896/il_1080xN.3121962896_dfx4.jpg",
    },
    {
      id: 3,
      name: "Robert T. Kiyosaki",
      img: "https://i.etsystatic.com/24307483/r/il/582184/3121962896/il_1080xN.3121962896_dfx4.jpg",
    },
    {
      id: 4,
      name: "Robert T. Kiyosaki",
      img: "https://i.etsystatic.com/24307483/r/il/582184/3121962896/il_1080xN.3121962896_dfx4.jpg",
    },
  ];
  return (
    <StoriesLayout>
      <Story>
        <img src='https://i.etsystatic.com/24307483/r/il/582184/3121962896/il_1080xN.3121962896_dfx4.jpg' alt='aa' />
        {/* //<Span>Ravi</Span> */}
        <Button>+</Button>
      </Story>
      {stories.map(story=>(
        <Story key={story.id}>
          <img src={story.img} alt="" />
          <Span>{story.name}</Span>
        </Story>
      ))}
    </StoriesLayout>
  )
}
