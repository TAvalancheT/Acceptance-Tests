const { Given, And, When, Then } = require('cucumber');

Scenario('Se deja una opinión de un curso terminado.', function () {
    Given('se verifica en el sistema que el curso haya sido completado', function () {});
    And('se verifica que el usuario terminó con las actividades del mismo.', function () {});
    When('el usuario se dirige al apartado de comentarios del curso y comenta su experiencia.', function () {});
    Then('el sistema verifica que todo esté correcto .y el comentario del usuario se publica para todos.', function () {});

});

/*
Input:
- curso
- actividades
- comentario
Output:
- publicación de comentario
*/