import {
	ArrowLeftOutlined,
	CalendarOutlined,
} from '@ant-design/icons'
import { RadioGroup } from '@planingo/ditto'
import React from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import AddCalendar from '../../Application/Calendars/Calendar/Add/AddCalendar'
import AddItem from '../../Application/Layout/Add/AddItem'
import './refinement.scss'

const Refinement = ({
	options,
	setIsGrid,
	isGrid,
	backTo,
	FirstActionIcon,
	firstActionText,
	FirstForm,
	firstActioning,
	onFirstAction,
	SecondActionIcon,
	secondActionText,
	SecondForm,
	secondActioning,
	onSecondAction,
	mainActionButton,
	onDelete,
	onDeleteText,
}) => {
	const intl = useIntl()

	return (
		<div className="refinement">
			{options ? (
				<RadioGroup
					options={options}
					onChange={() => setIsGrid(!isGrid)}
					value={isGrid ? 'Grille' : 'List'}
					optionType="button"
					buttonStyle="solid"
				/>
			) : (
				<Link to={`/${backTo}`}>
					<ArrowLeftOutlined />
				</Link>
			)}

			<div className="refinement-item">
				{firstActionText ? (
					<AddItem
						mainActionButton={mainActionButton}
						title={
							<div>
								<FirstActionIcon />
								<p>{firstActionText}</p>
							</div>
						}
						Form={FirstForm}
						adding={firstActioning}
						onAdd={onFirstAction}
					/>
				) : (
					<></>
				)}

				{secondActionText ? (
					<AddItem
						title={
							<div>
								<SecondActionIcon />
								<p>{secondActionText}</p>
							</div>
						}
						Form={SecondForm}
						adding={secondActioning}
						onAdd={onSecondAction}
						mainActionButton={mainActionButton}
					/>
				) : (
					<></>
				)}

				<Link to="/calendars">
					<AddItem
						mainActionButton={mainActionButton}
						secondary
						title={
							<div>
								<CalendarOutlined />
								<p>{intl.formatMessage({ id: 'add.calendar' })}</p>
							</div>
						}
						Form={AddCalendar}
					/>
				</Link>
			</div>
		</div>
	)
}

export default Refinement
