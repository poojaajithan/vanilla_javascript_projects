let val = 0;
const count = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
       const styles = e.currentTarget.classList;
       if (styles.contains('increase')){
        val++;
       }
       else if (styles.contains('decrease')){
        val--;
       }
       else{
        val=0;
       }

       if (val<0){
            count.style.color = "red";
       }
       else if (val>0){
            count.style.color = "green";
       }
       else{
            count.style.color = "#222"
       }
       count.textContent = val;
    });
})


