import { Suspense } from "react"
import Audio from "./Audio"
import datosAudios from "@/data/dataAudios"


const AudioGroup = () => {
  return (
    <div className="container audio-group">
      {datosAudios.map((audio) => {
        return (
          <Suspense>
            <div>
              <Audio
                key={audio.id}
                src={audio.src}
                controls={true}
                autoplay={false}
                muted={false}
                preload={false}
              />
              <div className="text-left mx-3 fw-bold">
                <span>
                  <p>{audio.title}</p>
                </span>
              </div>
            </div>
          </Suspense>
        )
      })}
    </div>
  )
}

export default AudioGroup