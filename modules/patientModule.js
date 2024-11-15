// Módulo para manejar la lógica de pacientes
const patientModule = {
    currentPatient: null,

    // Lista de pacientes de ejemplo
    patients: [
        {
            id: 1,
            nombre: 'Juan Pérez',
            edad: 45,
            historia: 'HC-001',
            evoluciones: [],
            recetas: [],
            pedidos: []
        },
        {
            id: 2,
            nombre: 'María López',
            edad: 30,
            historia: 'HC-002',
            evoluciones: [],
            recetas: [],
            pedidos: []
        },
        {
            id: 3,
            nombre: 'Carlos García',
            edad: 50,
            historia: 'HC-003',
            evoluciones: [],
            recetas: [],
            pedidos: []
        }
    ],

    // Obtener un paciente por ID
    getPatientById(id) {
        return this.patients.find(p => p.id === id);
    },

    // Establecer el paciente actual
    setCurrentPatient(patient) {
        this.currentPatient = patient;
        this.updatePatientDisplay();
    },

    // Actualizar la visualización del paciente
    updatePatientDisplay() {
        if (!this.currentPatient) return;

        document.getElementById('patient-info').classList.remove('hidden');
        document.getElementById('patient-name').textContent = this.currentPatient.nombre;
        document.getElementById('patient-id').textContent = this.currentPatient.id;
        document.getElementById('patient-age').textContent = this.currentPatient.edad;
        document.getElementById('patient-history').textContent = this.currentPatient.historia;

        const evolutionsContainer = document.getElementById('patient-evolutions');
        const prescriptionsContainer = document.getElementById('patient-prescriptions');
        const ordersContainer = document.getElementById('patient-orders');

        evolutionsContainer.innerHTML = this.currentPatient.evoluciones.map(evolution => `
            <button class="btn-evolution" data-id="${evolution.timestamp}">Evolución ${evolution.date}</button>
        `).join('');

        prescriptionsContainer.innerHTML = this.currentPatient.recetas.map(prescription => `
            <button class="btn-prescription" data-id="${prescription.timestamp}">Receta ${prescription.medication}</button>
        `).join('');

        ordersContainer.innerHTML = this.currentPatient.pedidos.map(order => `
            <button class="btn-order" data-id="${order.timestamp}">Pedido ${order.studyType}</button>
        `).join('');
    },

    // Agregar evolución al paciente
    addEvolution(evolution) {
        if (!this.currentPatient) return;
        this.currentPatient.evoluciones.push(evolution);
    },

    // Agregar receta al paciente
    addPrescription(prescription) {
        if (!this.currentPatient) return;
        this.currentPatient.recetas.push(prescription);
    },

    // Agregar pedido médico al paciente
    addMedicalOrder(order) {
        if (!this.currentPatient) return;
        this.currentPatient.pedidos.push(order);
    }
};

export default patientModule;