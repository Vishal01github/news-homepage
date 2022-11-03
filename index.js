var menu_close = true
function menuToggler(){
    var x = document.getElementById("bars")
    var y = document.getElementById("cross")
    if(menu_close){
        x.style.display = 'none'
        y.style.display = 'inline-block'
        var menu = document.getElementById('links')
        menu.style.display = 'flex'
        var empty_div = document.getElementById('empty')
        empty_div.style.display = 'block'
        menu_close = !menu_close
    }else{
        x.style.display = 'inline-block'
        y.style.display = 'none'
        var menu = document.getElementById('links')
        menu.style.display = 'none'
        var empty_div = document.getElementById('empty')
        empty_div.style.display = 'none'
        menu_close = !menu_close
    }
}