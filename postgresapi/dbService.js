const  Pool = require('pg').Pool;

const conopts = {
    user: 'postgres',
    password: 'oskari',
    host: 'localhost',
    database: 'continuous',
    port: 5432
};

const pool = new Pool(conopts);





function getTopics() {
    pool.connect((err, client, done) => {
        if (err) throw err
        client.query('SELECT * FROM topics', (err, res) => {
          done()
          if (err) {
            console.log(err.stack)
          } else {
            console.log(res.rows)
          }
        })
      })
          
}





getTopics();
console.log(getTopics());

module.exports = getTopics