import styled from 'styled-components';

const BoxPhotos = styled.section`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 8rem);
  gap: .5rem;
  margin: 0 auto;
  padding: .5rem;
  align-items: center;
  justify-items: center;
`;

const Photos = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 1.5rem;
    object-fit: contain;
`;

const Videos = styled.video`
  width: 8rem;
  height: 8rem;
  border-radius: 1.5rem;
  object-fit: contain;
`;


export { BoxPhotos, Photos, Videos };