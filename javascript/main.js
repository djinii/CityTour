window.onload = function(){
    let city_item = document.getElementById('city');
    city_item.addEventListener('change', function(){
        if(city_item.value != ''){
            window.location.href = city_item.value + '.html'
        }
    })
    let menu1 = document.getElementById('menu1')
    let menu2 = document.getElementById('menu2')
    let menu3 = document.getElementById('menu3')
    let menu4 = document.getElementById('menu4')


    let tourlist_box = document.querySelector('.tourist_box');
    let select_tour = document.querySelector('.select_box');
    let culture = document.querySelector('.culture');
    let nature = document.querySelector('.nature');
    let experience = document.querySelector('.experience');

    let radios = document.querySelectorAll('input[type="radio"][name="tourist"]');
    let select = document.getElementById('sel1');
    let select2 = document.getElementById('sel2');
    let select3 = document.getElementById('sel3');

    menu1.addEventListener('click',function(){
        select_tour.style.display = 'none'
    })

    menu2.addEventListener('click', function(){
        select_tour.style.display = 'block'
    })
    menu3.addEventListener('click',function(){
        select_tour.style.display = 'none'
    })
    menu4.addEventListener('click',function(){
        select_tour.style.display = 'none'
    })


    // 각 라디오 버튼에 이벤트 리스너를 추가
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'history_r' && this.checked) {
                culture.style.display = 'block'
                nature.style.display = 'none'
                experience.style.display = 'none'
            }else if(this.value === 'nature_r' && this.checked){
                culture.style.display = 'none'
                nature.style.display = 'block'
                experience.style.display = 'none'
            }else if(this.value === 'experience_r' && this.checked){
                culture.style.display = 'none'
                nature.style.display = 'none'
                experience.style.display = 'block'
            }
        });
    });
}