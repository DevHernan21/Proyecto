// Módulo para manejar las ventanas modales
const modalModule = {
    // Abrir modal
    openModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    },

    // Cerrar modal
    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    },

    // Inicializar eventos de los modales
    initializeModals() {
        // Cerrar modales con el botón X o el botón Cancelar
        document.querySelectorAll('.close-modal').forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                if (modal) {
                    this.closeModal(modal.id);
                }
            });
        });

        // Cerrar modales haciendo clic fuera del contenido
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal.id);
                }
            });
        });
    }
};

export default modalModule;