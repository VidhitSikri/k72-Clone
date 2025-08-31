import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756672224~exp=1756675824~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=cdb0b26f587e5ed74d6a74df0715bf0a22b614b618000b96b2fc088e9ad0273c&r=dXMtd2VzdDE%3D"
        ></video>
    </div>
  )
}

export default Video
