const axios = require('axios')
const readline = require('readline')

const data = {
  url: 'http://www.diarioonline.com.br',
  range: {
    init: 9000,
    end: 9100,
  }
}

const responses = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const run = async () => {
  let i
  for (i = data.range.init; i <= data.range.end; i++) {
    try {

      let res = await axios.get(`${data.url}/_/${i}`)
      res = res.data.split('title>')
      res = res[1]
      responses.push(res)
      console.log(`${i} --> ${res}`)

    } catch (err) {
      console.log(`${i} --> ${err}`)
    }
  }
}

run()