import { Suspense } from "react"

const Audio = (props) => {
  return (
    <Suspense fallback={<Loading/>}>
      <audio
      src={props.src}
      title={props.title}
      controls={props.controls}
      autoplay={props.autoplay}
      muted={props.muted}
      preload={props.preload}      
    >
      <track kind="captions" />
    </audio>

    </Suspense>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}


export default Audio