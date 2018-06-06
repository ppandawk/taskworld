import React from "react";

export const Header = (props) => {
    const listItems = props.homeLink.map((item,index) =>
        <li key={index}><a href="#" data-item={item.name}>{item.name}</a></li>
    );
	return(
		<div className="header">
            <div className="header-left">
                <img className="header-logo" src="../assets/img/logo/logo@2x.png" />
            </div>
			<div className="header-content">
				<ul className="hc-ul">
					{listItems}
				</ul>
			</div>
            <div className="header-right">
                <div className="box-callcenter"> 
                    <img className="header-callcenter" src="../assets/img/icon/ic-callcenter.png" />
                    <span>+1-866-428-9571</span>
                </div>
                <div className="btn btn-default">Log in</div>
                <div className="btn btn-primary">Try 15 days free</div>
            </div>
		</div>
	);
};