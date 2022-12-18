import React from 'react';
import styled from "styled-components";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
   display: flex;
 `
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
   margin: 20px 0px;
`
const  SocialContainer= styled.div`
    display: flex;
`
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props => props.color };
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 10px;
`
const Center = styled.div`
   flex: 1;
   padding: 20px;
   `
const Title = styled.h3`
   margin-bottom: 30px;
`

const List = styled.ul`
   margin : 0;
   padding: 0;
   list-stle: none;
   display: flex;
   flex-wrap: wrap;
`

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;

`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  `

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 100%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SWAP SHOP</Logo>
        <Desc>There are many variations of passages of lorem Ipsum avaible , but majority have suffered alteration in some form, by injected humour , or randomized words which don't look even slightly believable</Desc>
        <SocialContainer >
             <SocialIcon color="3B5999">
                <FacebookIcon />
             </SocialIcon>

             <SocialIcon color="F4405F">
                <InstagramIcon />
             </SocialIcon>

             <SocialIcon color="55ACEE">
                <TwitterIcon />
             </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
       <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories </ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking </ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
      </List>
      </Center>
      <Right>
         <Title>Contact </Title>
         <ContactItem>
          <LocationOnIcon style={{marginRight:"10px"}}/>
            E-city, Bangalore
         </ContactItem>
         <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}} />
            9835702293
         </ContactItem>
         <ContactItem>
         <EmailIcon style={{marginRight:"10px"}}/>
             aryansagar1996@gmail.com
         </ContactItem>
         <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer;