import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Controla la vista actual: 'votar' o 'admin'
  view: 'votar' | 'admin' = 'votar';

  // Controla si se muestra el modal de contraseña
  showPasswordModal: boolean = false;
  // Variable para guardar lo que ingrese el usuario en el input
  passwordInput: string = '';

  // Contraseña de administración (cámbiala según lo necesites)
  adminPassword: string = '1234';

  // Muestra la vista de votación
  mostrarVotar() {
    this.view = 'votar';
  }

  // Muestra el modal de contraseña para la administración
  mostrarAdmin() {
    this.showPasswordModal = true;
  }

  // Se invoca al confirmar la contraseña
  confirmAdmin() {
    if (this.passwordInput === this.adminPassword) {
      this.view = 'admin';
      this.showPasswordModal = false;
      this.passwordInput = '';
    } else {
      alert('Contraseña incorrecta');
      this.passwordInput = '';
      this.showPasswordModal = false;
    }
  }

  // Permite cancelar el modal de contraseña
  cancelAdmin() {
    this.showPasswordModal = false;
    this.passwordInput = '';
  }

  // Maneja el estado de voto para mostrar el overlay de agradecimiento (30 segundos)
  voteDone: boolean = false;
  handleVote() {
    if (!this.voteDone) {
      this.voteDone = true;
      setTimeout(() => {
        this.voteDone = false;
      }, 1000);
    }
  }
}
