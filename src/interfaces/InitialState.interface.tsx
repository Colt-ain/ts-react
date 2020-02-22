import CategoryInterface from './Category.interface';

export default interface InitialStateInterface {
	common: {
		categories: Array<CategoryInterface>;
		currentPath: string | undefined;
		items: Array<CategoryInterface>;
		currentCategoryId: string;
	};
}
