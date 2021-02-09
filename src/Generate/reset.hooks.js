import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'

export const useReset = () => {
	const client = useApolloClient()

	return async () => {
		const pathwaysName = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']

		const modules = [
			'Ancient Runes',
			'Arithmancy',
			'Astronomy',
			'Care of Magical Creatures',
			'Charms',
			'Dark Arts',
			'Defence Againt the Dark Arts',
			'Divination',
			'Herbology',
			'History of Magic',
			'Muggle Studies',
			'Potions',
			'Transfiguration',
		]

		const firstNameWomanProfessors = [
			'Bathsheda',
			'Cuthbert',
			'Charity',
			'Minerva',
			'Aurora',
			'Pomona',
			'Sybill',
		]

		const firstNameManProfessors = [
			'Amycus',
			'Alecto',
			'Firenz',
			'Filius',
			'Wilhelmina',
			'Gilderoy',
			'Remus',
			'Quirinus',
			'Horace',
			'Severus',
			'Septima',
		]

		const lastNameProfessors = [
			'Babbling',
			'Binns',
			'Burbage',
			'Carrow',
			'Firenze',
			'Flitwick',
			'Grubbly-Plank',
			'Lockhart',
			'Lupin',
			'McGonagall',
			'Quirrell',
			'Sinistra',
			'Slughorn',
			'Snape',
			'Sprout',
			'Trelawney',
			'Vector',
		]

		const companiesName = [
			'Capgeminie',
			'Sopra Steria',
			'Akeneo',
			'Bodet Software',
		]

		const roomsName = ['Salle 1', 'Salle 2', 'Salle 3', 'Salle 4', 'Salle 5']

		const firstNameWomanStudents = [
			'Hannah',
			'Katie',
			'Susan',
			'Lavender',
			'Marietta',
			'Hermine',
			'Angelina',
			'Luna',
			'Pansy',
			'Parvati',
			'Padma',
			'Alicia',
			'Myrtle',
			'Molly',
			'Ginevra',
		]

		const firstNameManStudents = [
			'Terry',
			'Millicent',
			'Justin',
			'Seamus',
			'Marcus',
			'Anthony',
			'Gregory',
			'Lee',
			'Neville',
			'Ernest',
			'Draco',
			'Theodore',
			'Harry',
			'Zacharia',
			'Dean',
			'Ronald',
			'Percy',
			'Oliver',
		]

		const lastNameStudents = [
			'Abbott',
			'Bell',
			'Black',
			'Bones',
			'Boot',
			'Brown',
			'Bulstrode',
			'Edgecombe',
			'Finch-Fletchley',
			'Finnigan',
			'Flint',
			'Goldstein',
			'Goyle',
			'Granger',
			'Johnson',
			'Jordan',
			'Longbottom',
			'Lovegood',
			'Macmillan',
			'Malfoy',
			'Noot',
			'Parkinson',
			'Patil',
			'Potter',
			'Smith',
			'Spinnet',
			'Thomas',
			'Warren',
			'Weasley',
			'Wood',
		]

		const pathways = pathwaysName.map((pathwayName) => ({
			name: pathwayName,
			description: '',
			students: { data: [] },
			modules: { data: [] },
		}))

		firstNameWomanStudents.forEach((firstNameWomanStudent) => {
			pathways[
				Math.floor(Math.random() * Math.floor(pathways.length))
			].students.data.push({
				firstName: firstNameWomanStudent,
				lastName:
					lastNameStudents[
						Math.floor(Math.random() * Math.floor(lastNameStudents.length))
					],
			})
		})

		firstNameManStudents.forEach((firstNameManStudent) => {
			pathways[
				Math.floor(Math.random() * Math.floor(pathways.length))
			].students.data.push({
				firstName: firstNameManStudent,
				lastName:
					lastNameStudents[
						Math.floor(Math.random() * Math.floor(lastNameStudents.length))
					],
			})
		})

		const professors = [
			...firstNameWomanProfessors.map((firstNameWomanProfessor) => ({
				firstName: firstNameWomanProfessor,
				lastName:
					lastNameProfessors[
						Math.floor(Math.random() * Math.floor(lastNameProfessors.length))
					],
			})),
			...firstNameManProfessors.map((firstNameManProfessor) => ({
				firstName: firstNameManProfessor,
				lastName:
					lastNameProfessors[
						Math.floor(Math.random() * Math.floor(lastNameProfessors.length))
					],
			})),
		]

		modules.forEach((module) => {
			pathways[
				Math.floor(Math.random() * Math.floor(pathways.length))
			].modules.data.push({
				module: {
					data: {
						name: module,
						description: '',
					},
				},
			})
		})

		const rooms = roomsName.map((roomName) => ({
			name: roomName,
			description: '',
			max_seats: Math.floor(Math.random() * 10 + 10),
		}))

		const companies = companiesName.map((companyName) => ({
			name: companyName,
			description: '',
		}))

		const { data } = await client.mutate({
			mutation: gql`
				mutation reset(
					$pathways: [pathway_insert_input!]!
					$professors: [professor_insert_input!]!
					$rooms: [room_insert_input!]!
					$companies: [company_insert_input!]!
				) {
					delete_room(where: {}) {
						affected_rows
					}
					delete_professor(where: {}) {
						affected_rows
					}
					delete_module(where: {}) {
						affected_rows
					}
					delete_apprenticeship(where: {}) {
						affected_rows
					}
					delete_company(where: {}) {
						affected_rows
					}
					delete_lesson(where: {}) {
						affected_rows
					}
					delete_pathway(where: {}) {
						affected_rows
					}
					delete_student(where: {}) {
						affected_rows
					}
					insert_pathway(objects: $pathways) {
						affected_rows
						returning {
							students {
								id
							}
							modules {
								module {
									id
								}
							}
						}
					}
					insert_professor(objects: $professors) {
						affected_rows
						returning {
							id
						}
					}
					insert_room(objects: $rooms) {
						affected_rows
					}
					insert_company(objects: $companies) {
						affected_rows
						returning {
							id
						}
					}
				}
			`,
			variables: { pathways, professors, companies, rooms },
		})

		const ss = data.insert_pathway.returning.flatMap((path) =>
			path.students.map((student) => student.id),
		)

		const mm = data.insert_pathway.returning.flatMap((path) =>
			path.modules.map((module) => module.module.id),
		)

		const cc = data.insert_company.returning

		const pp = data.insert_professor.returning

		const apprenticeships = ss
			.filter((s) => {
				return Math.random() < 0.6
			})
			.map((s) => {
				const companyId =
					cc[Math.floor(Math.random() * Math.floor(cc.length))].id
				return {
					companyId: companyId,
					studentId: s,
				}
			})

		const ppmm = pp
			.filter((p) => {
				return Math.random() < 0.7
			})
			.map((p) => {
				const moduleId = mm[Math.floor(Math.random() * Math.floor(mm.length))]
				return {
					professorId: p.id,
					moduleId: moduleId,
				}
			})

		await client.mutate({
			mutation: gql`
				mutation reset(
					$apprenticeships: [apprenticeship_insert_input!]!
					$ppmm: [module_professor_insert_input!]!
				) {
					insert_apprenticeship(objects: $apprenticeships) {
						affected_rows
					}
					insert_module_professor(objects: $ppmm) {
						affected_rows
					}
				}
			`,
			variables: { apprenticeships, ppmm },
		})
	}
}
