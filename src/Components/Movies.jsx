import "../style/Movies.css"
import movieImg from "../images/Movies.png" 
import Play from "../images/Play.png" 
import plus from "../images/plus.png" 
import stop from "../images/stop.png" 
import UA13 from "../images/UA13.png" 
import addToWishlist from "../images/addToWishlist.png"
import MIRZAPUR from "../Video/MIRZAPUR.mp4"


const Movies = () => {
    function handleMouseIn(e) {
        // console.log(e);
        e.target.play();
      }
      function handleMouseOut(e) {
        e.target.pause();
      }
      
    return (
        <div className="moviesDiv">
            <div className="movies">
                <video muted onMouseEnter={handleMouseIn} onMouseOut={handleMouseOut}><source src={MIRZAPUR}></source> </video>
               {/* <img src={movieImg} alt="" /> */}
            </div>
            <div className="movieDetails">
                <div className="Div1">
                    <img src={Play} alt="" />
                    <span>Play</span>
                    <img src={plus} alt="" />
                    <img src={stop} alt="" />
                </div>
                <p>Included with Prime</p>
                <div className="Div2">
                    <span > Bell Bottom</span>
                    <img src={UA13} alt="" />
                </div>
                <p>An undercover agent code-named Bellbottom embarks on a covert mission to free 210 hostages held by hijackers.</p>
                <div className="Div3">
                    <span>2021</span>
                    <span>Family/Comedy </span>
                    <span>1h 41m </span>
                    <div>
                       <img src={addToWishlist}alt="" />
                    </div>
                </div>
            </div>
          
          
          
        </div>
     )
}
 
export default Movies