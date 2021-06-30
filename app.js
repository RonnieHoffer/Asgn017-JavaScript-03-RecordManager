document.addEventListener("DOMContentLoaded", (e) => {
   document.querySelector(".info_form").addEventListener("submit", (e) => {
       e.preventDefault();

       console.log(e);

       const div_1 = document.createElement("div");
       div_1.className = "record_entry";
       const record_image = document.createElement("img");
       record_image.className = "record_image";
       record_image.src = "./images/vinyl.png";
       div_1.append(record_image);
       
       const p_1 = document.createElement("p");
       const p_1_value = document.querySelector("#record_name").value;
       p_1.innerText = p_1_value;
       div_1.append(p_1);
       
       const p_2 = document.createElement("p");
       const p_2_value = document.querySelector("#artist").value;
       p_2.innerText = p_2_value;
       div_1.append(p_2);

       const p_3 = document.createElement("p");
       const p_3_value = document.querySelector("#genre").value;
       p_3.innerText = p_3_value;
       div_1.append(p_3);

       const delete_button = document.createElement("button");
       delete_button.className = "delete_button";
       delete_button.innerText = "Delete";
       delete_button.addEventListener("click", (event) => {
            const myObj = event.target.parentNode;
            myObj.remove();
            });
       div_1.append(delete_button);
       

       document.querySelector(".display").append(div_1);
   });

   let delete_button_list = document.querySelectorAll(".delete_button");
   delete_button_list.forEach((button) => {
       button.addEventListener("click", (event) => {
        // event.preventDefault();  Don't need this, b/c we are not dealing within a form.

        console.log(event);

        console.log(event.target);
        
        console.log(event.target.parentNode);

        const myObj = event.target.parentNode;
        myObj.remove();
       });
   });
});