const { Given, And, When, Then } = require('cucumber');

Scenario('Permitir hacer de nuevo una actividad.', function () {
    Given('un estudiante desea poder volver a comenzar una actividad luego de haberla comenzado.', function () { });
    When('el estudiante haya comenzado una actividad ', function () { });
    And('seleccione el botón "Volver a comenzar".', function () { });
    Then('la página de la actividad volverá a cargar. ', function () { });
    And('el estudiante tendrá la oportunidad de reiniciar la actividad.' , function () { });
});
/*
Input:
- Clic en volver a comenzar
Output:
- Reiniciar la actividad
*/

