let headers = $request.headers;
headers['Accept'] = 'application/json;charset=utf-8';
headers['Content-Type'] = 'application/json;charset=utf-8';

delete headers['Cookie'];
delete headers['Halley-Sequence'];
delete headers['Halley-IMEI'];

#console.log(JSON.stringify(headers));

$done({headers: headers});
