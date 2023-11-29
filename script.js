//your JS code here. If required.
function mapLetters(str){
	let obj = {};
	let arr = str.split('');
	for(let i = 0; i < arr.length; i++){
		obj[arr[i]] = [];
	}
	for(let key in obj){
		for(let i = 0; i < arr.length; i++){
			if(arr[i] == key){
				obj[key].push(i);
			}
		}
	}
	return obj;
}