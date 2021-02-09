export const accountId = ({ account }) => account.id
export const isAuthenticated = ({ account }) => Boolean(account)

export default { accountId, isAuthenticated }
