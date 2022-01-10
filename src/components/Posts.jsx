import styled from 'styled-components';

const ContainerPost = styled.section`
  width: 80%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
	align-items: center;
  margin: 2rem auto 0 auto;
	border-radius: .5rem;
	background: #EAEBF3;
  box-shadow: 4px 2px 10px #bab9b9, -2px -1px 15px #ffffff;
`;

const PostContainer = styled.div`
width: 3rem;
`;

const FollowersContainer = styled(PostContainer)`
width: 3.5rem;
`;

const FollowingContainer = styled(PostContainer)`
width: 3.5rem
`;

const PostTitle = styled.h2`
		font-weight: normal;
    text-align: center;
    font-size: 1rem;
`;

const PostSubtitle = styled.h3`
		font-size: .7rem;
		color: #9e9e9e;
		padding-top: .2rem;
		font-weight: normal;
    text-align: center;
`;

export { ContainerPost, PostContainer, FollowersContainer, FollowingContainer, PostTitle, PostSubtitle };