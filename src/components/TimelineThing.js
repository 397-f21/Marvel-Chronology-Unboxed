import React, { useState } from 'react';
import '../App.css';

import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

const TimelineThing = ({ movie }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <img height='100px' src={movie.url} alt='marvel'></img>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <div onClick={() => setIsClicked(!isClicked)}>
          <TimelineDot
            color={isClicked ? 'success' : 'primary'}
            variant={isClicked ? 'filled' : 'outline'}
          />
        </div>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{movie.name}</TimelineContent>
    </TimelineItem>
  );
};

export default TimelineThing;
