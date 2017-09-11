// var friends =['Daira', 'Lucy', 'Mom', 'Dad', 'Joel'];
// var verse1=['Lines of code in the file,']
// var verse12=["Lines of Code,"]
// var verse3=['Strikes one out, Clears it all out,'];

// for (var i = 0; i < friends.length; i++) {
//     var name = friends[i];
//     console.log(friends[i] + "   has")
//     for (var j=3 ; j>0; j--){
//     console.log(j+" "+verse1+" "+ j +" "+ verse12+" "+name+" "+verse3+ --j + verse1)

//  }
// } 

function song() {
    var friends = ['Elias', 'Daria', 'Hock', 'Sam', 'Lucy']
    var fline = 1
    var j = "No more lines of code"
   
   
    for (var i = 0; i < friends.length; i++) {
        var name = friends[i];
        
        
        // this is only to appear on the console 
        // console.log(friends[i] + ' ' + "has");
        // ****this follow code is to create the friends on to you html***
        
        





        // *******
        
        for (var x = 99, y = 98; x > 2, y > 1; x-- , y--)
        // you dont need it to long into  console so reaplce it with -  var p = document.createElement("p")
            console.log(x + " " + "Lines of code in the file" + ";" + x + " " + "Lines of code" + ";" + name + " " + 'Strikes one out, clears one out' + " " + y + " " + 'lines of code in the file');
        if (y = 2)
            
            // p.innerText
            console.log(y + "lines of code left in the file" + y + "lines of code" + name + "stikes one out, clears it all out" + fline + " line pf code left in the file")
        else if (y > 0); {
            
            
            console.log(fline + " " + "line of Code left on the file" + ";" + fline + " " + "line of code" + " " + name + " " + "Strike one out, clears it all out" + ' ' + j + ' ' + "left in the file")
        }
    }
}
// document.addEventListener('DOMContentLoaded', function () {

//     var btn = document.createElement('button');
//     btn.innerText= "DO NOT CLICK";
//     btn.addEventListener('click', function song(){ });
//     document.appendChild(btn);
//     var pic = document.getElementById("my-img");
//     // pic.addEventListener('dblclick', function () {
//     //     alert("You have double clicked the image!");
//     });


// });

 






document.addEventListener('DOMContentLoaded', function(){
    var para=document.createElement("P");
    document.getElementById("hello world").appendChild(para);
    var btn =document.createElement('button');
     btn.innerText= "DO NOT CLICK";
     btn.addEventListener('click', song);
     para.appendChild(btn);




})

































