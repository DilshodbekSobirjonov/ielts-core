let toggle = document.querySelector(".toggle")
let showlink = document.querySelector(".showlink")
let body = document.querySelector(".body")

toggle.addEventListener('click', function() {
    toggle.classList.toggle('toggle-active')
    showlink.classList.toggle('showlink-active')
    body.classList.toggle('body-active')
})

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    toggle.classList.remove('toggle-active')
    body.classList.remove('body-active')
    showlink.classList.remove('showlink-active')
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

    function scrollToFormAndSelectOption(subject) {
        // Сначала, найдем форму и секцию option
        var form = document.getElementById('registrationForm');
        var select = document.getElementById('subjects');

        // Найдем соответствующий option и выберем его
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value === subject) {
                select.selectedIndex = i;
                break;
            }
        }

        // Теперь, выполним плавный скроллинг к форме
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    }



