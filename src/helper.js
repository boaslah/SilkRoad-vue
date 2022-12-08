let houseData = {};

function showAndHideItem (currentViewId, oppositeViewId, action, house){
    if(currentViewId, oppositeViewId, action){
        let currentView = document.getElementById(currentViewId);
        let oppositeView = document.getElementById(oppositeViewId);
        currentView.style.display = action;
        oppositeView.style.display = "none";
        houseData = house;
        console.log(house);
    }
}

function showMenu(id){
    if(id){ 
        let name = document.getElementById(id);
        name.style.display = "block";  
    } 
} 
function hideMenu(id){
    if(id){
        let name = document.getElementById(id);
        name.style.display = "none";     
    } 
}

export{
    showAndHideItem,
    hideMenu,
    showMenu,
    houseData
}