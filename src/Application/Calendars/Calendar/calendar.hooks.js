import { useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'


export const calendarFragment = gql`
    fragment calendarFragment on calendar {
        id,
        created_at,
        updated_at,
        studentId,
        pathwayId,
        version,
    }
`

export const useAddCalendar = () => {
	const [addCalendar, result] = useMutation(
        CALENDAR_ADD_MUTATION
    )

	return [({studentId, pathwayId}) =>
		addCalendar({
			variables: {
				studentId: studentId,
				pathwayId: pathwayId,
			}
    }), result]
}

const CALENDAR_ADD_MUTATION = gql`
    mutation addCalendar(
		$studentId: uuid, 
		$pathwayId: uuid,
	) {
        insert_calendar_one(
            object: {
                studentId: $studentId,
                pathwayId: $pathwayId
            },
        ) {
			id,
			studentId,
			pathwayId,
			version,
        }
    }
`

export function useGetCalendarById(calendarId) {
    const {data, loading} = useQuery(
        CALENDAR_BY_ID,
      {
        variables: { calendarId: calendarId },
      },
    )

    return {data: data?.company_constraints[0], loading}
}
  
const CALENDAR_BY_ID = gql`
    query getCalendarById($calendarId: uuid!) {
        calendar(where: {calendarId: {_eq: $calendarId}}) {
            id
            ...calendarFragment
        }
    }
    ${calendarFragment}
`