function domainName(url){
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    console.log(match)
   if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    const finalUrl = match[2]
    return finalUrl
   }
   else {
       return null;
   }
}

console.log(domainName("www.xakep.ru"))