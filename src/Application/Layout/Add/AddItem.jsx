import React, { useState } from 'react'
import './addItem.scss'
import { Drawer, Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

const AddItem = ({ children, title }) => {
	const [visible, setVisible] = useState(false)
	return (
		<>
			<div className="addItem">
				<Button type="text" label="add" onClick={() => setVisible(true)}>
					<PlusCircleOutlined />
				</Button>
			</div>
			<Drawer
				title={title}
				width={720}
				onClose={() => setVisible(false)}
				visible={visible}
				bodyStyle={{ paddingBottom: 80 }}
				footer={
					<div
						style={{
							textAlign: 'right',
						}}
					>
						<Button
							onClick={() => setVisible(false)}
							style={{ marginRight: 8 }}
						>
							Cancel
						</Button>
						<Button onClick={() => setVisible(false)} type="primary">
							Submit
						</Button>
					</div>
				}
			>
				{children}
			</Drawer>
		</>
	)
}

export default AddItem
