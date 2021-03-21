// get the question (element) and save it into acc variable so when the 
// question is clicked the answer drops down

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = getElementsByClassName("answer");
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

let acc = document.querySelectorAll('.question');

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active");
        let ans = document.querySelectorAll('.answer');
        console.log('dfs')
        if(ans[i].style.display === 'block'){
            ans[i].style.display = 'none';
        }else{
            ans[i].style.display = 'block';
        }
    })
}
