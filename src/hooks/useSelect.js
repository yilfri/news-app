import React, { useState } from 'react';

import React from 'react';

const useSelect = (initialState, options) => {
	const [state, setState] = useState('');

	const NewsSelect = () => {
		<select className="browser-default">
			<option value="">-- Seleccionar --</option>
		</select>;
	};

	return [state, NewsSelect];
};

export default useSelect;
