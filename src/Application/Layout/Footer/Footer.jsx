import React from 'react'
import packageJson from '../../../../package.json';

export const Footer = () => {
	return <div className="footer">Planin'go - version {packageJson.version}</div>
}