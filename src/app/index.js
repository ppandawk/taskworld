import React from 'react';
import { render } from "react-dom";

import { Header } from "./components/Header";

class App extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			homeLink: [
				{name: "Product"},{name: "Pricing"},{name: "Success"},{name: "Enterprise"},{name: "Contact us"}            
			],
			imgList: [
				{name: "../assets/img/logo/samsung-v-2@2x.png"},
				{name: "../assets/img/logo/amazon@2x.png"},
				{name: "../assets/img/logo/netflix@2x.png"},
				{name: "../assets/img/logo/salesforce@2x.png"},
				{name: "../assets/img/logo/roche@2x.png"},
				{name: "../assets/img/logo/at-t@2x.png"}
			],
			projectList: [
				{
					id: "1",
					icon: "../assets/img/icon/ic-pm.png",
					header: "Project management",
					subTitle: "Effortlessly assign and track work with visual boards.",
					active: false
				},
				{
					id: "2",
					icon: "../assets/img/icon/ic-shape.png",
					header: "Team messaging",
					subTitle: "See who's online, who has read your message and receive instant response.",
					active: false
				},
				{
					id: "3",
					icon: "../assets/img/icon/ic-tm.png",
					header: "Time tracking",
					subTitle: "Track time spent on task and get logs for each project.",
					active: false
				},
				{
					id: "4",
					icon: "../assets/img/icon/ic-feature.png",
					header: "File management",
					subTitle: "Each file is where it's supposed to be, attached to the relevant task and project.",
					active: false
				},
				{
					id: "5",
					icon: "../assets/img/icon/ic-chart.png",
					header: "Performance reports",
					subTitle: "Stay on top of your performance with reports and real-time feedback.",
					active: false
				},
				{
					id: "5",
					icon: "../assets/img/icon/ic-gantt.png",
					header: "Gantt chart",
					subTitle: "Visualize project progress in a timeline and anticipate potential problems.",
					active: false
				}
			],
			featureList: [
				{id:"1",src: "../assets/img/feature/1.png",title: "SAML 2.0",title2: "SSO"},
				{id:"2",src: "../assets/img/feature/2.png",title: "VPC/On",title2: "premise options"},
				{id:"3",src: "../assets/img/feature/3.png",title: "Two factor",title2: "authentication"},
				{id:"4",src: "../assets/img/feature/4.png",title: "Dedicated",title2: "account manager"},
				{id:"5",src: "../assets/img/feature/5.png",title: "SLA",title2: "(Service Level Agreements)"},
				{id:"6",src: "../assets/img/feature/6.png",title: "Privacy Shield",title2: "certified"}
			]
		}
	}
	hoverOver(e) {
		this.state.projectList[e].active = true;
		this.forceUpdate();
		if (e == 1) {
		  	this.setState({
		      bhover: !this.state.bhover
		    });
		};
	}
	hoverLeave(e){
		this.state.projectList[e].active = false;
		this.forceUpdate();
		if (e == 1) {
		  	this.setState({
		      bhover: !this.state.bhover
		    });
		};
	}

	getInitialState(){
	    return {
	      condition: false,
	      bhover: false
	    }
	}
	openModal() {
	  	this.setState({
	      condition: !this.state.condition
	    });
	}

	render() {
	    const imgL = this.state.imgList.map((item,index) =>
	        <li key={index}><img src={item.name} /></li>
	    );
	    const listProject = this.state.projectList.map((item,index) =>
	        <li key={index} onMouseEnter={this.hoverOver.bind(this,index)} onMouseLeave={this.hoverLeave.bind(this,index)}>
				<div className="cr-overflow">
					<div className="cr-ic">
						<div className={item.active ? 'cir active' : 'cir'}>
							<img src={item.icon} />
						</div>
					</div>
					<div className="cr-content">
						<div className="cr-title">{item.header}</div>
						<span>{item.active ? item.subTitle : ''}</span>
					</div>
				</div>
			</li>
	    );
	    const fList = this.state.featureList.map((item,index) =>
	    	<div className="cc-wrapper">
	    		<div className="cc-cir">
	    			<img src={item.src}/>
	    		</div>
	    		<div className="cc-title">
	    			{item.title}
	    			<br />
	    			{item.title2}
	    		</div>
	    	</div>
	    );
		return (
			<div className="container">
				<Header homeLink={this.state.homeLink}></Header>
				<div className="container-sec pt-100">
		            <div className="con-l">
		                <div className="cl-header">
		                    Ridiculously easy 
		                    <br />
		                    <strong>project management</strong> 
		                </div>
		                <div className="cl-btn">
		                    <div className="btn btn-pink mr-20">Try 15 days free</div>
		                    <div className="btn">Request demo</div>
		                </div>
		            </div>
		            <div className="con-r">
		                <img src="../assets/img/highlight-image@2x.png"  onClick={this.openModal.bind(this)}/>
		            </div>
		            <div className="con-full">
		                <span>Trusted by leading companies worldwide</span>
		                <ul>
		                    {imgL}
		                </ul>
		            </div>
				</div>
				<div className="container-sec full">
		            <div className="csf-head">
		                <strong>Thousands of companies</strong> in every imaginable industry track work,
		                measure performance and deliver <strong>great results with Taskworld.</strong>
		            </div>
		            <div className="csf-overflow">
		            	<div className="co-left">
		            		<img className={ !this.state.bhover ? "top" : "top bhover" } src="../assets/img/top.png" />
		            		<img className={ !this.state.bhover ? "bottom" : "bottom bhover" } src="../assets/img/bottom.png" />
		            	</div>
		            	<div className="co-right">
		            		<ul>
		            			{listProject}
		            		</ul>
		            	</div>
		        		<div className="clearfix"></div>
		            </div>
		            <div className="csf-footer">
		            	<a href="">	Learn more > </a>
		            </div>
		            <div className="bg-only"></div>
				</div>
				<div className="container-sec pt-60">
		            <div className="cs-title">
		            	100% enterprise ready
		            </div>
		            <div className="cs-subtitle">
		            	Taskworld works like a charm in even highly regulated industries.
		            </div>
		            <div className="cs-content">
		            	<div className="cc-overflow">
		            		{fList}
		            	</div>
		            </div>
		            <div className="cs-footer">
		            	<a href="">	Learn more > </a>
		            </div>
		            <div className="cs-obj">
		            	<img src="../assets/img/device@2x.png"/>
		            </div>
				</div>
				<div className="container-sec bg">
					<div className="csb-title">
						Still on the fence? Talk with us, share your requirements and see if Taskworld can help. 
					</div>
					<div className="csb-content">
						<div className="btn btn-demo">Request demo</div>
					</div>
				</div>
				<div className={ !this.state.condition ? "modal close" : "modal open" }>
					<div className="modal-inner">
						<iframe src="https://player.vimeo.com/video/161882460?autoplay=1" frameBorder="0" allowFullScreen className="frame"></iframe>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>,window.document.getElementById("app"));