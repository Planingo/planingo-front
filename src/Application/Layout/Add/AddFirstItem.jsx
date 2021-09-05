import React from 'react'
import './addItem.scss'
import { Button, Modal, Notification } from '@planingo/ditto'

const AddFirstItem = ({ children, title, cta }) => {
	return (
		<div className="addItemEmpty">
			<Modal
				OpenModal={
					(showModal) =>
					<>
						{cta && <Button className="cta" onClick={showModal}>{cta}</Button>}
					</>
			  	}
				ValidateButton={
				(handleOk) => <Notification
					OpenNotification={(openNotification) => 
						<Button key="validate" className="cta" onClick={() => {
						openNotification()
						handleOk()
						}}>Valider</Button>
						
					}/>
				}
				title={title}
			>
				{children}
			</Modal>
		</div>
	)
}

export default AddFirstItem
