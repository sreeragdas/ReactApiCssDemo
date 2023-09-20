import "./second.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
function SecondDesign() {
  return (
    <div className="main">
      <div className="box">
        <div className="title">Join our community</div>
        <div className="secondTitle">30 days , hassle-free money back guarantee</div>
        <div className="colorFont">
          Gain access to our full library of tutorials along with expert coding
          reviews.
        </div>
        <div className="colorFont">
          Perfect for any developers who are serious about honing the skills
        </div>
        <div className="inner-box" style={{marginTop:'-30px'}}>
          <div className="firstBoxdesign">
            <div style={{marginTop:'75px'}}>
              <div className="fontColor" >Montly Subscription</div>
            </div>
            <div style={{display:'flex' , flexDirection:'row' , marginTop:'15px' }}>
            <div className="dollar">$29 </div>
            <div style={{color:'#ffffff' , marginLeft:'7px' , marginTop:'8px'}}>per month</div>
            </div>
           
            <div className="fontColor">Full access for less than $1 per day.</div>
            <div style={{marginTop:'20px'}}>
              <button className="button">Sign Up</button>
            </div>
          </div>
          <div className="SecondBox">
            <div style={{marginTop:'78px' , marginBottom:'20px'}}>
              <div className="fontColor">Why Us</div>
            </div>
            <div className="fontColor">Tutorials by industry expert</div>
            <div className="fontColor">Peer & expert code review</div>
            <div className="fontColor">Code execises</div>
            <div className="fontColor">Access to github repo</div>
            <div className="fontColor">Comunity form</div>
            <div className="fontColor">Flashcard decks</div>
            <div className="fontColor">New video every week</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondDesign;
