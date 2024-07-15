function alt(){
    let section_1_01 = document.getElementsByClassName('section_1_01');
    let section_1_02 = document.getElementsByClassName('section_1_02');
    let section_1_03_01 = document.getElementsByClassName('section_1_03_01');
    let section_1_03_02 = document.getElementsByClassName('section_1_03_02');
    for(let i = 0; i < section_1_01.length; i++){
        section_1_01[i].style.zIndex = '1'
    }
    for(let i = 0; i < section_1_02.length; i++){
        section_1_02[i].style.zIndex = '1'
    }
    for(let i = 0; i < section_1_03_01.length; i++){
        section_1_03_01[i].style.display = 'block'
        section_1_03_01[i].style.transition = 'all 20s ease-in-out;'
        section_1_03_01[i].style.zIndex = '3';
    }
    for(let i = 0; i < section_1_03_02.length; i++){
        section_1_03_02[i].style.display = 'block'
        section_1_03_02[i].style.zIndex = '2';
        section_1_03_02[i].style.backgroundColor = '#fafafa';
    }
    
}

function hidePopUp(){
    let section_1_01 = document.getElementsByClassName('section_1_01');
    let section_1_02 = document.getElementsByClassName('section_1_02');
    let section_1_03_01 = document.getElementsByClassName('section_1_03_01');
    let section_1_03_02 = document.getElementsByClassName('section_1_03_02');
    for(let i = 0; i < section_1_01.length; i++){
        section_1_01[i].style.zIndex = '3'
        section_1_01[i].style.filter = 'blur(0px)';
    }
    for(let i = 0; i < section_1_02.length; i++){
        section_1_02[i].style.zIndex = '3'
        section_1_02[i].style.filter = 'blur(0px)';
    }
    for(let i = 0; i < section_1_03_01.length; i++){
        section_1_03_01[i].style.display = 'none'
    }
    for(let i = 0; i < section_1_03_02.length; i++){
        section_1_03_02[i].style.display = 'none'
        section_1_03_02[i].style.backgroundColor = 'transparent';
    }
}

function removePlaceHolder(input){
    let label = input.previousElementSibling;
    switch (input.placeholder){
        case "Work email*":
            label.textContent = "Work email";
            break;
        case "First name":
            label.textContent = "First name";
            break;
        case "Last name":
            label.textContent = "Last name";
            break;
        default:
            break;
    }
    input.dataset.placeholder = input.placeholder
    input.placeholder = ""
}
function restorePlaceHolder(input){
    let label = input.previousElementSibling;
    if(input.value.length === 0 ){
        label.textContent = "";
    }else{
        switch (input.dataset.placeholder){
            case "Work email*":
                label.textContent = "Work email";
                break;
            case "First name":
                label.textContent = "First name";
                break;
            case "Last name":
                label.textContent = "Last name";
                break;
            default:
                break;
        }
    }
    input.placeholder = input.dataset.placeholder
}

function changeImage(content){
    let content_1 = document.getElementById("content_1");
    let content_2 = document.getElementById("content_2");
    let content_3 = document.getElementById("content_3");
    const imageElement = document.getElementById("img_01");
    content.style.backgroundColor = "#ff3147"
    content.style.color = "white"
    if(content.id === "content_1"){
        imageElement.src = "images/image_oe28ow.png"
        content_2.style.backgroundColor = "#fafafa"
        content_2.style.color = "black"
        content_3.style.backgroundColor = "#fafafa"
        content_3.style.color = "black"
    }
    if(content.id === "content_2"){
        imageElement.src = "images/image_oe28ow2.png"
        content_1.style.backgroundColor = "#fafafa"
        content_1.style.color = "black"
        content_3.style.backgroundColor = "#fafafa"
        content_3.style.color = "black"
    }
    if(content.id === "content_3"){
        imageElement.src = "images/image_oe28ow3.png"
        content_1.style.backgroundColor = "#fafafa"
        content_1.style.color = "black"
        content_2.style.backgroundColor = "#fafafa"
        content_2.style.color = "black"
    }
}



