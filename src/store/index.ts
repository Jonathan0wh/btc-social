import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from './types';

export { store, persistor } from './store';

// Typed useSelector for react-redux
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
