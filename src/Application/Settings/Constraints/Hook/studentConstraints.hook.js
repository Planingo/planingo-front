import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'

export const studentConstraintsFragment = gql`
    fragment studentConstraintsFragment on setting_constraints_student {
        id,
        schoolPlace,
        maxSchool,
        minSchool,
        maxPathway,
        minPathway,
        maxSchoolSession,
        minSchoolSession,
        maxCompanySession,
        minCompanySession,
        schoolMandatory,
        companyMandatory,
        accountId,
    }
`

export const studentFragment = gql`
    fragment studentFragment on student {
        apprenticeships {
			company {
				id
				name
				description
			}
			companyId
			id
			studentId
		}
		firstName
		id
		lastName
		pathway {
			description
			id
			name
		}
    }
`

export function useStudentConstraints(accountId) {
    const {data, loading} = useQuery(
        STUDENT_CONSTRAINTS,
      {
        variables: { accountId: accountId },
      },
    )
    return {data: data?.setting_constraints_student[0], loading}
}
  
const STUDENT_CONSTRAINTS = gql`
    query studentConstraints($accountId: uuid!) {
        setting_constraints_student(where: {accountId: {_eq: $accountId}}) {
            id
            ...studentConstraintsFragment
        }
    }
    ${studentConstraintsFragment}
`

export function useUpdateStudentConstraints(accountId, input) {
    const [updateStudentConstraints, result] = useMutation(
            STUDENT_CONTRAINTS_UPDATE_MUTATION,
        )
    return [(accountId, input) => updateStudentConstraints({ variables: { accountId, input } }), result]
}

const STUDENT_CONTRAINTS_UPDATE_MUTATION = gql`
    mutation updateStudentConstraints($accountId: uuid!, $input: setting_constraints_student_set_input) {
        update_setting_constraints_student(where: {accountId: {_eq: $accountId}}, _set: $input) {
            affected_rows
            returning {
                ...studentConstraintsFragment
            }
        }
    }
    ${studentConstraintsFragment}
`

const getStudentsQuerie = gql`
	query getAllStudents {
		student(order_by: { lastName: asc }) {
			id
			...studentFragment
		}
	}
	${studentFragment}
`

export const useGetAllStudents = () => {
	const result = useQuery(getStudentsQuerie)
	return result
}

export const useGetStudentById = (id) => {
	const { loading, data } = useQuery(
		gql`
			query getStudentById($id: uuid!) {
				id
				...studentFragment
			}
		}
		${studentFragment}
		`,
		{ variables: { id: id } },
	)
	return { loading, student: data?.student_by_pk }
}

export const useAddStudent = () => {
	const [addStudent, result] = useMutation(
		gql`
			mutation addStudent($student: student_insert_input!) {
				insert_student_one(object: $student) {
					apprenticeships {
						company {
							id
							name
						}
						id
					}
					created_at
					firstName
					id
					lastName
					pathway {
						id
						name
					}
				}
			}
		`,
		{
			refetchQueries: [
				{
					query: getStudentsQuerie,
				},
			],
		},
	)

	return [(student) => addStudent({ variables: { student } }), result]
}

export const useAddStudents = () => {
	const [addStudents, result] = useMutation(
		gql`
			mutation addStudents($students: [student_insert_input!]!) {
				insert_student(objects: $students) {
					affected_rows
				}
			}
		`,
	)

	return [(students) => addStudents({ variables: { students } }), result]
}

export const useEditStudent = () => {
	const [editStudent, result] = useMutation(
		gql`
			mutation editStudent($id: uuid!, $student: student_set_input) {
				update_student_by_pk(pk_columns: { id: $id }, _set: $student) {
					apprenticeships {
						company {
							id
							name
							description
						}
						companyId
						id
						studentId
					}
					firstName
					id
					lastName
					pathway {
						description
						id
						name
					}
				}
			}
		`,
	)

	return [(student, id) => editStudent({ variables: { id, student } }), result]
}

export const useEditStudentConstraints = () => {
	const [editStudentConstraints] = useMutation(
        STUDENT_CONSTRAINTS_EDIT_MUTATION
    )
	return (studentId, constraints) =>
    editStudentConstraints({
        variables: {
            studentId: studentId,
			constraints: constraints,
        },
    })
}


const STUDENT_CONSTRAINTS_EDIT_MUTATION = gql`
    mutation editStudentConstraints(
		$studentId: uuid!, 
		$constraints: jsonb!,
	) {
        insert_student_constraints_one(
            object: {
                studentId: $studentId
                constraints: $constraints
            }
        ) {
            id
        }
    }
`

export const useCreateStudentConstraintsSetting = () => {
	const [createStudentConstraintsSettings] = useMutation(
        STUDENT_CONSTRAINTS_CREATE_MUTATION
    )
	return accountId =>
    createStudentConstraintsSettings({
        variables: {
            schoolPlace: true,
            accountId: accountId,
            maxSchool: true,
            minSchool: true,
            maxPathway: true,
            minPathway: true,
            maxSchoolSession: true,
            minSchoolSession: true,
            maxCompanySession: true,
            minCompanySession: true,
            schoolMandatory: true,
            companyMandatory: true,
        },
    })
}

const STUDENT_CONSTRAINTS_CREATE_MUTATION = gql`
    mutation createStudentConstraintsSettings(
		$schoolPlace: Boolean!, 
		$accountId: uuid!, 
		$maxSchool: Boolean!,
		$minSchool: Boolean!, 
		$maxPathway: Boolean!,
		$minPathway: Boolean!, 
		$maxSchoolSession: Boolean!,
		$minSchoolSession: Boolean!, 
		$maxCompanySession: Boolean!,
		$minCompanySession: Boolean!, 
		$schoolMandatory: Boolean!,
		$companyMandatory: Boolean!,
	) {
        insert_setting_constraints_student_one(
            object: {
                schoolPlace: $schoolPlace
                accountId: $accountId
                maxSchool: $maxSchool
                minSchool: $minSchool
                maxPathway: $maxPathway
                minPathway: $minPathway
                maxSchoolSession: $maxSchoolSession
                minSchoolSession: $minSchoolSession
                maxCompanySession: $maxCompanySession
                minCompanySession: $minCompanySession
                schoolMandatory: $schoolMandatory
                companyMandatory: $companyMandatory
            }
        ) {
            id
        }
    }
`
