# simple_implementation_express

import dotenv from "dotenv"
import { server } from "./server.js"

dotenv.config()

const app = new server()

app.get("/books", (req, res) => {
    // ...
})

app.listen(process.env.PORT)
