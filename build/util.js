const path = require("path");

const resolvePath = (...paths) => {
	return path.resolve(__dirname, ...paths);
}

module.exports = {
	resolvePath,
}
