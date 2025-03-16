import {useState, useEffect} from 'React';
export default function Home(){
	const [Hire,setHire]=useState(false);
	const [mobile,setmobile]=useState('');
	const [salary,setsalary]=useState('');

	const DownloadCV = ()=>{
	   const link = document.createElement('a');
	   link.href="Resume Arun.pdf";
	   link.download="Resume_Arun.pdf";
	   document.body.appendChild(link);
	   link.click();
	   document.body.removeChild(link);
}
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hiring Offer for ${role}`);
    const body = encodeURIComponent(
      `Hello Arun,\n\nI would like to offer a position at ${company} for the role of ${role}.\n\nContact Details:\nName: ${name}\nMobile: ${mobile}\nOffered Salary: ${salary} LPA\n\nRegards,\n${name}\n${company}`
    );

    const mailtoLink = `mailto:arunsin0211@gmail.com?subject=${subject}&body=${body}`;

    const link = document.createElement('a');
     link.href=mailtoLink;
     link.target="_blank";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
  setTimeout(() => {
    setCompany("");
    setRole("");
    setHire(false);
    setName("");
    setmobile("");
    setsalary("");
  }, 500);

};



  return (<div className="Home">
	<div className="hr5 w100"></div>
	<div className="w100 por f1 df jcc aic fdr">
	  <div className={`trn15e poa df jcc aic w100 h100 `}>
	    <div className="w60 h100 df jcc fdc por aic " >
		<p className="col mt0 mb0 ffpop ml4 panm">D E S I G N &nbsp;&nbsp; D E V E L O P E &nbsp;&nbsp; & &nbsp;&nbsp; S E C U R I T Y</p>
		<h1 className="mt0 mb0 fw900 talc trn05e panm ffsu fs25">Hi, I am <span className="ffpop hnam col"><span className="fstr">A</span>run <span className="fstr">S</span>ingh.</span> Looking <br /> for a position in IT Sector.</h1>
		<br />
		<div className="w80 df fdr aic jcfs panm gp2 ">
		  <button className="ffpop ml4 trn05e fwb btn-bgol cup cwh brr5 p0502" onClick={()=>{setHire(true);}}>Hire ME</button>
		  <button className="ffpop trn05e fwb btn-bgtr cup col brr5 p0502" onClick={DownloadCV}> Download CV</button>
		</div>
		<div className="poa df w80 ml25 b05 jcfs gp2 aic fdr">
		   <div className="hr3 wr3 df jcc aic trn05e talc fs2 col tr btn-bgtr br50 ffsu fwb"><a className="txtdn" href=" www.facebook.com/profile.php/?=">f</a></div>
		   <div className="hr3 wr3 df jcc aic trn05e talc fs2 col tr btn-bgtr br50 ffsu fwb"><a className="txtdn" href="www.linkedin.com/arunsinghkshtriya">in</a></div>
		   <div className="hr3 wr3 df jcc aic trn05e talc fs2 col tr btn-bgtr br50 ffsu fwb"><a className="txtdn" href="www.x.com/mranynomit">X</a></div>
		</div>
	    </div>
	    <div className="w40 h100 df jcc aic por">
		{Hire ? <div className="w100">
			<h1 className="m0"><span className="col">Hire</span> Form :</h1>
			<div className="poa ffsu cup fwb" onClick={()=>{setHire(false)}} style={{top:"1em",right:"3.5em",color:"red",zIndex:2}}>X</div>
			<form className="w100 df jsc fdc gp05 aic" onSubmit={handleSubmit} autocomplete="off">
			   <div className=" mt05 w80 por">
				<input type="text" name="Company" placeholder="" required={true} value={company} onChange={(e)=>{setCompany(e.target.value)}} className="w80 hr15 brr5 otln" />
				<label htmlFor="Company" className="poa">&nbsp;Company Name&nbsp;</label>
			   </div>
			   <div className=" mt05 w80 por">
				<input type="text" name="Role" placeholder="" value={role} required={true} onChange={(e)=>{setRole(e.target.value)}} className="w80 hr15 brr5 otln" />
				<label htmlFor="Role" className="poa">&nbsp;Role&nbsp;</label>
			   </div>
			   <div className=" mt05 w80 por">
				<input type="text" name="Person" placeholder="" value={name} required={true} onChange={(e)=>{setName(e.target.value)}} className="w80 hr15 brr5 otln" />
				<label htmlFor="Person" className="poa">&nbsp;Name&nbsp;</label>
			   </div>
			   <div className=" mt05 w80 por">
				<input type="text" name="Number" value={mobile} required={true} onChange={(e)=>{setmobile(e.target.value.length>10 ?mobile :e.target.value.replace(/[^0-9]/g, ''))}} placeholder="" className="w80 hr15 brr5 otln" />
				<label htmlFor="Number" className="poa">&nbsp;Mobile No.&nbsp;</label>
			   </div>
			   <div className=" mt05 w80 por">
				<input type="text" name="Salary" value={salary} required={true} onChange={(e)=>{setsalary(e.target.value.length>10 ?salary :e.target.value.replace(/[^0-9]/g, ''))}} placeholder="" className="w80 hr15 brr5 otln" />
				<label htmlFor="Salary" className="poa">&nbsp;Salary(LPA)&nbsp;</label>
			   </div>
			   <button type="submit" className="ffpop mt05 trn05e fwb btn-bgol sub-btn cup cwh brr5 p0502">Offer Me</button>
			</form>
</div> :(<><img src="profile.png" className="br50 hop8 zi2 wr20 hr20 imganm"></img>
		<div className="poa br50 hr22 wr22 bgtr ringanm"></div></>)}
	    </div>
	  </div>
<div className={`trn15e poa df jcc aic w100 h100 `}>
	    <div className="w60 h100 df jcc fdc por aic ">
		<p className="col mt0 mb0 ffpop ml4 panm anmd5">H e l l o <span className="ffsu">,</span>&nbsp;&nbsp; I &nbsp;&nbsp;a m&nbsp;&nbsp;&nbsp;<span className="cold">A R U N &nbsp;&nbsp;&nbsp;S I N G H</span></p>
		<h1 className="mt0 mb0 fw900 talc panm anmd5 trn05e ffsu fs25">UI/UX Designer/<span className="ffpop hnam col">Developer</span><br /> Data Analysis & Cyber Security</h1>
		<br />
		<div className="w80 df fdr aic jcfs panm anmd5 gp2 ">
		  <button className="ffpop ml4 trn05e fwb btn-bgol cup cwh brr5 p0502" onClick={()=>{setHire(true)}}>Hire ME</button>
		  <button className="ffpop trn05e fwb btn-bgtr cup col brr5 p0502" onClick={DownloadCV}> Download CV</button>
		</div>
		<div className="poa df w80 ml25 b05 jcfs gp2 aic fdr">
		   <div className="hr3 wr3 df jcc aic trn05e talc fs2 col tr btn-bgtr br50 ffsu fwb"><a className="txtdn" href=" www.facebook.com/profile.php/?=">f</a></div>
		   <div className="hr3 wr3 df jcc aic trn05e talc fs2 col tr btn-bgtr br50 ffsu fwb"><a className="txtdn" href="www.linkedin.com/arunsinghkshtriya">in</a></div>
		   <div className="hr3 wr3 df jcc aic trn05e talc fs2 col tr btn-bgtr br50 ffsu fwb"><a className="txtdn" href="www.x.com/mranynomit">X</a></div>
		</div>
	    </div>
	    <div className="w40 h100 df jcc aic por ">
		{!Hire && <><img src="about.jpg" className="br50 hop8 zi2 wr20 hr20 imganm anmd5"></img>
		<div className="poa br50 hr22 wr22 bgtr ringanm anmd5 "></div></>}
	    </div>
	  </div>
	</div>
</div>)
}