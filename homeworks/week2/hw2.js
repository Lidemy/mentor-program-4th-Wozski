function capitalize (str){
let n = str[0];
let code = n.charCodeAt(0)
let result = []

for(let i = 0 ; i < str.length ; i++){

if ( i === 0 && code >= 97 && code <= 122){
			result += String.fromCharCode(code -32)
		} else {
		 result += str[i]; 
		}
		

 
}
	
return result

}



console.log(capitalize(',hello'));