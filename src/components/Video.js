// == Import
import BackgroundVideo from '../assets/pexels-rostislav-uzunov-7385122.mp4';

// == Composant
const Video = () => (
    <video className ='background-video' autoPlay loop muted>
        <source src={BackgroundVideo} type='video/mp4'/>
    </video>
);

// == Export
export default Video;
