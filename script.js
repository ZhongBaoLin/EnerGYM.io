let opn = document.getElementById('opn');
let clse = document.getElementById('cls');
let section = document.getElementById('sect');

opn.addEventListener('click', function(){
    section.classList.add('open');
});

clse.addEventListener('click', function(){
    section.classList.remove('open');
});


document.addEventListener('DOMContentLoaded', function () {
    // Створюємо модальне вікно
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.color = '#000';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.borderRadius = '10px';
    modal.style.zIndex = '1000';
    modal.style.width = '300px';
    modal.style.textAlign = 'left';  // Вирівнюємо текст по лівому краю
    document.body.appendChild(modal);

    // Додаємо хрестик для закриття
    const closeModal = document.createElement('span');
    closeModal.innerText = '×';
    closeModal.style.fontSize = '30px';
    closeModal.style.position = 'absolute';
    closeModal.style.top = '10px';
    closeModal.style.right = '10px';
    closeModal.style.cursor = 'pointer';
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.appendChild(closeModal);

    // Контент модального вікна
    const modalContent = document.createElement('div');
    modal.appendChild(modalContent);

    // Отримуємо список обладнання
    const equipmentItems = document.querySelectorAll('.obladnnanya li');
    const descriptions = [
        'Набір штанг: Цей набір штанг ідеально підходить для початківців та досвідчених спортсменів. В ньому ви знайдете все необхідне для ефективних тренувань вдома та в спортзалі.\n\nЇх вага:\n- 2 диска по 2,5кг\n- 2 диска по 5кг\n- 2 диска по 10кг\n- 2 диска по 15кг',
        'Набір дисків: Цей набір - ідеальний вибір для всіх, хто хоче додати різноманітності та інтенсивності своїм тренуванням.\n\nЇх вага:\n- 1,25кг\n- 2,5кг\n- 5кг\n- 10кг\n- 15кг',
        'Гантелі: Цей набір стане відмінним доповненням до вашого тренувального майданчику.\n\nВага гантелей:\n- 1кг\n- 2кг\n- 3кг\n- 5кг\n- 7,5кг\n- 10кг',
        'Гирі: Цей набір - ідеальний вибір для всіх, хто хоче додати різноманітності та інтенсивності своїм тренуванням.\n\nЇх вага:\n- 4кг\n- 8кг\n- 12кг\n- 16кг\n- 20кг',
        'Товар 5: Опис п\'ятого товару.',
        'Товар 6: Опис шостого товару.'
    ];

    equipmentItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Очищаємо попередній опис
            modalContent.innerHTML = '';

            // Створюємо назву товару
            const productName = document.createElement('h3');
            productName.innerText = item.innerText;
            modalContent.appendChild(productName);

            // Додаємо опис товару
            const productDescription = document.createElement('p');
            productDescription.style.color = '#000'; // Чорний текст
            productDescription.innerText = descriptions[index] || 'Немає опису';
            modalContent.appendChild(productDescription);

            modal.style.display = 'block';
        });
    });
});

const btnOpen = document.getElementById('btn');
const btnSection = document.getElementById('btnSection');
const bttn = document.getElementById('bttn');

btnOpen.addEventListener('click', function(){
    if (btnSection.style.display=== 'none' || btnSection.style.display ===''){
        btnSection.style.display = 'block';
    } else {
        btnSection.style.display = 'none'
    }
})

bttn.addEventListener('click' , function(){
    if (btnSection.style.display == 'block') {
        btnSection.style.display = 'none';
    }
})
let butt = document.createElement('button')
butt.textContent = '×'
btnSection.appendChild(butt)
butt.style.border = 0;
butt.style.position = 'absolute';
butt.style.right = 0;
butt.style.top = '5px';
butt.style.fontSize = '30px';
butt.addEventListener('click', function(){
    btnSection.style.display = 'none'
})