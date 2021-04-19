import { Tabs } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import Calendars from '../../../Calendars/Calendars'
import { useGetCompanyById } from '../../companies.hooks'
import { CompanyConstraintsRead } from './Constraints'
import './detailCompany.scss'
import Informations from './Informations/informations'

const DetailCompany = () => {
	const { id } = useParams()

	const { TabPane } = Tabs

	const { loading, company } = useGetCompanyById(id)

	if (loading) return null

	return (
		<div className="details">
			<Tabs defaultActiveKey="1">
				<TabPane tab={`${company.name}`} key="1">
					<Informations company={company} loading={loading} />
				</TabPane>
				<TabPane tab="Contraintes" key="2">
					<div className="contraints-informations">
						<CompanyConstraintsRead />
					</div>
				</TabPane>
				<TabPane tab="Calendriers" key="3">
					<div>
						<Calendars />
					</div>
				</TabPane>
			</Tabs>
		</div>
	)
}

export default DetailCompany
