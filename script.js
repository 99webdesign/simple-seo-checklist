const checkboxes = document.querySelectorAll('.seo-item');
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
    const totalItems = checkboxes.length;
    const checkedItems = document.querySelectorAll('.seo-item:checked').length;
    const progressPercentage = (checkedItems / totalItems) * 100;

    progressBar.style.width = progressPercentage + '%';
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress);
});
