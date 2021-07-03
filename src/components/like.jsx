import React from "react";

const Like = ({ liked, onClick }) => {
	console.log("llll", liked);
	let classNames = "fa fa-heart";
	if (!liked) {
		classNames += "-o";
	}
	return (
		<i
			style={{ cursor: "pointer" }}
			className={classNames}
			onClick={onClick}
			aria-hidden="true"
		/>
	);
};

export default Like;
