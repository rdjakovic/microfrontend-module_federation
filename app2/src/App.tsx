import React from "react";
import Counter from "./components/Counter";
import './index.css'

const App = () => (
	<div className="w-40 m-4 p-4 border border-blue-500">
		<h2 className="text-xl font-medium">APP-2</h2>
		<div>
			<Counter />
		</div>
	</div>
);

export default App;
