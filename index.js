/**
 *  Parses the given URL into its different components.
 *
 *  TODO: Implement this function.
 *  NOTE: You may implement additional functions as you need, as long as this
 *    function behaves as specified in the instructions. Have fun! :)
 **/
function parse(url) {
    var parser = document.createElement('a');
	parser.href = url;

	var sch = decodeURIComponent(parser.protocol.substring(0, parser.protocol.length-1))
	var authority = {}
	var user = decodeURIComponent(parser.username)
	var pass = decodeURIComponent(parser.password)
	var hostname = parser.hostname
	var portname = parser.port
	var frag = parser.hash.substring(1, parser.hash.length);
	var pathname = decodeURIComponent(parser.pathname)

	var user
	var pass
	var hostname
	var portname
	var query 
	var search = decodeURIComponent(parser.search.substring(1, parser.search.length))
	// authority
	if(user.length == 0){
		user = null
	}
	if(pass.length == 0){
		pass = null
	}
	if(hostname.length == 0){
		hostname = null
	}
	if(portname.length == 0){
		if(sch == 'http'){
			portname = "80"
		}
		else if(sch == "https"){
			portname = "443"
		}
		else if(sch == "ftp"){
			portname = "21"
		}
		else if(sch == "ssh"){
			portnme = "22"
		}
		else
			portname = null
	}

	// authority array
	authority["username"] = user 
	authority["password"] = pass
	authority["host"] = hostname
	authority["port"] = portname

	// path length is 0, pathname recieves null
	if(pathname.length == 0){
		pathname = null;
	}
	var count = 0
	if(pathname.length == 1){

		if(url.charAt(url.length-1) == '/'){
			pathname = '/'
		}
		else{
			for(var i = sch.length + 3; i <= url.length; i++){
				if(url.charAt(i) == '/'){
					count++
				}
			}
			if(count>0){
				pathname = '/'
			}
			else{
				pathname = ''
			}
		}
	}

	// query
	if(search.length == 0){
		var query = null
	}
	else if(search.length > 0){
		console.log(name + def)
		var len = search.length
		var init = 0, next
		var query = {}
		for (var i = 0; i <= len; i++) { // this loop takes the elements of the query
			next = i
			if(search.charAt(i) == '='){
				var name = search.substring(init, next)
				init = next + 1

			}
			else if(search.charAt(i) == '&'){
				var def = search.substring(init, next)
				init  = next +1

			}
			else if(i == search.length-1){
				var def = search.substring(init, next+1)
			}
			console.log(name + " " +def)
			if(name != null && def != null){
				query[name] = def
			}
		}
			
	}

	// fragment
	if(frag.length == 0){
		frag = null;
	}
	var query2 = {}


    return {
    	scheme: sch,
    	authority,
    	path: pathname,
    	query,
    	fragment: frag
    };
}
