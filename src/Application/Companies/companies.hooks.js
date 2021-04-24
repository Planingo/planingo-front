import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

const getCompaniesQuerie = gql`
	query getAllCompanies {
		company(order_by: { name: asc }) {
			apprenticeships {
				id
			}
			created_at
			description
			id
			name
			updated_at
		}
	}
`

export const useGetAllCompanies = () => {
	const result = useQuery(getCompaniesQuerie)
	return result
}

export const useGetCompanyById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getCompaniesById($id: uuid!) {
				company_by_pk(id: $id) {
					apprenticeships {
						id
					}
					created_at
					description
					id
					name
					updated_at
				}
			}
		`,
		{ variables: { id: id } },
	)
	return { loading, company: data?.company_by_pk }
}

export const useAddCompany = () => {
	const [addCompany, result] = useMutation(
		gql`
			mutation addCompany($company: company_insert_input!) {
				insert_company_one(object: $company) {
					apprenticeships {
						id
					}
					created_at
					description
					id
					name
					updated_at
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getCompaniesQuerie,
				},
			],
		},
	)

	return [(company) => addCompany({ variables: { company } }), result]
}

export const useEdit = () => {
	const [edit, result] = useMutation(
		gql`
			mutation edit($id: uuid!, $company: company_set_input) {
				update_company_by_pk(pk_columns: { id: $id }, _set: $company) {
					apprenticeships {
						id
					}
					created_at
					description
					id
					name
					updated_at
				}
			}
		`,
	)

	return [(company, id) => edit({ variables: { id, company } }), result]
}

export const useDeleteById = () => {
	const [deleteById, { loading, data }] = useMutation(
		gql`
			mutation deleteById($id: uuid!) {
				delete_company_by_pk(id: $id) {
					id
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getCompaniesQuerie,
				},
			],
		},
	)

	return [
		(id) => deleteById({ variables: { id } }),
		{ loading, company: data?.delete_company_by_pk },
	]
}
