import React from 'react';
import News from './News';

const NewsList = ({ articles }) => (
	<div className="row">
		{articles.map((article) => (
			<News key={article.url} article={article} />
		))}
	</div>
);

export default NewsList;
