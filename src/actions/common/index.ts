import ACTION_TYPES from "../types";
import { AppDispatch } from '../../store';
import Category from "../../interfaces/Category.interface";

export const goBack = (): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.COMMON.GO_BACK,
			payload: {},
		});
	};
};

export const enterCategory = (id: string): any => {
	return (dispatch: AppDispatch): any => {
		return dispatch({
			type: ACTION_TYPES.COMMON.ENTER_CATEGORY,
			payload: { categoryId: id },
		});
	};
};

export const createCategory = (category: Category): any => {
	return (dispatch: AppDispatch): any => {
		return dispatch({
			type: ACTION_TYPES.COMMON.CREATE_CATEGORY,
			payload: { category },
		});
	};
};

export const createItem = (item: Category): any => {
	return (dispatch: AppDispatch): any => {
		return dispatch({
			type: ACTION_TYPES.COMMON.CREATE_ITEM,
			payload: { item },
		});
	};
};

export const onRemove = (id: string): any => {
	return (dispatch: AppDispatch): any => {
		return dispatch({
			type: ACTION_TYPES.COMMON.ON_REMOVE,
			payload: { id },
		});
	};
};

export const editElement = (updatedItem: Category) => {
	return (dispatch: AppDispatch): any => {
		return dispatch({
			type: ACTION_TYPES.COMMON.EDIT,
			payload: updatedItem,
		});
	}
};
