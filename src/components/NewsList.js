import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const NewsList = ({ articles }) => {
	if (articles === undefined) return null;

	return (
		<div className="row">
			{articles.map((article) => (
				<News key={article.url} article={article} />
			))}
		</div>
	);
};

NewsList.propTypes = {
	articles: PropTypes.array.isRequired
};

export default NewsList;
