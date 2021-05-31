import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = () => {
	const [category, NewsSelect] = useSelect();
	return (
		<div className={`${styles.heading} row`}>
			<div className="col s12 m8 offset-m2">
				<form>
					<h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

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
