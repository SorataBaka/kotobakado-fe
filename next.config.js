/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error("MONGO_URI is not defined in .env file");

const initialize = async () => {
	await mongoose.connect(MONGO_URI);
	mongoose.connection.on("connecting", () => {
		console.log("Connecting to MongoDB Database")
	})
	mongoose.connection.on("connected", () => {
		console.log("Connected to MongoDB Database")
	})
	mongoose.connection.on("error", () => {
		console.error(err)
		throw err
	})
	
};
initialize();
module.exports = nextConfig;
