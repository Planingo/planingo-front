import React, { useState } from 'react'
import './addCalendar.scss'
import { Form, Input, Select, DatePicker, Upload, Modal } from 'antd'
import { Radio, RadioGroup } from '@planingo/ditto'

import { PlusOutlined } from '@ant-design/icons'
import * as Minio from 'minio'

const AddCalendar = () => {
	const { Option } = Select

	const [genderChecked, setGenderChecked] = useState('Femme')

	const [previewVisible, setPreviewVisible] = useState(false)

	const [previewImage, setPreviewImage] = useState('')

	const [previewTitle, setPreviewTitle] = useState('')

	const [files, setFiles] = useState([])

	const getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = () => resolve(reader.result)
			reader.onerror = (error) => reject(error)
		})
	}

	const getBuffer = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.readAsBinaryString(file)
			reader.onload = () => resolve(reader.result)
			reader.onerror = (error) => reject(error)
		})
	}

	const handleCancel = () => setPreviewVisible(false)

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj)
		}

		setPreviewImage(file.url || file.preview)
		setPreviewVisible(true)
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
		)
	}
	const minioClient = new Minio.Client({
		endPoint: 'planingio.caprover.cocaud.dev',
		port: 443,
		useSSL: true,
		accessKey: 'bugsyaya',
		secretKey: 'Bugsyaya est 1 lapin !',
	})

	const handleChange = async ({ fileList }) => {
		setFiles(fileList)
	}

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div className="ant-upload-text">Upload</div>
		</div>
	)

	return (
		<div className="addStudent">
			<Form layout="vertical" hideRequiredMark>
				<Form.Item
					name="picture"
					label="Image"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Upload
						customRequest={async ({ file, onError, onSuccess }) => {
							const coucou = await getBuffer(file)
							minioClient.putObject(
								'test',
								file.name,
								coucou,
								undefined,
								(err) => {
									if (err) onError()
									else onSuccess()
								},
							)
						}}
						listType="picture-card"
						fileList={files}
						onPreview={handlePreview}
						onChange={handleChange}
					>
						{files.length >= 1 ? null : uploadButton}
					</Upload>
					<Modal
						visible={previewVisible}
						title={previewTitle}
						footer={null}
						onCancel={handleCancel}
					>
						<img alt="example" style={{ width: '100%' }} src={previewImage} />
					</Modal>
				</Form.Item>
				<Form.Item
					name="lastname"
					label="Nom"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder="Please enter user name" />
				</Form.Item>
				<Form.Item
					name="firstname"
					label="Prénom"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Input placeholder="Please enter user name" />
				</Form.Item>
				<Form.Item
					name="birthday"
					label="Date de naissance"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<DatePicker />
				</Form.Item>
				<Form.Item
					name="gender"
					label="Genre"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<RadioGroup
						onChange={setGenderChecked}
						defaultValue={genderChecked}
						buttonStyle="solid"
					>
						<Radio.Button value="woman">Femme</Radio.Button>
						<Radio.Button value="man">Homme</Radio.Button>
						<Radio.Button value="autre">autre</Radio.Button>
					</RadioGroup>
				</Form.Item>
				<Form.Item
					name="pathway"
					label="Formation"
					rules={[{ required: true, message: 'Please enter user name' }]}
				>
					<Select>
						<Option>1</Option>
						<Option>2</Option>
						<Option>3</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="commentaire"
					label="Commentaire"
					rules={[
						{
							required: true,
							message: 'please enter url description',
						},
					]}
				>
					<Input.TextArea rows={4} placeholder="please enter url description" />
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddCalendar
