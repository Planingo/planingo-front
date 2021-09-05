import React, { useState } from 'react'
import './addItem.scss'
import { Button, Modal, Notification } from '@planingo/ditto'
import { useParams } from 'react-router'

const AddItem = ({
	Form,
	title,
	cta,
	secondary,
	onAdd,
	adding,
	onEdit,
	editing,
	mainActionButton,
}) => {
	const { id } = useParams()
	const [item, setItem] = useState()
	return (
		<div className="addItem">
			<Modal
				onOk={async () =>  onAdd ? await onAdd(item, id) : onEdit ? await onEdit(item, id) : null}
				OpenModal={
					(showModal) => <Button
					type="primary"
					label="add"
					ghost={secondary}
					onClick={showModal}
				>
					{cta || title}
				</Button>
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
				<Form setItem={setItem} />
			</Modal>
		</div>
	)
}

export default AddItem
