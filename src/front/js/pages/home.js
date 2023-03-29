import React, { useContext } from "react";
import { Context } from "../store/appContext";
import futsal from "../../img/futsal.jpg";
import padel from "../../img/padel.jpg"
import tenis from "../../img/tenis.jpg"
import gim from "../../img/gim.jpg"
import banner from "../../img/banner.png"


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="banner d-flex justify-content-center">
		<img src={banner} class="img-fluid w-100 " alt="..."/>
		</div>
		</div>
	);
};
