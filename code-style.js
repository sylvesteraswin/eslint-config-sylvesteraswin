module.exports = {
	extends: ['prettier'],
	env: {
		browser: true,
		node: true,
	},
	rules: {
		camelCase: [2, {properties: "always"}]
	},
}
