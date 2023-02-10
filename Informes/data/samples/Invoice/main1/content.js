const axios = require('axios');
async function beforeRender(req, res) {

    const response = await axios.get('http://localhost:8000/api/reportUser');
    req.data.usuarios = {...response.data.usuarios}
    console.log(req.data.usuarios)
}