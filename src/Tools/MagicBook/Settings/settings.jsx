import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

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
