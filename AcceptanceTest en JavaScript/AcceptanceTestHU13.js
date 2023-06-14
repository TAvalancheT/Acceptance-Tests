/********************************************************************************************************/

//HU13
Scenario('Agendar una cita para una asistencia', function () {
    Given('el usuario desea tener una cita con un profesor virtual para mejorar su rendimiento.', function () { });
    And('el usuario selecciona el apartado de "Agendar cita".', function () { });
    When('el usuario rellene sus datos en los campos obligatorios, seleccione el horario  y hace click en "Registrar cita".', function () { });
    Then('el sistema valida que haya rellenado los campos correctamente y se le verifica vía correo electrónico que su cita ha sido registrada.', function () { });
});
/*
Input:
- Clic en agendar cita
Output:
- Verificación de cita
*/