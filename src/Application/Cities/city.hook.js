import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

export const citiesFragment = gql`
    fragment citiesFragment on cities {
        id,
        cities,
    }
`

export function useCity() {
    const {data, loading} = useQuery(
        CITIES,
    )
    return {data: data?.cities[0].cities, loading}
}
  
const CITIES = gql`
    query cities {
        cities {
            id
            ...citiesFragment
        }
    }
    ${citiesFragment}
`