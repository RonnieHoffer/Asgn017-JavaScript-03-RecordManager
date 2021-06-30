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

       document.querySelector(".display").append(div_1);

   });
});