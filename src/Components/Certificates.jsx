export default function Certificates (){
  return (<>	
	<div className="hr150 ml05 df jcc aic cup fdc" onClick={()=>{const link=document.createElement('a');link.href="10.pdf";link.download="Arun_10th.pdf";link.click();}}><iframe  src="10.pdf" className="mb05 brr5 nscrl cup"  title="High School"></iframe> High School</div>
	<div className="hr150 df jcc aic cup fdc" onClick={()=>{const link=document.createElement('a');link.href="12.pdf";link.download="Arun_12th.pdf";link.click();}}><iframe  src="12.pdf" className="mb05 brr5 nscrl cup"  title="Interediate"></iframe> Intermediate </div>
	<div className="hr150 df jcc aic cup fdc" onClick={()=>{const link=document.createElement('a');link.href="grad.pdf";link.download="Arun_Graduation.pdf";link.click();}}><iframe  src="grad.pdf" className="mb05 brr5 nscrl cup"  title="Graduation"></iframe>B.Tech (Mechanical Engg) </div>
	<div className="hr150 ml05 df jcc aic cup fdc" onClick={()=>{const link=document.createElement('a');link.href="lead.pdf";link.download="Arun_Experience.pdf";link.click();}}><iframe  src="lead.pdf" className="mb05 brr5 nscrl cup"  title="Experience"></iframe>Experience (Team Lead) </div>
</>)
}