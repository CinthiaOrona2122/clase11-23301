import { Suspense } from 'react'
import ReactPlayer from 'react-player/lazy'

const Video = (props) => {
  return (
    <Suspense>
      <ReactPlayer
        url={props.src}
        title={props.title}
        width={props.width}
        height={props.height}
        frameBorder={props.frameBorder}
        controls={props.controls}
        playing={props.playing}
        muted={props.muted}
      />
    </Suspense>
  )
}

export default Video