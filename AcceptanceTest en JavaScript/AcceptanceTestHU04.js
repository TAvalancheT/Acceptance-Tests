const { Given, And, When, Then } = require('cucumber');

Scenario('Generar descuento por hermanos', function () {
    Given('el apoderado al momento de suscribir a un hijo/a más al sistema. ', function () {});
    And('el apoderado visualice el apartado de "¿Cuenta con algún hermano suscrito?"', function () {});
    And('el apoderado marca la casilla "si".', function () {});
    When('el sistema muestre la casilla "Introducir ID y correo del hermano(a) suscrito"', function () {});
    And('el sistema valide que los datos del nuevo suscritor y su hermano(a) son correctos y coinciden.', function () {});
    Then('el apoderado recibe un descuento al momento de inscribir al hermano/a de su hijo/a que ya estaba suscrito al servicio.', function () {});

});

/*
Input:
- ID
- correo
Output:
- descuento
*/