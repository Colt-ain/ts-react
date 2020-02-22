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
	currentCategoryId: string;
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
			const arr: Array<string> = state.currentPath ? state.currentPath.split('/') : [];
			const currentCategoryLabel = arr ? arr[arr.length - 1] : '';
			const currentCategory: CategoryInterface | undefined = fixtures.categories.find(category => category.label === currentCategoryLabel);
			const parentId = currentCategory ? currentCategory.parentId : '';
			const filteredItems = items.filter(items => (items.parentId === parentId));
			const filteredCategories = categories.filter(category => (category.parentId === parentId));

			return {
				 ...state,
				currentCategoryId: currentCategory ? currentCategory.id : '',
				currentPath: state.currentPath.slice(-1, 1),
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

		default:
			return state;
	}
}
