// == Import
import BackgroundVideo from '../assets/pexels-rostislav-uzunov-7385122.mp4';

// == Composant
const Video = () => (
    <div className="content-video">
        <video className ='background-video' autoPlay loop muted>
            <source src={BackgroundVideo} type='video/mp4'/>
        </video>    
    </div>
);

// == Export
export default Video;
