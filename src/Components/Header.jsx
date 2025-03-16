export default function Header({page, setpage}){
  return <header className={`pof df hr5 w100 fdr jca aic trn05e gp4 ${page != "Home" ? "bxsd":""}`}>
	<div>
	  <a className="df jcc aic txtdn" href="/">
	    <img className="br50 hr3 wr3" src="logo.png" alt="ARUN" ></img>
	    <p>&nbsp;&nbsp;&nbsp;</p>
	    <h1 className="fs25 m0 ffpop fw900 col"><span className="cold">A</span>RUN <span className="cold">.</span></h1>
	  </a>
	</div>
	<nav className="df jcc aie h100"> 
	  <ul className="df jcfe aic gp2 mt0 lsn">
		<li className={`${page=="Home"?"col":" "} df jcc cup fdc aic gp05 ffpop fw400`} onClick={()=>{setpage("Home")}}>Home
		   <div className="highlighter"></div>
		</li>
		<li className={`${page=="Abou"?"col":""} df jcc cup fdc aic gp05 ffpop fw400`} onClick={()=>{setpage("Abou")}}>About
		   <div className="highlighter"></div>
		</li>
		<li className={`${page=="Expe"?"col":""} df jcc cup fdc aic gp05 ffpop fw400`} onClick={()=>{setpage("Expe")}}>Experience
		   <div className="highlighter"></div></li>
		<li className={`${page=="Skil"?"col":""} df jcc cup fdc aic gp05 ffpop fw400`} onClick={()=>{setpage("Skil")}}>Skill
		   <div className="highlighter"></div>
		</li>
		<li className={`${page=="Proj"?"col":""} df jcc cup fdc aic gp05 ffpop fw400`} onClick={()=>{setpage("Proj")}}>Certification
		   <div className="highlighter"></div>
		</li>
		<li className={`${page=="Cont"?"col":""} df jcc cup fdc aic gp05 ffpop fw400`} onClick={()=>{setpage("Cont")}}>Contact
		   <div className="highlighter"></div>
		</li>
	  </ul>
	</nav>
</header>
}