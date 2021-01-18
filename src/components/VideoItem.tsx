/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { VideoData } from "./App";
import { Image, ItemHeader, ListContent, ListItem } from "semantic-ui-react";

type VideoListItemProps = {
  video: VideoData;
  onVideoSelect: (video: VideoData) => void;
};

const VideoListItem = ({ video, onVideoSelect }: VideoListItemProps) => {
  return (
    <ListItem
      css={css`
        display: flex !important;
        align-items: center !important;
        cursor: pointer;
      `}
      onClick={() => onVideoSelect(video)}
    >
      <Image
        css={css`
          max-width: 180px !important;
        `}
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <ListContent>
        <ItemHeader>{video.snippet.title}</ItemHeader>
      </ListContent>
    </ListItem>
  );
};

export default VideoListItem;
