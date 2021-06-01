import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({ setCategory }) => {
	const OPTIONS = [
		{ value: 'general', label: 'General' },
		{ value: 'business', label: 'Negocios' },
		{ value: 'entertainment', label: 'Entretenimiento' },
		{ value: 'health', label: 'Salud' },
		{ value: 'science', label: 'Ciencia' },
		{ value: 'sport', label: 'Deportes' },
		{ value: 'technology', label: 'Tecnología' }
	];

	const [category, NewsSelects] = useSelect('general', OPTIONS);

	const handleSubmit = (e) => {
		e.preventDefault();

		setCategory(category);
	};

	return (
		<div className={`${styles.heading} row`}>
			<div className="col s12 m8 offset-m2">
				<form onSubmit={handleSubmit}>
					<h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

					<NewsSelects />

					<div className="input-field col s12">
						<input
							type="submit"
							value="Buscar "
							className={`${styles['btn-block']} btn-large amber darken-2`}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
