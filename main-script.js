import patientModule from './modules/patientModule.js';
import modalModule from './modules/modalModule.js';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    modalModule.initializeModals();
    setupEventListeners();
}

function setupEventListeners() {
    // Botón Mis Pacientes
    document.getElementById('mis-pacientes-btn').addEventListener('click', togglePatientsList);

    // Botón Cerrar Sesión
    document.getElementById('logout-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Botones de acción
    document.getElementById('register-evolution').addEventListener('click', () => {
        if (!patientModule.currentPatient) {
            alert('Por favor, seleccione un paciente primero');
            return;
        }
        modalModule.openModal('evolution-modal');
    });

    document.getElementById('generate-prescription').addEventListener('click', () => {
        if (!patientModule.currentPatient) {
            alert('Por favor, seleccione un paciente primero');
            return;
        }
        modalModule.openModal('prescription-modal');
    });

    document.getElementById('generate-order').addEventListener('click', () => {
        if (!patientModule.currentPatient) {
            alert('Por favor, seleccione un paciente primero');
            return;
        }
        modalModule.openModal('medical-order-modal');
    });

    // setup de Formularios
    setupFormListeners();
}

function setupFormListeners() {
    // Formulario de evolución
    document.getElementById('evolution-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const evolution = {
            date: document.getElementById('evolution-date').value,
            notes: document.getElementById('evolution-notes').value,
            timestamp: new Date().toISOString()
        };
        patientModule.addEvolution(evolution);
        modalModule.closeModal('evolution-modal');
        e.target.reset();
    });

    // Formulario de receta
    document.getElementById('prescription-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const prescription = {
            medication: document.getElementById('medication').value,
            dosage: document.getElementById('dosage').value,
            duration: document.getElementById('duration').value,
            instructions: document.getElementById('instructions').value,
            timestamp: new Date().toISOString()
        };
        patientModule.addPrescription(prescription);
        modalModule.closeModal('prescription-modal');
        e.target.reset();
    });

    // Formulario de pedido médico
    document.getElementById('medical-order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const order = {
            studyType: document.getElementById('study-type').value,
            details: document.getElementById('study-details').value,
            urgency: document.getElementById('urgency').value,
            timestamp: new Date().toISOString()
        };
        patientModule.addMedicalOrder(order);
        modalModule.closeModal('medical-order-modal');
        e.target.reset();
    });
}

function togglePatientsList() {
    const patientsList = document.getElementById('patients-list');
    if (patientsList.classList.contains('hidden')) {
        patientsList.innerHTML = patientModule.patients.map(patient => `
            <div class="patient-item" data-id="${patient.id}">
                ${patient.nombre}
            </div>
        `).join('');
        
        // Agregar eventos a los items de pacientes
        document.querySelectorAll('.patient-item').forEach(item => {
            item.addEventListener('click', () => {
                const patient = patientModule.getPatientById(parseInt(item.dataset.id));
                patientModule.setCurrentPatient(patient);
            });
        });
        
        patientsList.classList.remove('hidden');
    } else {
        patientsList.classList.add('hidden');
    }
}