var elasticsearch = require('elasticsearch');
var common = require('../configs/common')
var client = new elasticsearch.Client({ host: 'elastic.databases:9200', requestTimeout: 60000 });

console.log('Elastic url ', elasticUrl)
// var client = new elasticsearch.Client({ host: '35.244.13.142:9200' });
// var client = new elasticsearch.Client({ host: 'elk.databases:9200' });
function getElasticClient() {
    return client
}
module.exports = {
    getElasticClient: getElasticClient
}