document.addEventListener('DOMContentLoaded', function() {
    let exerciseCount = 0;
    const exerciseCounter = document.getElementById('exerciseCount');
    const addExerciseButton = document.getElementById('addExercise');
    const removeExerciseButton = document.getElementById('removeExercise');
    const toggleButton = document.getElementById('toggleInfo');
    const additionalInfo = document.getElementById('additionalInfo');

    addExerciseButton.addEventListener('click', function() {
        exerciseCount++;
        updateExerciseCounter();
    });

    removeExerciseButton.addEventListener('click', function() {
        if (exerciseCount > 0) {
            exerciseCount--;
            updateExerciseCounter();
        }
    });

    toggleButton.addEventListener('click', function() {
        if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
            additionalInfo.style.display = 'block';
            toggleButton.textContent = 'Ocultar Informações Adicionais';
        } else {
            additionalInfo.style.display = 'none';
            toggleButton.textContent = 'Mostrar Informações Adicionais';
        }
    });

    function updateExerciseCounter() {
        exerciseCounter.textContent = exerciseCount;
    }
});
