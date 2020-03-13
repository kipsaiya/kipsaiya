import React from 'react';
import './css/App.css';
import './css/loader.css';
import Auth from './utils/Auth';
class Loader extends React.Component{
	render(){
		return(
			<div id="loader-wrapper">
				<div id="loader"></div>
				<div className="loader-section section-left"></div>
				<div className="loader-section section-right"></div>
			</div>
		);
	}
}
function Footer(){
	return(
		<div className="footer">
			<i className="fa fa-home" aria-hidden="true"></i>
			<i className="fa fa-bell" aria-hidden="true"></i>
			<i className="fa fa-inbox" aria-hidden="true"></i>
		</div>
	)
}
class Information extends React.Component{
	render(){
		return(
			<div id="information" className="information">
				<h1 className="tag-line"> We Are Great </h1>
			</div>
		);
	}
}
class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
		}
	}
	componentDidMount(){
		setTimeout(
			() => {
				document.body.classList.add('loaded');
			}, 
			3000
		);
	}
	render(){
		return (
			<div>
				<Loader />
				<div className="info">
					<a href="https://www.facebook.com/kipsaiya">
						<img className="logo" src="https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t1.0-9/23167881_990458404428642_8488902050794893724_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=vX9r-WZxpxsAX_KM18J&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=8939be5b86d49552a7dceda9a8d87398&oe=5E9738FA" alt="kipsaiya"/>
					</a>
					<a href="#information">Kipsaiya</a>
				</div>
				<Information />
				<Footer />
			</div>
		);
	}
}

export default App;
