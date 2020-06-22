import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { ApiLoginService } from 'src/app/service/api-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modelo: usuario = new usuario(0, '', '', '', '', '', '', 0, '', 0, false, 0, 0, '', 0, '', '');
  validacion: boolean = false;
  noUsuario: boolean = false;

  constructor(
    private api: ApiLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {    
    if (this.modelo.USUARIO && this.modelo.PASS) {
      this.api.Login(this.modelo).subscribe(res => {        

        if (!res.error_estado) {

          this.modelo = res.modelo;

          localStorage.setItem('_usr', JSON.stringify(res.modelo));
          localStorage.setItem('_u', res.modelo.USUARIO);
          localStorage.setItem('_tk', res.tk);

          this.api.usuarioId(this.modelo.ID).subscribe(res => {
            localStorage.setItem('_user', JSON.stringify(res.modelo));

            this.router.navigate(['/lista-operaciones']);
          })

        } else {
          this.noUsuario = true;
        }
      }, error => {
        console.log(error);
        this.router.navigate(['/error']);        
      })

    } else {
      this.validacion = true;
    }
  }

}
