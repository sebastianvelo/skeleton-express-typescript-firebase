import * as functions from "firebase-functions";
import Application from "./app/Application";
import controllers from "./app/controller/controllers";

const PORT = process.env.PORT || 5000;
const application = new Application(PORT, controllers);
const app = functions.https.onRequest(application.init());

export default app;