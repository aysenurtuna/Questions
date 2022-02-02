const buttons = document.querySelectorAll(".open-description");

buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        
        const question = e.currentTarget.parentElement.parentElement;

        if(question.classList.contains("show-text")){
            question.classList.remove("show-text")
        }
        else{
            question.classList.add("show-text")
        }

      
    });
});
