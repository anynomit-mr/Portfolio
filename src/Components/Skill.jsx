import React from "react";
import {useState} from 'react';
import CircularProgress from './Bar'

const skills = [
  {name: "Languages",
    subskill: [{ name: "HTML", strength: 95 },{ name: "JavaScript", strength: 75 },{ name: "Java", strength: 80 },{ name: "Python", strength: 70 },
    ],
  },
  {name: "Framework",
    subskill: [{ name: "React", strength: 85 },{ name: "ExpressJS", strength: 80 },{ name: "NodeJS", strength: 75 },{ name: "Spring Boot", strength: 70 },],
  },
  {name: "UI/UX",
    subskill: [{ name: "Figma", strength: 85 },{ name: "CSS", strength: 78 },{ name: "Marvel", strength: 60 }],
  },
  {name: "Cyber",
    subskill: [{ name: "Social Engg.", strength: 82 },{ name: "Phishing", strength: 80 },{ name: "Penetration Testing", strength: 70 },{ name: "Networking", strength: 75 },
    { name: "Malware Analysis", strength: 55 }],
  },
  {name: "Machine ",
    subskill: [{ name: "AutoCAD", strength: 85 },{ name: "Testing", strength: 90 },{ name: "Assembly", strength: 85 },{name:"Production",strength:80}],
  },
  {name : "Management",
    subskill:[{ name: "Team Lead", strength: 85 },{ name: "PMP", strength: 82 },{ name: "Adaptability", strength: 85 },{ name: "Problem- Solving",strength:90}],
  }
];

// Function to calculate average strength of each skill category
const avgSkillCalc = (subskill) => {
  const totalStrength = subskill.reduce((total, skill) => total + skill.strength, 0);
  return Math.round(totalStrength / subskill.length);
};

const updatedSkills = skills.map((skill) => ({
  ...skill,
  strength: avgSkillCalc(skill.subskill),
}));



export default function Skill() {
   const [skillarr,setskillarr]=useState(updatedSkills);
return (<div className={`w100v h100v df ffsu fdc bgbg`}>
	<div className={`w100 hr5`}></div>
	<div className="f1 w100 df fdc">
	  <div className="h100 w18 pof bxsd df ffpop fdc aic gp1" name="sideNav">
		<div className={`cup mtr5 gp05 df jcc aic fdc fw400 ${skillarr==updatedSkills ? "col" : ""} `} onClick={()=>{setskillarr(updatedSkills)}}>OverAll <div className="highlighter"></div></div>
		{skills.map(skill=><div className={`cup gp05 df jcc aic fdc fw400 ${skillarr==skill.subskill ? "col" : ""} `} key={skill.name} onClick={()=>{setskillarr(skill.subskill)}}>{skill.name}<div className="highlighter"></div></div>)}
	  </div>
	  <div className="w100 df fdr jcc aic"><h1 className=" mt1 mb05 ffpop">My Skills </h1></div>
	  <div className="w100 f1 df fdr">
	    	<div className="w18 h100"></div>
		<div className="h100 f1 df jcc aic">
		  <div className="w80 mt1 df fdr flwrp aifs gp1 jcfs">
			{skillarr.map(skill=><Skills key={skill.name} skill={skill} setskill={setskillarr} skillarr={skillarr} />)}
		  </div>
		</div>
	  </div>
	</div>
</div>)}

function Skills ({skill,setskill,skillarr}){
	return <div className="df jcc aic cup" onClick={()=>{skillarr==updatedSkills ? setskill(skill.subskill) : ""}}><CircularProgress name={skill.name} strength={skill.strength} size={230} /></div>
}
