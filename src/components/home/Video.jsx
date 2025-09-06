import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757189772~exp=1757193372~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=b065bf78398ac0d2b7c7e60894e67f8da968b659e06042b0b643dffc9c557005&r=dXMtd2VzdDE%3D"
        ></video>
    </div>
  )
}

export default Video
