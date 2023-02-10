const axios = require('axios');
async function beforeRender(req, res) {

    const response = await axios.get('http://localhost:8000/api/chart');
    req.data.articulos = response.data
    console.log(req.data.articulos)
    console.log(response.data)
}