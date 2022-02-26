var headers = $request.headers;
headers['Accept'] = 'application/json;charset=UTF-8';
console.log(JSON.stringify(headers));

$done({headers: headers});
