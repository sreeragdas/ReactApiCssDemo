
import "./style.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SearchIcon from '@mui/icons-material/Search';
import MonitorIcon from '@mui/icons-material/Monitor';
function First() {
  return (
    <div>
      <div className="Appbox">
        <div className="titleName">Reliable efficient delivery</div>
        <div className="titleNametwo">Powered By Technology</div>
        <div className="para">
          Our Artificial intelligence powered tools use million of project data
        </div >
        <div className="paratwo">points to enure that your project is successfull</div>
      </div>
      <div>
        <div className="firstBox">
          <div className="rectangleFirst">
            <div className="innertitle">Team Builder</div>
            <div className="innerpara">Scans our tolet network to create the </div>
            <div className="innerparatwo">optimal team for your project</div>
            <div style={{textAlign:'end' , marginRight:'30px' , marginTop:'20px' , padding:'10px'}}>
              <DriveFolderUploadIcon style={{ fontSize: 50 }}/>
            </div>
          </div>
        </div>
        <div className="leftBox">
          <div className="rectangleSecond">
            <div className="innertitle">Supervisor</div>
            <div className="innerpara">Monitors actively to identify project</div>
            <div className="innerparatwo">roadblocks</div>
            <div style={{textAlign:'end' , marginRight:'30px' , marginTop:'20px' , padding:'10px'}}>
              <SearchIcon  style={{ fontSize: 50 }}/>
            </div>
          </div>
        </div>
        <div style={{display:'flex' , flexDirection:'row' , justifyContent:'right' , marginTop:'-80px' , marginLeft:'-50px'}}>
        <div className="rectanglefourth">
          <div className="innertitle">Calculator</div>
          <div className="innerpara">Uses data from past projects to provide </div>
          <div className="innerparatwo">beter delivery estimates</div>
          <div style={{textAlign:'end' , marginRight:'30px' , marginTop:'20px' , padding:'10px'}}>
          <MonitorIcon style={{ fontSize: 50 }}/>
          </div>
        </div>
      </div>

      <div className="LastBox">
        <div className="rectanglethird">
          <div className="innertitle">Karma</div>
          <div className="innerpara">Regularly evaluates our talen to ensure </div>
          <div className="innerparatwo">quality</div>
          <div style={{textAlign:'end' , marginRight:'30px' , marginTop:'20px' , padding:'10px'}}>
            <TipsAndUpdatesIcon style={{ fontSize: 50 }}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default First;
