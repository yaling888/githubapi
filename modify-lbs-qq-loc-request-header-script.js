let headers = $request.headers;
headers['Accept'] = 'application/json;charset=UTF-8';
headers['Cookie'] = null;
headers['Halley-Sequence'] = null;
headers['Halley-IMEI'] = null;
delete headers['Cookie'];
delete headers['Halley-Sequence'];
delete headers['Halley-IMEI'];


console.log(JSON.stringify(headers));

$done({headers: headers});
