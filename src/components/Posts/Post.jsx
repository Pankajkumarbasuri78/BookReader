import React from 'react';
import styled from 'styled-components';
import { Poster } from '../Common/Poster/Poster';

const PostContainer = styled.div(props=>({
  display:'flex',
  flexDirection:'column',
  gap:'50px',
}))

export const Post = () => {
  //temporary data
  const posts = [
    {
      id: 1,
      name: "Charles River",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534059824l/41125556._SY475_.jpg",
    },
    {
      id: 2,
      name: "Rabindranath Tagore",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img:"https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/07/rabindra-1151289-1665084066.jpg?itok=MNVj8Ais"
    },
    {
      id: 3,
      name: "Jennifer",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://news.tulane.edu/sites/default/files/Code%20Breaker_9.29%20COVER.jpg",
    },
  ];

  return (
    <PostContainer>
      {posts.map(post=>(
        <Poster post={post} key={post.id} />
      ))}
    </PostContainer>
  )
}
