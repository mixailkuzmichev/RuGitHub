const btn_type = document.getElementById('type');
const btn_lang = document.getElementById('lang');
const btn_sort = document.getElementById('sort');
const btn_create = document.getElementById('create');

const repoList = document.querySelector('.repo-list')

const createNewRepo = () => {
    const newRepo = document.createElement('li');
    newRepo.classList.add('repo-item');

    const h3 = document.createElement('h3');

    const nameRepo = document.createElement('span');
    nameRepo.classList.add('name-repo');
    nameRepo.textContent = 'Репа';

    const badge = document.createElement('span');
    badge.classList.add('badge', 'public');
    badge.textContent = 'Публичный';

    h3.appendChild(nameRepo);
    h3.appendChild(badge);

    const description = document.createElement('p');
    description.textContent = 'JavaScript · добавлен только что';

    const button = document.createElement('button');
    button.classList.add('star-btn');
    button.textContent = '☆ Добавить';

    newRepo.appendChild(h3);
    newRepo.appendChild(description);
    newRepo.appendChild(button);

    repoList.appendChild(newRepo);


}

const stateButton = (event) => {
    if (event.target.tagName === 'BUTTON' && (event.target.classList.contains('star-btn') || event.target.classList.contains('starred-btn'))) {
        const button = event.target;

        if (button.textContent.trim() === '☆ Добавить') {
            button.textContent = '★ Избранное';
            button.classList.remove('star-btn');
            button.classList.add('starred-btn');
        } else {
            button.textContent = '☆ Добавить';
            button.classList.remove('starred-btn');
            button.classList.add('star-btn')
        }
    }

}


btn_create.addEventListener('click', createNewRepo)
repoList.addEventListener('click', stateButton)