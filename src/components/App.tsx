import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import { VideoDetail } from "./VideoDetail";

export type VideoData = {
  id: { videoId: string };
  kind: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
};
export type VideosData = VideoData[];

type AppState = {
  videos: VideosData;
  selectedVideo?: VideoData;
};

class App extends React.Component {
  state: AppState = { videos: [] };

  onSearch = async (term: string) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ ...this.state, videos: response.data.items });
  };

  onVideoSelect = (video: VideoData) => {
    this.setState({ ...this.state, selectedVideo: video });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <SearchBar onSearch={this.onSearch} />
        </Container>
        {this.state.selectedVideo && (
          <VideoDetail video={this.state.selectedVideo} />
        )}
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
