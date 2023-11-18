import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import router from './router';
dotenv.config();

/**
 * conexion de la base de datos
 */
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/cursos_online";
mongoose
  .connect(dbUrl)
  .then(mongoose => console.log("Contectado a la base de datos"))
  .catch(err => console.err(err));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/api',router);
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log('servidor ejecutando en el puerto 3000');
})