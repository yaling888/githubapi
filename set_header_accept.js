console.log('exec set_header_accept.js')

let headers = $request.headers;

headers['Accept'] = 'application/vnd.github.v3.raw';

$done({headers});

console.log('set "Accept: application/vnd.github.v3.raw" in request header')
