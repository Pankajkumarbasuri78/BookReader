import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';


const HeroLayout = styled.div(props=>({
    display:'flex',
    width:'80%',
    marginLeft:'140px',
    marginTop:'60px',
    height:'auto',
    justifyContent:'center',
    alignItems:'center',
    WebkitBoxShadow:'0px 0px 25px -10px rgba(0, 0, 0, 0.38)',
    boxShadow:'0px 0px 25px -10px rgba(0, 0, 0, 0.38)',
    borderRadius:'20px',
    backgroundColor:'#AA8E7D',
    color:'red',
    // margin:'6rem 0',
    [`@media (max-width: 600px)`]:
    {
        margin:'10px',
        width:'95%',
    }

}))
const HeroWrapper = styled.div(props=>({
    display:'flex',
    flexDirection:'row',
    flexBasis:'90%',
    width:'95%',
    height:'auto',
    gap:'20px',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:'4rem',
    marginTop:'6rem',
    [`@media (max-width: 600px)`]:
    {
        marginTop:'-130px',
        flexDirection:'column',
        flexBasis:'80%',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
    }
    
}))



const LeftContent = styled.div(props=>({
    display:'flex',
    width:'95%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    gap:'10px',

    [`@media (max-width: 600px)`]:
    {
        marginTop:'10rem',
        justifyContent:'center',
        alignItems:'center',
    }

}))
const Heading = styled.p(props=>({
    fontWeight:'200',
    letterSpacing:'2px',
    color:'black',

}))
const ShortDesc = styled.p(props=>({
    fontSize:'20px',
    fontWeight:"lighter",

}))
const Description = styled.p(props=>({
    fontSize:'18px',
    color:'#303030',
    [`@media (max-width: 600px)`]:
    {
        textAlign:'center'
    }


}))
const Button = styled.div(props=>({
    
    button:{
        backgroundColor:'#7462E1',
        color:'#ffffff',
        border:'none',
        width:'175px',
        height:'2rem',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginTop:'35%',
        textAlign:'center',
        textDecoration:'none',
        [`@media (max-width: 600px)`]:
       {
        marginTop:'15%'
       }
      },
      a:{
        color:'#ffffff',
        border:'none',
        width:'175px',
        height:'2rem',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginTop:'35%',
        textAlign:'center',
        textDecoration:'none',
        [`@media (max-width: 600px)`]:
       {
        marginTop:'7.3%'
       }
      },
      [`@media (max-width: 600px)`]:
      {
        //display:'flex',
        display:'none',
        flexDirection:'row',
        button:{
            width:'155px',
        }
      }

}))
const Button1 =styled.div(props=>({
    display:'none',
    button:{
        backgroundColor:'#7462E1',
        color:'#ffffff',
        border:'none',
        width:'175px',
        height:'2rem',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginTop:'35%',
        textAlign:'center',
        textDecoration:'none',
        [`@media (max-width: 600px)`]:
       {
        marginTop:'15%'
       }
      },
      a:{
        color:'#ffffff',
        border:'none',
        width:'175px',
        height:'2rem',
        fontSize:'1.2rem',
        fontWeight:'bold',
        marginTop:'35%',
        textAlign:'center',
        textDecoration:'none',
        [`@media (max-width: 600px)`]:
       {
        marginTop:'7.3%'
       }
      },
      [`@media (max-width: 600px)`]:
      {
        display:'flex',
        //display:'none',
        flexDirection:'row',
        button:{
            width:'155px',
        }
      }
}))

const RightContent = styled.div(props=>({
[`@media (max-width:600px)`]:
{
    //display:'none'
}
}))
const Image = styled.div(props=>({
    
}))


export const ContentPage = () => {
  return (
    <HeroLayout>
        <HeroWrapper>
            <LeftContent>
                <Heading>Lorem ipsum dolor sit amet</Heading>
                <ShortDesc>
                    This Book <span style={{color:'#ff014f'}}>"The Home and the World"</span>
                    <h5 style={{fontSize:'30px',fontWeight:'bold',color:'#ff014f'}}>
                    is 
                   <span style={{color:'black',fontSize:'30px'}}>
                   <Typewriter words={[" a 1916 novel by Rabindranath Tagore", " Originally published in 1916"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                   </span>
                   </h5>
                </ShortDesc>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis. 
                    Vestibulum lectus mauris ultrices eros in cursus turpis massa.
                </Description>

                <Button>
                    <button>
                      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Read More</a> 
                    </button>
                    <Link to='/'>
                      <button style={{cursor:'pointer',marginLeft:'10px'}}>
                        Back
                      </button>
                     </Link>
                    
                </Button>
                
            </LeftContent>
            {/* </Content> */}
            <RightContent>
                <Image>
                    <img src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/10/07/rabindra-1151289-1665084066.jpg?itok=MNVj8Ais' alt='profile-pic' height={350} width='350px'/>
                </Image>
            </RightContent>
            <Button1>
                    <button>
                      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Read More</a> 
                    </button>
                    <Link to='/'>
                      <button style={{cursor:'pointer',marginLeft:'10px'}}>
                        Back
                      </button>
                     </Link>
                    
                </Button1>
        </HeroWrapper>
    </HeroLayout>
  )
}
