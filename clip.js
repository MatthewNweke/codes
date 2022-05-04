function func(){
    let cover = document.getElementById('cover').style.display;
    if (cover == "block") {
        document.getElementById('cover').style.display = "none";
    } else {
        document.getElementById('cover').style.display = "block";
    }

    
}

// document.getElementById('redcol').style.display = "block";

function klickme(){
   document.getElementById('cover').style.display = "none";
   document.getElementById('redcol').style.display = "none";
}


// function flipme(){
//     document.getElementById('cover').style.display = "none";
//     document.getElementById('redcol').style.display = "none";
// }

// let mean = () =>{
//     let item = document.getElementById('item').style.display;
//     if (item="block"){
//         document.getElementById('cover').style.display='block';
//     }
//     else{document.getElementById('cover').style.display='none';}
// }

