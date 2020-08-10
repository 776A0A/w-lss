// JSON格式编解码
export function stringify(val) {
	try {
		return JSON.stringify(val)
	} catch (err) {}
}
export function parse(val) {
	try {
		return JSON.parse(val)
	} catch (error) {}
}
