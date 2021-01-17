import React, { ReactElement } from "react";
import { Container, List } from "semantic-ui-react";
import { VideoData, VideosData } from "./App";
import VideoItem from "./VideoItem";

type VideoListProps = {
  videos: VideosData;
  onVideoSelect: (video: VideoData) => void;
};

const VideoList = ({ videos, onVideoSelect }: VideoListProps): ReactElement => {
  return (
    <Container>
      <List divided>
        {videos.map((video) => (
          <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        ))}
      </List>
    </Container>
  );
};

export default VideoList;
