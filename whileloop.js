// var i=0;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }
// //Alternatively, You could  break out of a loop like so:
// var i=0;
// while(true){
// 	i++;
// 	if(i===3){
// 		break;
// 	}
// }
var listItem = [
    {name: 'myName1', gender: 'male'},
    {name: 'myName2', gender: 'female'},
    {name: 'myName3', gender: 'male'},
    {name: 'myName4', gender: 'female'},
  ]

for (const iterator of listItem) {
    console.log(iterator.name+ ' and '+ iterator.gender);
}