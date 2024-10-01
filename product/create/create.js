document.addEventListener('DOMContentLoaded', () => {
    // Тумблер
    document.querySelector('.form__radio-container').addEventListener('click', function(event) {
        const toggleButton = document.querySelector('.form__radio-input');
        if (event.target.closest('.form__toggle-label') || event.target.closest('.form__toggle-button')) {
            toggleButton.checked = !toggleButton.checked;
        }
    });

    // Таблица
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
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><textarea class="form__table-input" type="text"></textarea></td>
            <td><textarea class="form__table-input" type="text"></textarea></td>
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
    
        // Добавляем событие для удаления строки при клике на ячейку
        const removeCell = newRow.querySelector('.form__td-remove-button');
        removeCell.addEventListener('click', () => {
            newRow.remove();
        });
    });
    
    // Обработчик события для существующих строк
    document.querySelectorAll('.form__td-remove-button').forEach(cell => {
        cell.addEventListener('click', () => {
            cell.closest('tr').remove();
        });
    });
});
