import React from "react";
import Wrapper from "../components/Wrapper";
import { ArrowIcon, SettingsIcon} from "../components/Icons";
import Background from "../components/Background";
import Content from "../components/Content";
import { Title, Subtitle, Paragraph } from "../components/Text";
import { NeoLayer, MediumLayer, AvatarImg, Verified } from "../components/Avatar";
import { ContainerPost, PostContainer, FollowersContainer, FollowingContainer, PostTitle, PostSubtitle } from "../components/Posts"
import { HighlightC, AddCircle, TravelIcon, ClothesIcon, FoodIcon, BooksIcon, IconBox, Text, Box } from "../components/Highlights";
import { BoxPhotos, Photos, Videos } from "../components/Photos";
import { useGetUser, useGetMedia} from "../hooks/useGetUsers";
import '../global.css';


const BASE_API = 'https://graph.instagram.com/me';
const ACCESS_TOKEN ='IGQVJVM2FaWWo1YThPWDFHM1hxWG1aSjczaDRvQ0xFREtZAeUlqN3RKTWloTmltZAkVEUEZAqQW5sUVB4dDJQS0pxeWIxeDAyU1MwRV83MEVUSWJIV1RIcFZAfRXFlRmRGX1RaUXJnUldfS0w3anRITW40bAZDZD';

const App = () => {

    const response = useGetUser(BASE_API, ACCESS_TOKEN);
    const media = useGetMedia(BASE_API, ACCESS_TOKEN);
    console.log(media);
    return (
    <Wrapper>
        <Background>
            <ArrowIcon />
            <SettingsIcon />
        </Background>
        <Content>
        <NeoLayer>
            <MediumLayer>
                        <AvatarImg />
                        <Verified />
            </MediumLayer>
        </NeoLayer>
                <Title>{response.username}</Title>
        <Subtitle>Digital Creator</Subtitle>
        <Paragraph>I love 3D Design, it make me feel amazing.</Paragraph>
        <ContainerPost>
            <PostContainer>
                <PostTitle>81</PostTitle>
                <PostSubtitle>Posts</PostSubtitle>
            </PostContainer>
            <FollowersContainer>
                <PostTitle>292K</PostTitle>
                <PostSubtitle>Followers</PostSubtitle>
            </FollowersContainer>
            <FollowingContainer>
                <PostTitle>73</PostTitle>
                <PostSubtitle>Following</PostSubtitle>
            </FollowingContainer>
        </ContainerPost>
        <HighlightC>
            <Box>
                <IconBox>
                    <AddCircle />
                </IconBox>
                <Text>New</Text>
            </Box>
            <Box>
                <IconBox>
                    <FoodIcon />
                </IconBox>
                <Text>Food</Text>
            </Box>
            <Box>
                <IconBox>
                    <ClothesIcon />
                </IconBox>
                <Text>Clothes</Text>
            </Box>
            <Box>
                <IconBox>
                    <TravelIcon />
                </IconBox>
                <Text>Travel</Text>
            </Box>
            <Box>
                <IconBox>
                    <BooksIcon />
                </IconBox>
                <Text>Books</Text>
            </Box>
        </HighlightC>
        <BoxPhotos>
                    {
                        media.data?.map((me) => (
                            <Photos src={me.media_url} key={me.id} />
                        ))
                    }
        </BoxPhotos>
        </Content>
    </Wrapper>
    )
}
export default App;
