import { configureStore } from '@reduxjs/toolkit'
import { projectsApi } from './projects'
import { setupListeners } from '@reduxjs/toolkit/query'
import progressReducer from './progress'
import preloaderReducer from './preloader'
import cursorReducer from './cursor'
import hamburgerReducer from './toggleHamburger'
import pageAnimatedEndReducer from './toggleHamburger'

export const store = configureStore({ 
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    progress: progressReducer,
    preloader: preloaderReducer,
    cursor: cursorReducer,
    hamburger: hamburgerReducer,
    pageAnimatedEnd: pageAnimatedEndReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware)
})

setupListeners(store.dispatch)
