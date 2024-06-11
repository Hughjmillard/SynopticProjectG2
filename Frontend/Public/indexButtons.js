// buttons for the homepage to link to other pages

function clickHandler(e){
    if (e.currentTarget != e.target){
        const targetId = e.target.id;
        if (targetId == "symptomArrow"){
            window.location.href = "/symptoms"
        }else if (targetId == "contactArrow"){
            window.location.href = "/contact"
        }else if (targetId == "learningButton"){
            window.location.href = "/learning"
        }
    }
}

console.log("test")
document.getElementById('indexWrapper').addEventListener("click", clickHandler);
