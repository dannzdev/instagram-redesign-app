import styled from 'styled-components';

const ArrowIcon = styled.div`
width: 1.5rem;
height: 1.5rem;
margin: 1rem 0 0 1rem;
background-color: #EAEBF3;
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641779583/Insta-design/backarrow_p2mzqm.png');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 50%;
cursor: pointer;
    &:hover { 
        box-shadow: 0 0 1px #a8a7a7, 0 0 7px #EAEBF3;
}
`;

const SettingsIcon = styled(ArrowIcon)`
border: 0.2rem solid white;
margin: 1rem 1rem 0 0;
background-image: url('https://res.cloudinary.com/dckunlwcb/image/upload/v1641780797/Insta-design/settings_ltpag1.png');
`;

export { ArrowIcon, SettingsIcon };