console.log('exec set_header_accept.js');

let headers = $request.headers;

console.log('request url: ' + $request.url);
console.log('set "Accept: application/vnd.github.v3.raw" in request header');

headers['Accept'] = 'application/vnd.github.v3.raw';

console.dir(headers);

$done({headers});
