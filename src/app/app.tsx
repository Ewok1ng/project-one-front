import React from 'react';
import ReactDOM from 'react-dom/client';

import { Test } from '@app/test';
import { Aboba } from '@shared/ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Test />
		<Aboba />
	</React.StrictMode>
);
