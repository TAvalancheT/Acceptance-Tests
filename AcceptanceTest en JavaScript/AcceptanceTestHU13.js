const { Given, And, When, Then } = require('cucumber');

Scenario('Agendar una cita para una asistencia', function () {
    Given('un usuario desea tener una cita con un profesor virtual para mejorar su rendimiento.', function () { });
    And('el usuario selecciona el apartado de "Agendar cita".', function () { });
    When('el usuario seleccione a un profesor, rellene el nombre, seleccione el horario y hace clic en "Registrar cita".', function () { });
    Then('el sistema valida que haya rellenado los campos correctamente y se le verifica vía correo electrónico que su cita ha sido registrada.', function () { });
});

/*
Input:
- profesor
- nombre 
- horario
- registrar cita
Output:
- verificación de cita
*/