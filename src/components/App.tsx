import React from "react";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Placeholder,
} from "semantic-ui-react";
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
    this.setState({
      ...this.state,
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video: VideoData) => {
    this.setState({ ...this.state, selectedVideo: video });
  };

  render() {
    return (
      <Container className="App">
        <SearchBar onSearch={this.onSearch} />
        <Grid>
          <GridRow>
            <GridColumn width="11">
              {this.state.selectedVideo ? (
                <VideoDetail video={this.state.selectedVideo} />
              ) : (
                <Container />
              )}
            </GridColumn>
            <GridColumn width="5">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    );
  }
}

export default App;
