import React from 'react';

class Brand extends React.Component{
	render(){
		return(
			<div>
			</div>
		);
	}
}
class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			authorize: false
		}
		this.handleClick = this.handleClick.bind();
	}
	handleClick(e){
		this.setState({authorize: true});
		//e.preventDefault();
		console.log(this.state.authorize);
	}
	render(){
		return(
			<div className="auth">
				{
					this.state.authorize === false ? (
						<div className="signup">
							<form>
								<input name="email" type="email" placeholder="Email Address"/>
								<input name="username" type="text" placeholder="User Name"/>
								<input name="firstname" type="text" placeholder="First Name"/>
								<input name="middlename" type="text" placeholder="Middle Name"/>
								<input name="lastname" type="text" placeholder="Last Name"/>
								<input name="phone" type="text" placeholder="phone number"/>
								<input name="password" type="password" placeholder="password"/>
								<p>By registering an account you agree to the <a href="">terms</a> and <a href="">privacy policy</a></p>
								<button onClick={this.handleClick}>Register</button>
							</form>
							<button> Or, sign In</button>
						</div>
					) : (
						<div className="sigin">
							<form>
								<input name="email" type="email" placeholder="Email Address"/>
								<input name="username" type="text" placeholder="User Name"/>
								<button>login</button>
							</form>
							<button> Or, sign Up</button>
						</div>
					)
				}
			</div>
		);
	}
}
function Footer(){
	return(
		<div>
		</div>
	);
}
class Auth extends React.Component{
	render(){
		return(
			<div className="auth">
				<Brand />
				<Form />
				<Footer />
			</div>
		);
	}
}
 export default Auth;