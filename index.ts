import "dotenv/config";
import express from 'express';
import routes from "./routes/index"
import connectDB from "./DB/connect";
import cors from "cors"
import cookiesParser from "cookie-parser"

const app = express()
connectDB();

app.use(express.json())
app.use(cors({origin:"http://localhost:3000", credentials: true}))
app.use(cookiesParser())
const PORT:any = process.env.PORT || 4000;
app.use(routes)


app.listen(PORT, () => {
    console.log(`Escuchando en http://localhost:${PORT}`);
});
