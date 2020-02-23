import ACTION_TYPES from '../../actions/types';
import fixtures from '../../fixtures';
import InitialStateInterface from '../../interfaces/InitialState.interface';
import CategoryInterface from '../../interfaces/Category.interface';

interface ActionInterface {
	payload: any;
	type: string;
}

const initialState = {
	fixtures,
	categories: fixtures.categories,
	items: fixtures.items,
	currentPath: '',
	currentCategoryId: '',
};

interface CommonInterface {
	categories: Array<CategoryInterface>;
	currentPath: string;
	items: Array<CategoryInterface>;
	currentCategoryId: string | undefined;
	fixtures: {
		categories: Array<CategoryInterface>;
		items: Array<CategoryInterface>;
	};
}

export default function common(state: CommonInterface  = initialState, action: ActionInterface): CommonInterface {
	const { payload, type } = action;
	const { COMMON } = ACTION_TYPES;

	switch (type) {
		case COMMON.GO_BACK: {
			const { items, categories } = state.fixtures;
			const currentCategory: CategoryInterface | undefined = [...state.fixtures.categories, ...state.categories]
				.find((category) => category.id === state.currentCategoryId);
			const parentId = currentCategory ? currentCategory.parentId : '';
			const filteredItems = items.filter(item => (item.parentId === parentId));
			const filteredCategories = categories.filter(category => (category.parentId === parentId));
			const pathArr = state.currentPath.split('/');
			pathArr.pop();

			return {
				 ...state,
				currentCategoryId: parentId,
				currentPath: pathArr.join('/'),
				items: filteredItems,
				categories: filteredCategories,
			};
		}

		case COMMON.ENTER_CATEGORY: {
			const { categoryId } = payload;

			const { categories } = state;
			const category: { id: string; label: string } | undefined = categories.find(category => categoryId === category.id);

			return {
				...state,
				currentPath: `${state.currentPath}/${category && category.label}`,
				categories: state.fixtures.categories.filter(cary => cary.parentId === categoryId),
				currentCategoryId: categoryId,
				items: state.fixtures.items.filter(item => (item.parentId === categoryId))
			}
		}

		case COMMON.CREATE_CATEGORY: {
			const { category } = payload;

			return {
				...state,
				fixtures: { ...state.fixtures, categories: [...state.fixtures.categories, category] },
				categories: [ ...state.fixtures.categories, category].filter(cary => cary.parentId === state.currentCategoryId)
			};
		}

		case COMMON.CREATE_ITEM: {
			const { item } = payload;

			return {
				...state,
				fixtures: { ...state.fixtures, items: [...state.fixtures.items, item] },
				items: [ ...state.fixtures.items, item].filter(item => item.parentId === state.currentCategoryId)
			};
		}

		case COMMON.ON_REMOVE: {
			const { id } = payload;

			return {
				...state,
				categories: state.categories.filter(category => category.id !== id || category.parentId === id),
				items: state.items.filter(item => item.id !== id),
				fixtures: {
					categories: state.categories.filter(category => category.id !== id),
					items: state.items.filter(item => item.id !== id),
				},
			};
		}

		case COMMON.EDIT: {
			const { id, label } = payload;

			return {
				...state,
				categories: state.categories.map(category => {
					if (category.id === id) {
						return {
							...category, label,
						}
					}

					return category;
				}),
				items: state.items.map(item => {
					if (item.id === id) {
						return {
							...item, label,
						};
					}

					return item;
				}),
				fixtures: {
					categories: state.categories.map(category => {
						if (category.id === id) {
							return {
								...category, label,
							}
						}

						return category;
					}),
					items: state.items.map(item => {
						if (item.id === id) {
							return {
								...item, label,
							};
						}

						return item;
					}),
				},
			};
		}

		default:
			return state;
	}
}
