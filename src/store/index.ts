import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from './types';

export { store } from './store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
