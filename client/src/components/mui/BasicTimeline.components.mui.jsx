import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export default function LeftPositionedTimeline(props) {

  const tlElementsHTML = props.elements.filter(ek => ek.index !== 5).map((el) => {
    return (
      <TimelineItem onClick={() => props.goToElement(el.index)}>
        <TimelineSeparator>
          <TimelineDot sx={el.index<=props.current && {background: "rgb(34, 239, 34)"}}/>
          <TimelineConnector sx={el.index<=props.current && {background: "rgb(34, 239, 34)"}}/>
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ textDecoration: props.current===el.index && "underline", color: el.index<=props.current ? "rgb(34, 239, 34)" : "black" }} className='tl-button'>{el.description}</div>
        </TimelineContent>
      </TimelineItem>
    )
  })

  return (
    <Timeline position="left">

      {tlElementsHTML}

      <TimelineItem onClick={() => props.goToElement(5)}>
        <TimelineSeparator>
          <TimelineDot sx={5<=props.current && {background: "rgb(34, 239, 34)"}}/>
        </TimelineSeparator>
        <TimelineContent>
          <div style={{ textDecoration: props.current===5 && "underline", color: 5<=props.current ? "rgb(34, 239, 34)" : "black" }} className='tl-button'>Completed</div>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
