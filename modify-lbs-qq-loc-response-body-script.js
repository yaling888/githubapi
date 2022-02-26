const myDate = new Date();
const myStatus = "HTTP/1.1 200 OK";
const myHeaders = {
    "Date": myDate.toUTCString(),
    "Content-Type": "application/octet-stream;charset=gbk",
    "Connection": "keep-alive",
    "Server": "Trpc httpd"
};
const myData = "{}"

const myResponse = {
    status: myStatus,
    headers: myHeaders,
    body: myData
};

$done(myResponse);
