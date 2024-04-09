export type Styles = {
	block: string;
	block__element: string;
	'block__element--modifier': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
