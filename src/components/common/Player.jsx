/* eslint-disable react/prop-types */
import ReactPlayer from "react-player"
// import video from '../../assets/file_example_MP4_640_3MG.mp4'

export const Player = (props) => {
  if (props?.url) {
    return (
      <ReactPlayer
        url={props?.url}
        controls={props.controls ? props.controls : true}
        width={props.width ? props.width : '100%'}
        height={props.height ? props.height : '320px'}
        muted={props.muted ? props.muted : false}
      />
    )
  } else {
    return (
      <div className={`${props.height ? props.height : 'h-[320px]'} ${props.width ? props.width : 'w-full'} bg-gray-200 flex justify-center items-center`}>
        <p className="text-2xl font-bold text-Primary animate-pulse">Error</p>
      </div>
    )
  }
}