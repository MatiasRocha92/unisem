// Funcionalidad para el formulario de checkout de UNISEM
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables globales
    let selectedPaymentMethod = null;
    
    // Elementos del DOM
    const btnPagar = document.getElementById('btn-pagar');
    const modalPago = document.getElementById('modal-pago');
    const cerrarModal = document.getElementById('cerrar-modal');
    const cancelarPago = document.getElementById('cancelar-pago');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const formTarjeta = document.getElementById('form-tarjeta');
    const btnPagarTarjeta = document.getElementById('btn-pagar-tarjeta');
    const btnPagarMercadoPago = document.getElementById('btn-pagar-mercadopago');

    // Abrir modal de pago
    btnPagar.addEventListener('click', function() {
        // Mostrar modal
        modalPago.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Cerrar modal
    function closeModal() {
        modalPago.classList.add('hidden');
        document.body.style.overflow = 'auto';
        // Resetear selección de método de pago
        resetPaymentSelection();
    }

    cerrarModal.addEventListener('click', closeModal);
    cancelarPago.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera
    modalPago.addEventListener('click', function(e) {
        if (e.target === modalPago) {
            closeModal();
        }
    });

    // Selección de método de pago
    function resetPaymentSelection() {
        paymentOptions.forEach(option => {
            option.classList.remove('border-unisem-orange');
            option.classList.add('border-gray-200');
            const indicator = option.querySelector('.payment-indicator');
            if (indicator) {
                indicator.classList.remove('border-unisem-orange');
                indicator.classList.add('border-gray-300');
                const dot = indicator.querySelector('div');
                if (dot) dot.style.opacity = '0';
            }
        });
        formTarjeta.classList.add('hidden');
        btnPagarTarjeta.classList.add('hidden');
        btnPagarMercadoPago.classList.add('hidden');
        selectedPaymentMethod = null;
    }

    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            const method = this.dataset.method;
            
            // Resetear selección previa
            resetPaymentSelection();
            
            // Seleccionar actual
            this.classList.remove('border-gray-200');
            this.classList.add('border-unisem-orange');
            
            const indicator = this.querySelector('.payment-indicator');
            if (indicator) {
                indicator.classList.remove('border-gray-300');
                indicator.classList.add('border-unisem-orange');
                const dot = indicator.querySelector('div');
                if (dot) dot.style.opacity = '1';
            }
            
            selectedPaymentMethod = method;
            
            // Mostrar formulario o botón correspondiente
            if (method === 'tarjeta') {
                formTarjeta.classList.remove('hidden');
                btnPagarTarjeta.classList.remove('hidden');
            } else if (method === 'mercadopago') {
                btnPagarMercadoPago.classList.remove('hidden');
            }
        });
    });

    // Botones de pago
    btnPagarTarjeta.addEventListener('click', function() {
        // Validar formulario de tarjeta
        const numeroTarjeta = document.getElementById('numero-tarjeta').value;
        const titular = document.getElementById('titular').value;
        const vencimiento = document.getElementById('vencimiento').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!numeroTarjeta || !titular || !vencimiento || !cvv) {
            alert('Por favor completa todos los datos de la tarjeta');
            return;
        }
        
        // Simular procesamiento
        alert('Procesando pago con tarjeta...');
        closeModal();
    });

    btnPagarMercadoPago.addEventListener('click', function() {
        // Simular redirección a MercadoPago
        alert('Redirigiendo a MercadoPago...');
        closeModal();
    });

    // Formateo automático de campos de tarjeta
    const numeroTarjetaInput = document.getElementById('numero-tarjeta');
    if (numeroTarjetaInput) {
        numeroTarjetaInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            value = value.replace(/(\d{4})/g, '$1 ').trim();
            e.target.value = value.substring(0, 19);
        });
    }

    const vencimientoInput = document.getElementById('vencimiento');
    if (vencimientoInput) {
        vencimientoInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value.substring(0, 5);
        });
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value.substring(0, 4);
        });
    }

    // Validación de fecha de nacimiento
    const fechaNacimiento = document.getElementById('fecha-nacimiento');
    if (fechaNacimiento) {
        fechaNacimiento.addEventListener('change', function(e) {
            const fecha = new Date(e.target.value);
            const hoy = new Date();
            const edad = hoy.getFullYear() - fecha.getFullYear();
            
            if (edad < 0 || edad > 120) {
                alert('Por favor ingresa una fecha de nacimiento válida');
                e.target.value = '';
            }
        });
    }

    // Validación del formulario principal
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Abrir modal de pago
            btnPagar.click();
        });
    }

    // Funcionalidad para el botón de emergencia
    const emergencyButtons = document.querySelectorAll('.emergency-button');
    emergencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes agregar la funcionalidad de emergencia
            // Por ejemplo, hacer una llamada telefónica o mostrar un modal
            if (confirm('¿Deseas llamar a emergencias?\nTeléfono: (0342) 4552000')) {
                window.location.href = 'tel:03424552000';
            }
        });
    });

});


