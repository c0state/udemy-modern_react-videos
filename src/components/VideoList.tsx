import React from "react";
import { Container, List } from "semantic-ui-react";
import { VideoData, VideosData } from "./App";
import VideoItem from "./VideoItem";

type VideoListProps = {
  videos: VideosData;
  onVideoSelect: (video: VideoData) => void;
};

class VideoList extends React.Component<VideoListProps> {
  componentDidMount() {
    this.props.onVideoSelect(this.props.videos[0]);
  }

  render() {
    return (
      <Container>
        <List divided>
          {this.props.videos.map((video) => (
            <VideoItem
              key={video.id.videoId}
              video={video}
              onVideoSelect={this.props.onVideoSelect}
            />
          ))}
        </List>
      </Container>
    );
  }
}

export default VideoList;
