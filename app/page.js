"use client";
import { useEffect } from "react";

import ReactGA from "react-ga";

export const initGA = () => {
	ReactGA.initialize("G-M2NS9TJ8Y0");
};

export const logPageView = () => {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
};

const App = () => {
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}, []);

	// useEffect(() => {
	// 	analytics();
	// }, [analytics]);

	// more code...
	return <div>hello</div>;
};

export default App;
