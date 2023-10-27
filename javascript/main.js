window.onload = function(){
    let city_item = document.getElementById('city');

    city_item.addEventListener('click', function(){
        if(city_item.value != ''){
            window.location.href = city_item.value + '.html'
        }
    })
}