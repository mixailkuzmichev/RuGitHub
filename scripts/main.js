const btn_1 = document.getElementById('btn-1')
const btn_2 = document.getElementById('btn-2')
const dropdown_btn = document.getElementById('dropdownButton')

//метод для свича состояний кнопок

const toggleState = (button) => {
    button.classList.toggle('star-btn');
    button.classList.toggle('starred-btn');
    button.textContent = button.classList.contains('star-btn') ? '☆ Добавить' : '★ Избранное';

};


btn_1.addEventListener('click', () => toggleState(btn_1))
btn_2.addEventListener('click', () => toggleState(btn_2))
