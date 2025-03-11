document.addEventListener("DOMContentLoaded", 
    function(e){
        let new_div = document.querySelector('#new_div');
        let edit_btn = document.querySelector('#edit_btn');
        let ok_btn = document.querySelector('#ok_btn');
        let cancel_btn = document.querySelector('#cancel_btn')
        let name = document.querySelector('#name');
        let new_name = document.querySelector('#new_name');

        new_div.style.display = "none";

        edit_btn.addEventListener("click",
            function(e){
                edit_btn.style.display = "none";
                new_div.style.display = "block";
            }
        )
        ok_btn.addEventListener("click",
            function(e){
                name.textContent = new_name.value;
                edit_btn.style.display = "inline";
                new_div.style.display = "none";
            }
        )
        cancel_btn.addEventListener("click", (e) =>{
            edit_btn.style.display = "inline";
            new_div.style.display = "none";
        })
        
    }
)