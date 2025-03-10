export default function About(){

const callMe = ()=>{
	const link = document.createElement('a');
	link.href="call:+918112337820";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
const emailMe = ()=>{
	const link = document.createElement('a');
	link.href="mailto:arunsin0211@gmail.com";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

return (<div className="w100v h100v df fdc ffsu">
	<div className="w100 hr5"></div>
	<div className="w100 por f1 df jcc aic fdr">
	   <div className="w40 h100 df fdr jcc aic">
		<img className=" br50 w80 aspr11" src="about.jpg"></img>
	   </div>
	   <div className="w60 h100 df fdc gp1 jcc aic">
		<p className="w100 m0 col fwb">M Y &nbsp;&nbsp; I N T R O</p>
		<h1 className="m0 w100 ffpop fs2">About ME</h1>
		<p className="w100 m0">Hi, I'm <span className="cold fwb">Arun Singh</span>!</p>
		<p className="m0 w100">A passionate web developer with expertise in MERN stack and a keen interest in cybersecurity,<br/> <span className="cold fwb">UI/UX Designing (Figma)</span> & Data Analysis. I love building seamless web experiences, exploring ethical hacking, and creating secure applications. Always learning, always innovating!</p>
		<div className="w100 df fdr">
		   <div className="w50 df jcc fdc gp1">
			<p className="mb0"><span className="fwb cold">Birthday:</span>&nbsp;02 November 1998</p>
			<p className="m0"><span className="fwb cold">Mobile No.:</span>&nbsp;<span className="cup" onClick={callMe}>+91-8112337820</span></p>
			<p className="m0"><span className="fwb cold">Availability:</span>&nbsp;Open for hire</p>
			<p className="m0"><span className="fwb cold">City:</span>&nbsp;Sector 59, Noida</p>
		   </div>
		   <div className="w50 df jcc fdc gp1">
			<p className="mb0"><span className="fwb cold">Age:</span>&nbsp;26</p>
			<p className="m0"><span className="fwb cold">Email-id:</span>&nbsp;<span className="cup" onClick={emailMe}>arunsin0211@gmail.com</span></p>
			<p className="m0"><span className="fwb cold">Degree:</span>&nbsp;B.Tech (Mechanical Engg.)</p>
			<p className="m0"><span className="fwb cold">Relocation:</span>&nbsp;Ready to Relocate</p>
		   </div>
		</div>
		<div className="hr15"></div>
	   </div>
	   <div className="poa b2 w80 df fdc gp05">
		<h2 className="cold m0 talc ">Passport Details: -</h2>
		<div className="w100 df jca aic fdr">
		   <p className="m0"><span className="fwb cold">Passport No:</span>&nbsp; C7235096</p>
		   <p className="m0"><span className="fwb cold">Issue Date:</span>&nbsp;18/02/2025</p>
		   <p className="m0"><span className="fwb cold">Expiry Date:</span>&nbsp;17/02/2035</p>
		</div>
	   </div>
	</div>
</div>)
}