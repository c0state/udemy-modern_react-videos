import {
  Container,
  Embed,
  Header,
  PlaceholderParagraph,
  Segment,
} from "semantic-ui-react";
import { VideoData } from "./App";

type VideoDetailProps = {
  video: VideoData;
};

export const VideoDetail = ({ video }: VideoDetailProps) => {
  return (
    <Container>
      <Segment>
        <Embed source="youtube" id={video.id.videoId} />
        <Header size={"large"}>{video.snippet.title}</Header>
        <PlaceholderParagraph>{video.snippet.description}</PlaceholderParagraph>
      </Segment>
    </Container>
  );
};
