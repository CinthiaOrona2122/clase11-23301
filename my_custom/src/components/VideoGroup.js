import { Suspense } from "react"
import Video from "./Video"
import datosVideos from "@/data/dataVideos"

const VideoGroup = () => {
  return (
    <div className="container video-group">
      {datosVideos.map((video) => {
        return (
          <Suspense>
            <div>
              <Video
                src={video.src}
                key={video.id}
                width={300}
                height={150}
                frameBorder={0}
                controls={true}
                muted={false}
              />
              <div className="text-left mx-3 fw-bold">
                <span>
                  <p>{video.title}</p>
                </span>
              </div>
            </div>
          </Suspense>
        )
      })}
    </div>
  )
}

export default VideoGroup