/********************************************************************************************************/
//HU07
Scenario('Recibir notificaciones periodicas del desempeño academico del usuario', function () {
    Given('el apoderado desea recibir notificaciones periódicas del desempeño académico de su hijo/a en su correo electrónico', function () { });
    When('el sistema registre una nueva calificación o actualización en el desempeño del usuario.', function () { });    
    And('el sistema actualice la base de datos correspondiente con la nueva calificación.', function () { });    
    Then('el sistema enviará automáticamente una notificación al apoderado a través de su correo electrónico, informándole sobre el cambio en el desempeño académico.', function () { });
});
/*
Input:
- Nueva calificación
Output:
- Notificación al apoderado
*/


