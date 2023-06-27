const { Given, And, When, Then } = require('cucumber');

Scenario('Registrar cita con docente. ', function () {
    Given('el apoderado desea conocer el progreso de su menor.', function () {});
    And('el apoderado selecciona el apartado "Agendar cita"', function () {});
    When('el apoderado elige el horario y el docente con el cual desea agendar la cita. ', function () {});
    And('el apoderado visualiza la disponibilidad del docente seleccionado.  ', function () {});
    Then('el sistema registra la cita con el docente y envía un correo de confirmación al apoderado. ', function () {});
});

/*
Input:
- horario
- docente
Output:
- confirmación de cita
*/