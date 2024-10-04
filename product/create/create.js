document.addEventListener('DOMContentLoaded', () => {
    // Тумблер
    document.querySelector('.form__radio-container').addEventListener('click', function(event) {
        const toggleButton = document.querySelector('.form__radio-input');
        if (event.target.closest('.form__toggle-label') || event.target.closest('.form__toggle-button')) {
            toggleButton.checked = !toggleButton.checked;
        }
    });

    // Селект
    const select = document.querySelector('.form__select');
    const icon = document.getElementById('select-icon-button');
    let isOpen = false;
    
    select.onclick = function () {
        isOpen = !isOpen; // Переключаем флаг состояния
        if (isOpen) {
            icon.classList.add('rotate-icon');
        } else {
            icon.classList.remove('rotate-icon');
        }
    };
    
    select.onblur = function () {
        isOpen = false; // Закрываем select при потере фокуса
        icon.classList.remove('rotate-icon');
    };
    
    document.querySelectorAll('.form__table-input').forEach(textarea => {
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto'; // Сначала сбрасываем высоту
            textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем новую высоту
        });
    });
    
    const addButton = document.querySelector('.form__add-row');
    const risksBody = document.getElementById('risks-body');
    
    // Функция для добавления новой строки
    addButton.addEventListener('click', () => {
        const lastRow = risksBody.querySelector('tr:last-child'); // Последняя строка
        const newRow = document.createElement('tr');
    
        // Копируем данные из предыдущей строки
        const lastTextareas = lastRow.querySelectorAll('textarea');
        const lastInputs = lastRow.querySelectorAll('input[type="number"]');
        const lastCheckbox = lastRow.querySelector('input[type="checkbox"]');
    
        newRow.innerHTML = `
            <td><textarea class="form__table-input">${lastTextareas[0].value}</textarea></td>
            <td><textarea class="form__table-input">${lastTextareas[1].value}</textarea></td>
            <td><input class="form__table-input" type="number" value="${lastInputs[0].value}"></td>
            <td><input class="form__table-input" type="number" value="${lastInputs[1].value}"></td>
            <td><input type="checkbox" class="form__table-input" ${lastCheckbox.checked ? 'checked' : ''}></td>
            <td class="form__td-remove-button"><button class="form__remove-row">-</button></td>
        `;
    
        risksBody.appendChild(newRow);
    
        // Обработчик для textarea в новой строке
        const newTextareas = newRow.querySelectorAll('.form__table-input');
        newTextareas.forEach(textarea => {
            textarea.addEventListener('input', () => {
                textarea.style.height = 'auto'; // Сбрасываем высоту
                textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем новую высоту
            });
        });
    
        // Добавляем событие для удаления строки при клике на кнопку
        const removeButton = newRow.querySelector('.form__remove-row');
        removeButton.addEventListener('click', () => {
            newRow.remove();
        });
    });
    
    // Обработчик для удаления существующих строк
    document.querySelectorAll('.form__td-remove-button').forEach(cell => {
        cell.addEventListener('click', () => {
            cell.closest('tr').remove();
        });
    });
    
    document.querySelectorAll('.form__input-container').forEach(container => {
        const label = container.querySelector('.form__label');
        const input = container.querySelector('.form__input');
    
        const labelWidth = label.offsetWidth;  // Получаем ширину label
        const paddingLeft = labelWidth + 25;   // Добавляем отступ 15px после текста
    
        input.style.paddingLeft = `${paddingLeft}px`;  // Устанавливаем новый padding-left
    });
    
});
