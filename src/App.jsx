import './App.css';
import {useState,useEffect} from 'React';
import Splash from './Components/Splash';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About'
import Education from './Components/Education'
import Skill from './Components/Skill'
import Projects from './Components/Projects';
import Contact from './Components/Contact';


export default function App(){
	const [page,setpage] = useState("Home");
	const [loaded,setloaded]=useState(false);
useEffect(()=>{
	window.onload = () =>{setloaded(true)}
},[])
return (loaded ? <>
	<Header page={page} setpage={setpage}/>
	{page=="Home" && <Home />}
	{page=="Abou" && <About />}
	{page=="Expe" && <Education />}
	{page=="Skil" && <Skill />}
	{page=="Proj" && <Projects />}
	{page=="Cont" && <Contact />}
</> : <Splash />)
}