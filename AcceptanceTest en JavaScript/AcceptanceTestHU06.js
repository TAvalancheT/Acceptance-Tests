const { Given, And, When, Then } = require('cucumber');

Scenario('Desplegar apartado de "Libro de calificaciones".', function () {
    Given('un apoderado desea conocer el rendimiento de su hijo/a por medio de un libro calificaciones.', function () {});
    When('el apoderado selecciona la casilla "Libro de calificaciones".', function () {});
    And('el sistema despliega el Libro de calificaciones.', function () {});
    Then('el apoderado visualiza las notas que fue obteniendo su hijo/a en las preguntas de comprensión lectora que fue haciendo.', function () {});

});

/*
Input:
- Clic en libro de calificaciones
Output:
- Notas obtenidas
*/