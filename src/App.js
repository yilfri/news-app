import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import NewsList from './components/NewsList';

function App() {
	const [category, setCategory] = useState('');
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getAPI = async () => {
			const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=4e9b5fd6ef5b4bdba32acb42fd31a652`;

			const data = await fetch(url);
			const result = await data.json();

			setArticles(result.articles);
		};

		getAPI();
	}, [category]);

	return (
		<>
			<Header title="Buscador de Noticias" />
			<div className="container white">
				<Form setCategory={setCategory} />
				<NewsList articles={articles} />
			</div>
		</>
	);
}

export default App;
