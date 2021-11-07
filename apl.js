// //axis
// //q1
// var axios=require("axios")
// var fs=require('fs')
// axios.get('http://saral.navgurukul.org/api/courses').then((response)=>{
//     fs.writeFileSync('courses.json',JSON.stringify(response.data,null,4))
//     var rade=fs.readFileSync('courses.json','utf-8')
//     let data=JSON.parse(rade)
//     const input=require('prompt-sync')()
//     const input1=input('enter courses no:-')
//     for (i of data["availableCourses"]){
//         if(i['id']==input1){
//         console.log(i);
//     }
// }
// }).catch((error)=>{
//     console.log(error);
// })

// q2
// var axios=require("axios")
// var fs=require('fs')
// axios.get('http://saral.navgurukul.org/api/courses/74/exercises').then((response)=>{
//     fs.writeFileSync('courses1.json',JSON.stringify(response.data,null,4))
// }).catch((error)=>{
//     console.log(error);
// })
// var read=JSON.parse((fs.readFileSync('courses1.json','utf-8'))),int=require('prompt-sync')()
// var read=read['data'],caunt=0,caunt1=0
// for(i of read){
//     caunt++
//     console.log(caunt,i['slug']);
//     }
// var input=int('enter courses:-')
// for (j of read){
//     caunt1++
//     if(input==caunt1){
//         console.log(j);
// }
// }

//3
// var axios=require("axios")
// var fs=require('fs')
// var read=fs.readFileSync('courses.json','utf-8')
// var read1=JSON.parse(read),c=0,c2=0,arry=[]
// for(i of read1['availableCourses']){
//     c++
//     arry.push(i['id'])
//     console.log(c,i['name']);
// }
// var int=require('prompt-sync')()
// var input=int('enter the cour no:-')
// for(j in arry){
//     if(input==j){
//     axios.get('http://saral.navgurukul.org/api/courses/'+arry[j]+'/exercises').then((response)=>{
//         console.log(response.data);
//     }).catch((error)=>{
//         console.log(error);
//     })
// }}