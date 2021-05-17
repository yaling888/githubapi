//console.log('exec set_header_accept.js');

function setHeaders() {
    
    let url = $request.url;
    let token = getUrlParam(url, '_t');
    let headers = $request.headers;
    url = removeURLParameter(url, '_t');
  
    headers['Accept'] = 'application/vnd.github.v3.raw';
    headers['Authorization'] = ' token ' + token;
    headers['User-Agent'] = 'curl';

    $done({url, headers});
}

function getUrlParam(url, name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = url.match(reg);
    if (r != null) return r[2]; return '';
}

function removeURLParameter(url, parameter) {
    let urlparts = url.split('?');
    if(urlparts.length >= 2) {
        let prefix = parameter + '=';
        let pars = urlparts[1].split(/[&;]/g);

        for(let i = pars.length; i-- > 0;) {
          if(pars[i].lastIndexOf(prefix, 0) !== -1) {
            pars.splice(i, 1);
          }
        }

        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
}

setHeaders();
