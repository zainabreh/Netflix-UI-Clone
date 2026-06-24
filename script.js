const accordian = document.querySelectorAll(".accordian");

accordian.forEach((ele,index) => {
    let icon = ele.querySelector(".icon");
    let ans = ele.querySelector(".answer");

    ele.addEventListener('click',()=>{
        
        icon.classList.toggle('active');
        ans.classList.toggle('active');
        
    })
    
});