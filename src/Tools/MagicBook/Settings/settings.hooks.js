import { useSettingsByAccountId } from './settings'
import { omit } from 'lodash'

export const useFindSettingsByAccountId = accountId => {
	const { data, ...result } = useSettingsByAccountId(accountId)
	return { ...result, settings: data && omit(data.setting[0], ['__typename']) }
}
