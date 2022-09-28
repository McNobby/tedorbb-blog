import PocketBase from "pocketbase";
const pocketbase = new PocketBase(process.env.DB_URL);

export default pocketbase;
