var modifiedHeaders = $request.headers;

#delete modifiedHeaders['Cookie'];
#delete modifiedHeaders['Halley-Sequence'];
#delete modifiedHeaders['Halley-IMEI'];

#modifiedHeaders['Accept'] = 'application/json;charset=UTF-8';

console.log(JSON.stringify(modifiedHeaders));

$done();

#var modifiedPath = '/api2/abc?k=v';
#$done({path: modifiedPath, headers : modifiedHeaders});
