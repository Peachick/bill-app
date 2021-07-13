const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
	path: path.resolve(__dirname, "../.env"),
});

module.exports = {
	PORT: process.env.PORT || 9696,
	DEV_ENV: process.env.NODE_ENV === 'development',
}
