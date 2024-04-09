import React from 'react';

import styles from './styles.module.scss';

export function Test() {
	return (
		<div className={styles.block}>
			<div className={styles.block__element}>
				<div className={styles['block__element--modifier']}>123</div>
				<div className={styles.tests}>test</div>
			</div>
		</div>
	);
}
