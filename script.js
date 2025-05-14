document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    const warningMessage = document.getElementById('warningMessage');

    addEmployeeBtn.addEventListener('click', () => {
        const fullNameInput = document.getElementById('fullName');
        const positionInput = document.getElementById('position');
        const ageInput = document.getElementById('age');
        const departmentSelect = document.getElementById('department');

        const fullName = fullNameInput.value.trim();
        const position = positionInput.value.trim();
        const age = parseInt(ageInput.value);
        const department = departmentSelect.value;

        if (fullName && position && !isNaN(age) && age >= 18 && department) {
            warningMessage.style.display = 'none';

            const employeeData = {
                fullName: fullName,
                position: position,
                age: age,
                department: department
            };

            console.log("Datos del empleado a enviar al Backend:", employeeData);

            employeeForm.reset();
        } else {
            warningMessage.style.display = 'block';
        }
    });
});
