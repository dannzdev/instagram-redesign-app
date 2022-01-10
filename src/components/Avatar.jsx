import styled from 'styled-components';

const NeoLayer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #EAEBF3;
  box-shadow: 3px 3px 3px #a2a2a3, 1px 1px 10px #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: -2.5rem;
	right: calc(50% - 2.5rem)
	`;

const MediumLayer = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: linear-gradient(to right, red, purple);
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
`;

const AvatarImg = styled.div`
	width: 97.5%;
	height: 97.5%;
	border-radius: 50%;
	border: 0.2rem solid #e1e1e1;
	background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641820695/Insta-design/profile-avatar_lvwbfy.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const Verified = styled.div`
width: 1.4rem;
height: 1.4rem;
background-size: cover;
background-repeat: no-repeat;
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641830169/Insta-design/verified_flyepz.png');
border-radius: 50%;
position: absolute;
bottom: -0.2rem;
right: -0.2rem;
`;

export { NeoLayer, MediumLayer, AvatarImg, Verified };