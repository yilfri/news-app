import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';

function App() {
	const [category, setCategory] = useState('');
	return (
		<>
			<Header title="Buscador de Noticias" />
			<div className="container white">
				<Form setCategory={setCategory} />
			</div>
		</>
	);
}

export default App;
