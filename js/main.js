let base__blocks = document.querySelector("#base__blocks")
let base_template = document.querySelector("#base_template").content
let base_fragment = document.createDocumentFragment()



document.addEventListener("DOMContentLoaded", () =>{
    funcionCargar()
    
})


const funcionCargar = async () =>{
    try{
        let res = await fetch("base.json")
        let data = await res.json()
        //console.log(data)
        pintarElementos(data)


        /*let elementBtn = document.getElementById("buton")
        console.log(elementBtn)*/

        /*elementBtn.addEventListener("mouseover", () =>{
            elementBtn.style.background = "yellow";
            elementBtn.style.color = "black";
            elementBtn.style.transition = "0.2s";
            console.log("mostrar")
        })

        elementBtn.addEventListener("mouseout", () =>{
            elementBtn.style.background = "red";
            elementBtn.style.color = "black";
            elementBtn.style.transition = "0.2s";
            console.log("desaparecer")
        })*/


       
    

    }catch (error){
        console.log(" Se registro un error ")
    }
}


const pintarElementos = (data) =>{
    data.forEach(element => {
        //console.log(element)
        base_template.querySelector("#title").textContent = element.state
        base_template.querySelector("#title").style.color = element.color_text

        base_template.querySelector("#number").textContent = element.score
        base_template.querySelector("#number").style.color = element.color_text 

        base_template.querySelector("#storage").textContent = element.storage
        base_template.querySelector("#storage").style.color = element.color_text 

        base_template.querySelector("#users").textContent = element.user
        base_template.querySelector("#users").style.color = element.color_text 

        base_template.querySelector("#send").textContent = element.send
        base_template.querySelector("#send").style.color = element.color_text 

        base_template.querySelector("#buton").dataset.btn = element.btn
        base_template.querySelector("#buton").style.background = element.color_btn 
        base_template.querySelector("#buton").style.color = element.color_text_btn

        base_template.querySelector("#block").style.background = element.color_base 
        base_template.querySelector("#block").style.width = element.width 
        base_template.querySelector("#block").style.height = element.height 
        base_template.querySelector("#block").style.padding = element.padding 


        base_template.querySelector("#icon").style.color = element.color_dolar 

        let clone = base_template.cloneNode(true)
        base_fragment.appendChild(clone)
    
        
         ////////
         document.addEventListener("mouseover", (e)=>{
            if(e.target.dataset.btn === "1"){
                /*elementBtn.style.background = "green";
                elementBtn.style.color = "black";
                elementBtn.style.transition = "0.2s";*/
                console.log("le diste al numero 1")
            }else if(e.target.dataset.btn === "2"){
                console.log("le diste al numero 2")
            }else if(e.target.dataset.btn === "3"){
                console.log("le diste al numero 3")
            }
        })
        
    });
    base__blocks.appendChild(base_fragment)

}







/*
let buton = document.querySelector("#buton")
buton.addEventListener("mouseover", function() {
    buton.style.backgroundColor = "#e74c3c";
});

buton.addEventListener("mouseout", function() {
    buton.style.backgroundColor = "#3498db";
});


*/

/*

*/
