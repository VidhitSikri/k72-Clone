import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756708870~exp=1756712470~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=284b3bcd73710292ddb35935cd043306348fbec5477a3b36736efbe7f951dbc3&r=dXMtd2VzdDE%3D"
        ></video>
    </div>
  )
}

export default Video
