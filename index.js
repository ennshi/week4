import {Server} from 'http';

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
};
const server = Server((req, res) => {
    if(req.url === '/result4/') {
        let body = '';
        req.on('data', chunk => {
            body = chunk;
        });
        req.on('end', () => {
            const data = {
                message: 'enn_shi',
                'x-result': req.headers['x-test'],
                'x-body': body
            };
            res.writeHead(200, {'Content-Type': 'application/json', ...CORS});
            res.write(JSON.stringify(data));
            res.end();
        });
    }
});
server.listen(process.env.PORT || 4000);
