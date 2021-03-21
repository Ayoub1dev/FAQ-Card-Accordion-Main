

let acc = document.querySelectorAll('.question');
let ans = document.querySelectorAll('.answer');

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click',function(){
        
       
        acc[i].classList.toggle("active");
        acc[i].classList.toggle('arrow-down')
        
        if(ans[i].style.display === 'block'){
            ans[i].style.display = 'none';
        }else{
            ans[i].style.display = 'block';
        }
         
    })
}
