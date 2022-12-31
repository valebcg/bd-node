require('dotenv').config()
const CsbInspector = require('csb-inspector')
CsbInspector()  
const { addPosts, getPosts, duplicatePost  } = require('./posts');
const express = require ('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(express.static('public'))

// ----levantando el servidor----
app.listen(process.env.PORT, console.log("SERVIDOR ENCENDIDO"))
