import React from 'react';

const News = ({ article }) => {
	const { urlToImage, url, title, description, source } = article;

	const image = urlToImage ? (
		<div className="card-image">
			<img src={urlToImage} alt={title} />
			<span className="card-title">{source.name}</span>
		</div>
	) : null;

	return (
		<div className="col s12 m6 l4">
			<div className="card">
				{image}

				<div className="card-content">
					<h5 className="card-title">{title}</h5>
					<p>{description}</p>
				</div>

				<div className="card-action">
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="waves-effect waves-light btn"
					>
						Ver Noticia Completa
					</a>
				</div>
			</div>
		</div>
	);
};

export default News;
