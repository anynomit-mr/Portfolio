import {Whatsapp} from './Bar';

const whatsapp = (e)=>{
	e.preventDefault();
  const message = e.target[0].value;
  const phoneNumber = "918112337820";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  e.target[0].value= "";
  window.open(url,"_blank");
}
const email =(e)=>{
	e.preventDefault();
	const subject = encodeURIComponent(`Message from ${e.target[0].value},${e.target[1].value}`);
	const body = encodeURIComponent(`${e.target[2].value} \n\nRegards,\n${e.target[0].value}\n${e.target[1].value}`)
	const mailtoLink = `mailto:arunsin0211@gmail.com?subject=${subject}&body=${body}`;

    const link = document.createElement('a');
     link.href=mailtoLink;
     link.target="_blank";
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
     e.target[0].value="";
     e.target[1].value="";
     e.target[2].value="";
}

export default function Contact(){
 return <div className={`w100v h100v df ffsu fdc bgbg`}>
	<div className={`w100 hr5`}></div>
	<div className="f1 w100 df jcc fdr fdc">
	  <div className="w40 f1 df jcc aic">
	    <div className="w80 h80 df fdc aic gp1">
		<h1>Ping WhatsApp : </h1>
	
		<div className="w50 df jcc aic ">
			<Whatsapp size="30" />
			<a className="txtdn" target="_blank" href="https://api.whatsapp.com/send/?phone=918112337820">&nbsp;+91-8112337820</a>
		</div>
		<form className="mt1" onSubmit={whatsapp} >
		   <div>
	              <textarea className="wr20 hr5 brr5 p0502" placeholder="Type your Message here..."/>
		   </div>
			<div className="w100 df aic mt1 jcc"><button type=""submit className="p0502 btn-bgtr brr5 trn05e cold">Send</button></div>
		</form>
	    </div></div>
	  <div className="w40 f1 df jcc aic">
	    <div className="w80 h80">
		<h1>E-mail ME : </h1>
		<form className="mt1 df fdc gp05" onSubmit={email} >
		   <div className="df fdr jca"><p className="m0" >Name : </p><input className="wr20 brr5 " name="Name" placeholder="Your Name"/></div>
		   <div className="df fdr jca"><p className="m0" >Company:</p><input className="wr20 brr5" placeholder="Your Company Name"/></div>
		   <div className="df fdr jca">
		      <p className="m0" >Message : </p>
	              <textarea className="wr20 hr5 brr5 p0502" placeholder="Type your Message here..."/>
		   </div>
			<div className="w100 df aic mt1 jcc"><button type=""submit className="p0502 btn-bgtr brr5 trn05e cold">Send</button></div>
		</form>
		
	    </div></div>
	</div>
</div>
}