import styled from 'styled-components';

const HighlightC = styled.section`
	width: 80%;
	height: 3rem;
	margin: 2.5rem auto 2.5rem auto;
	display: flex;
	align-items: center;
`;

const Box = styled.div`
	width: 5rem;
	height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IconBox = styled.div`
width: 3rem;
height: 3rem;
background: #EAEBF3;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 3px 3px 3px #bab9b9, -2px -1px 15px #ffffff;
overflow: hidden;
cursor: pointer;
    &:hover { 
	box-shadow: 0 0 1px #a8a7a7, 0 0 7px #EAEBF3;
	border: 0.05rem solid white;
`;

const Text = styled.p`
	margin-top: .5rem;
	font-size: .8rem;
	color: #6d6b6b;
`;

const TravelIcon = styled.img`
padding: 1.2rem;
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641832613/Insta-design/travel_z8fsed.png');
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`;

const AddCircle = styled(TravelIcon)`
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641831841/Insta-design/circle_ntqc36.png');
`;

const ClothesIcon = styled(TravelIcon)`
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641832604/Insta-design/clothes_w365x3.png');
`;

const FoodIcon = styled(TravelIcon)`
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641834263/Insta-design/fiid_xywfhs.png');
`;

const BooksIcon = styled(TravelIcon)`
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641834331/Insta-design/bookie_z8ffjp.png');
`;



export { HighlightC, AddCircle, TravelIcon, ClothesIcon, FoodIcon, BooksIcon, IconBox, Text, Box };