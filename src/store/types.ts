/**
 * Root state type of the redux store
 */
import { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;
