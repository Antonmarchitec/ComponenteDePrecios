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


    }catch (error){
        console.log(" Se registro un error ")
    }
}



const pintarElementos = (data) =>{
    data.forEach(element => {
        //console.log(element)
        base_template.querySelector("#title").textContent = element.state
        base_template.querySelector("#number").textContent = element.score
        base_template.querySelector("#storage").textContent = element.storage
        base_template.querySelector("#users").textContent = element.user
        base_template.querySelector("#send").textContent = element.send
        base_template.querySelector("#buton").dataset.btn = element.btn

        //styles bloque 2
        base_template.querySelector("#block").style.background = element.color_base 
        base_template.querySelector("#title").style.color = element.color_text
        base_template.querySelector("#number").style.color = element.color_text 
        base_template.querySelector("#storage").style.color = element.color_text 
        base_template.querySelector("#users").style.color = element.color_text 
        base_template.querySelector("#send").style.color = element.color_text 
        base_template.querySelector("#buton").style.background = element.color_btn 
        base_template.querySelector("#buton").style.color = element.color_text_btn 





           
        
        /*
        base_template.querySelector("#number").style.color = element.colorText  
        base_template.querySelector("#title").style.color = element.colorText
        base_template.querySelector("#storage").style.color = element.colorText
        base_template.querySelector("#users").style.color = element.colorText
        base_template.querySelector("#send").style.color = element.colorText
        base_template.querySelector("#buton").style.background = element.colorBackgrundWhite
        base_template.querySelector("#buton").style.background = element.colorBackgrundWhite
        */


        let clone = base_template.cloneNode(true)
        base_fragment.appendChild(clone)
    });
    base__blocks.appendChild(base_fragment)

    //base_template.querySelector("#title").textContent = 

}