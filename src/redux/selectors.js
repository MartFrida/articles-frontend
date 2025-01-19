export const selectArticles = state => state.articles.items
export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserName = state => state.auth.user.name
export const selectIsRefresh = state => state.auth.isRefresh
export const selectIsLoadingArticles = state => state.articles.loading
export const selectIsLoadingAuth = state => state.user.isLoading
