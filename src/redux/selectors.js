export const selectArticles = state => state.articles.items
export const selectIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserName = state => state.auth.user.username
export const selectIsRefresh = state => state.auth.isRefresh