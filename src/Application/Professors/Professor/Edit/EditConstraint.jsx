import React, { useState } from 'react'
import './editConstraint.scss'
import { Form, Select, Checkbox } from 'antd'
import { useSelector } from 'react-redux'
import { selectors } from '../../../../Account/store'
import { useGetProfessorConstraints, useProfessorConstraintsSetting } from '../../../Settings/Constraints/Hook/professorConstraints.hook'
import { useParams } from 'react-router'
import { useCity } from '../../../Cities/city.hook'

const CheckboxGroup = Checkbox.Group;

const EditConstraint = ({ setItem }) => {
    const accountId = useSelector(selectors.accountId)
	const { id } = useParams()
    const {data: professorConstraintsSetting, loading: loadingProfessorConstraintsSetting} = useProfessorConstraintsSetting(accountId)
	const { data: professorConstraints, loading: loadingProfessorConstraints } = useGetProfessorConstraints(id)
	const { data: cities, loading: citiesLoading } = useCity()

	const { Option } = Select
	
	const plainOptions = ['Matin', 'Après-midi'];

	const [checkedListLundi, setCheckedListLundi] = useState([]);
	const [indeterminateLundi, setIndeterminateLundi] = useState(false);
	const [checkAllLundi, setCheckAllLundi] = useState(false);

	const onChangeLundi = list => {
		setCheckedListLundi(list);
		setIndeterminateLundi(!!list.length && list.length < plainOptions.length);
		setCheckAllLundi(list.length === plainOptions.length);
	}
	
	const onCheckAllChangeLundi = e => {
		setCheckedListLundi(e.target.checked ? plainOptions : []);
		setIndeterminateLundi(false);
		setCheckAllLundi(e.target.checked);
	}

	const [checkedListMardi, setCheckedListMardi] = useState([]);
	const [indeterminateMardi, setIndeterminateMardi] = useState(false);
	const [checkAllMardi, setCheckAllMardi] = useState(false);

	const onChangeMardi = list => {
		setCheckedListMardi(list);
		setIndeterminateMardi(!!list.length && list.length < plainOptions.length);
		setCheckAllMardi(list.length === plainOptions.length);
	}
	
	const onCheckAllChangeMardi = e => {
		setCheckedListMardi(e.target.checked ? plainOptions : []);
		setIndeterminateMardi(false);
		setCheckAllMardi(e.target.checked);
	}

	const [checkedListMercredi, setCheckedListMercredi] = useState([]);
	const [indeterminateMercredi, setIndeterminateMercredi] = useState(false);
	const [checkAllMercredi, setCheckAllMercredi] = useState(false);

	const onChangeMercredi = list => {
		setCheckedListMercredi(list);
		setIndeterminateMercredi(!!list.length && list.length < plainOptions.length);
		setCheckAllMercredi(list.length === plainOptions.length);
	}
	
	const onCheckAllChangeMercredi = e => {
		setCheckedListMercredi(e.target.checked ? plainOptions : []);
		setIndeterminateMercredi(false);
		setCheckAllMercredi(e.target.checked);
	}

	const [checkedListJeudi, setCheckedListJeudi] = useState([]);
	const [indeterminateJeudi, setIndeterminateJeudi] = useState(false);
	const [checkAllJeudi, setCheckAllJeudi] = useState(false);

	const onChangeJeudi = list => {
		setCheckedListJeudi(list);
		setIndeterminateJeudi(!!list.length && list.length < plainOptions.length);
		setCheckAllJeudi(list.length === plainOptions.length);
	}
	
	const onCheckAllChangeJeudi = e => {
		setCheckedListJeudi(e.target.checked ? plainOptions : []);
		setIndeterminateJeudi(false);
		setCheckAllJeudi(e.target.checked);
	}

	const [checkedListVendredi, setCheckedListVendredi] = useState([]);
	const [indeterminateVendredi, setIndeterminateVendredi] = useState(false);
	const [checkAllVendredi, setCheckAllVendredi] = useState(false);

	const onChangeVendredi = list => {
		setCheckedListVendredi(list);
		setIndeterminateVendredi(!!list.length && list.length < plainOptions.length);
		setCheckAllVendredi(list.length === plainOptions.length);
	}
	
	const onCheckAllChangeVendredi = e => {
		setCheckedListVendredi(e.target.checked ? plainOptions : []);
		setIndeterminateVendredi(false);
		setCheckAllVendredi(e.target.checked);
	}

	if (citiesLoading || loadingProfessorConstraintsSetting || loadingProfessorConstraints) return null

	return (
		<div className="edit">
			<Form
				initialValues={professorConstraints?.constraints}
				onValuesChange={(values) => {
					setItem((item) => ({ ...professorConstraints?.constraints, ...item, ...values }))
				}}
				layout="vertical"
				hideRequiredMark
			>
				{professorConstraintsSetting?.intervention && 
					<Form.Item 
						name="schoolPlace" 
						label="Lieu de la formation"
					>
						<Select>
							{!citiesLoading &&
								cities.map(city => (
									<Option
										placeholder="Selectionnez une ville" 
										key={city}
									>
										{city}
									</Option>
								))
							}
						</Select>
					</Form.Item>
				}
				{professorConstraintsSetting?.intervention &&
					<>
						<p>Interventions souhaitées</p>
						<div className='prof-date-constraints'>
							<Form.Item 
								name="interventionMonday"
							>
								<Checkbox 
									indeterminate={indeterminateLundi} 
									onChange={onCheckAllChangeLundi} 
									checked={checkAllLundi}
								>
									Lundi
								</Checkbox>
								<CheckboxGroup 
									options={plainOptions} 
									value={checkedListLundi} 
									onChange={onChangeLundi} 
								/>
							</Form.Item>
							<Form.Item 
								name="interventionTuesday" 
							>
								<Checkbox 
									indeterminate={indeterminateMardi} 
									onChange={onCheckAllChangeMardi} 
									checked={checkAllMardi}
								>
									Mardi
								</Checkbox>
								<CheckboxGroup 
									options={plainOptions} 
									value={checkedListMardi} 
									onChange={onChangeMardi} 
								/>
							</Form.Item>
							<Form.Item 
								name="interventionWednesday"
							>
								<Checkbox 
									indeterminate={indeterminateMercredi} 
									onChange={onCheckAllChangeMercredi} 
									checked={checkAllMercredi}
								>
									Mercredi
								</Checkbox>
								<CheckboxGroup 
									options={plainOptions} 
									value={checkedListMercredi} 
									onChange={onChangeMercredi} 
								/>
							</Form.Item>
							<Form.Item 
								name="interventionThursday" 
							>
								<Checkbox 
									indeterminate={indeterminateJeudi} 
									onChange={onCheckAllChangeJeudi} 
									checked={checkAllJeudi}
								>
									Jeudi
								</Checkbox>
								<CheckboxGroup 
									options={plainOptions} 
									value={checkedListJeudi} 
									onChange={onChangeJeudi} 
								/>
							</Form.Item>
							<Form.Item 
								name="interventionFriday"
							>
								<Checkbox 
									indeterminate={indeterminateVendredi} 
									onChange={onCheckAllChangeVendredi} 
									checked={checkAllVendredi}
								>
									Vendredi
								</Checkbox>
								<CheckboxGroup 
									options={plainOptions} 
									value={checkedListVendredi} 
									onChange={onChangeVendredi} 
								/>
							</Form.Item>
						</div>
					</>
				}
			</Form>
		</div>
	)
}

export default EditConstraint
