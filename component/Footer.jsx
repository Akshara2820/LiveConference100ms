import { useAVToggle } from "@100mslive/react-sdk";
import {BsMicMute} from 'react-icons/bs';
import {GoUnmute} from 'react-icons/go';
import {BsCameraVideoFill, BsCameraVideoOffFill} from 'react-icons/bs';

function Footer() {
  const {
    isLocalAudioEnabled,
    isLocalVideoEnabled,
    toggleAudio,
    toggleVideo
  } = useAVToggle();
  return (
    <div className="control-bar">
      <button className="" onClick={toggleAudio}>
        {isLocalAudioEnabled ? <BsMicMute className="mute"/> : <GoUnmute  className="mute"/>}
      </button>
      <button className="" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <BsCameraVideoOffFill className="mute"/> : <BsCameraVideoFill className="mute"/>}
      </button>
    </div>
  );
}

export default Footer;
