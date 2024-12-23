const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
let n=3;

function ChangeSlide(){
    for(let i = 0; i < imgs.length; i++){    
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
ChangeSlide();
prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;    
    }else{
        n=imgs.length-1  ;
    }
    ChangeSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n=0;
    }
    ChangeSlide();
})
                                