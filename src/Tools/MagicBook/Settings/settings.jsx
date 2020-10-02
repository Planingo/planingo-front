import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useSettingsByAccountId = accountId => {
	return useQuery(
		gql`
			query findSettingsByAccountId($accountId: uuid!) {
				setting(where: { accountId: { _eq: $accountId } }) {
					company
					id
					lesson
					module
					pathway
					professor
					room
					student
				}
			}
		`,
		{
			variables: {
				accountId,
			},
		},
	)
}
