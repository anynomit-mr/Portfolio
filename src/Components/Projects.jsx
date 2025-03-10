import {useState} from 'React';
import Certificates from './Certificates';

export default function Projects() {

 	const [opt,setopt]=useState("Certi");

return (<div className={`w100v h100v df ffsu fdc bgbg`}>
	<div className={`w100 hr5`}></div>
	<div className="f1 w100 df fdc">
	  <div className="h100 w18 pof bxsd df ffpop fdc aic gp1" name="sideNav">
		<div className={`cup mtr5 gp05 df jcc aic fdc fw400 ${opt=="Certi" ? "col" : ""}`} onClick={()=>{setopt("Certi")}}> Certificates <div className="highlighter"></div></div>
		<div className={`cup gp05 df jcc aic fdc fw400 ${opt=="Prjct" ? "col" : ""}`} onClick={()=>{setopt("Prjct")}}> Projects <div className="highlighter"></div></div>
		<div className={`cup gp05 df jcc aic fdc fw400 ${opt=="Score" ? "col" : ""}`} onClick={()=>{setopt("Score")}}> Web Ratings <div className="highlighter"></div></div>
	  </div>
	  <div className={`w100 df fdr jcc aic ${opt=="certi" ?"pof":""}`}><h1 className=" mt1 ffpop">Cetifications & Projects</h1></div>
	  <div className="w100 f1 df fdr">
	    	<div className="w18 h100"></div>
		<div className={`h100 f1 flwrp df jcfs acfs ${opt=="Score" ? "gp1":""} aic fdr`}>
		   {opt=="Certi" && <Certificates />}
		   {opt=="Prjct" && <Proj />}
		   {opt=="Score" && <Score />}
		</div>
	  </div>
	</div>
</div>)}

function Proj(){
return <>
	<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>Web Devs</h2>
	   <div className="f1 w100 df fdr acfs aic flwrp gp1">
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Portfolio</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Portfolio</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Portfolio</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Portfolio</a></li>
	   </div>
	</div>
	<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>Cyber Security</h2>
	   <div className="f1 w100 df fdr acfs aic flwrp gp1">
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Restart_Malware</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Spoof (Insta)</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">KeyLogger</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Location_getter</a></li>
	   </div>
	</div>
	<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>JAVA Apps</h2>
	   <div className="f1 w100 df fdr acfs aic flwrp gp1">
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">AI Integration</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Cibil Score</a></li>
	   </div>
	</div>
	<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>Express Apps</h2>
	   <div className="f1 w100 df fdr acfs aic flwrp gp1">
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">AI Integration</a></li>
		<li className="lsn df fdr jcfs"><a className="fw400 hnam hnam cbl" href="/">Cibil Score</a></li>
	   </div>
	</div>
</>}



function Score(){
	
	return <>
		<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>Web Devs</h2>
	   <div className="f1 w100 df fdc acfs jcfs aic flwrp ">
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">Naukari Code360</a> <p className="m0">600</p></li>
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">LeetCode</a> <p className="m0">600</p></li>
	   </div>
	</div>
		<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>Cyber Security</h2>
	   <div className="f1 w100 df fdc acfs jcfs aic flwrp ">
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">TryHackMe</a> <p className="m0">600</p></li>
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">HackTheBox</a> <p className="m0">600</p></li>
	   </div>
	</div>
		<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>JAVA</h2>
	   <div className="f1 w100 df fdc acfs jcfs aic flwrp ">
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">TryHackMe</a> <p className="m0">600</p></li>
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">HackTheBox</a> <p className="m0">600</p></li>
	   </div>
	</div>
		<div className="ml05 w25 acfs hr10 df fdc aic">
	   <h2>Python</h2>
	   <div className="f1 w100 df fdc acfs jcfs aic flwrp ">
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">TryHackMe</a> <p className="m0">600</p></li>
		<li className="lsn df w80 fdr jca aic"><a className="fw400 hnam hnam cbl" href="/">HackTheBox</a> <p className="m0">600</p></li>
	   </div>
	</div>

</>
}
















