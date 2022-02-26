let headers = $request.headers;
headers['Accept'] = 'application/json;charset=UTF-8';
delete headers['Connection'];
delete headers['Accept-Encoding'];

console.log(JSON.stringify(headers));

$done({headers: headers});
