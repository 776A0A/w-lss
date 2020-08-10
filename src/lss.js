// 简易localStorage封装
import { stringify, parse } from './utils'

const ls = window.localStorage
const ss = window.sessionStorage

export default {
	// def 作为后备内容
	get(key, def) {
		let val
			// 无论什么key，都会在session和local中寻找
		;(val = ls.getItem(stringify(key)) || ss.getItem(stringify(key))) &&
			(val = parse(val))

		// 没有值则返回后备内容
		!val && (val = def)

		return val
	},
	// isSession 用来设置是存session还是local
	set(key, val, isSession = false) {
		try {
			if (isSession) ss.setItem(stringify(key), stringify(val))
			else ls.setItem(stringify(key), stringify(val))
		} catch (error) {
			return false
		}
		return this
	},
	remove(key) {
		ls.removeItem(stringify(key)) || ss.removeItem(stringify(key))
		return this
	},
	clear() {
		// 将session和local中的都清空
		ls.clear() || ss.clear()
		return this
	}
}
