import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const useReset = () => {
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

	const pathways = pathwaysName.map((pathwayName) => ({
		name: pathwayName,
		description: '',
		students: { data: [] },
		modules: { data: [] },
	}))

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

	const rooms = roomsName.map((roomName) => ({
		name: roomName,
		description: '',
		max_seats: Math.floor(Math.random() * 10 + 10),
	}))

	const companies = companiesName.map((companyName) => ({
		name: companyName,
		description: '',
	}))

	const [reset] = useMutation(
		gql`
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
				}
				insert_professor(objects: $professors) {
					affected_rows
				}
				insert_room(objects: $rooms) {
					affected_rows
				}
				insert_company(objects: $companies) {
					affected_rows
				}
			}
		`,
		{ variables: { pathways, professors, companies, rooms } },
	)

	return reset
}
