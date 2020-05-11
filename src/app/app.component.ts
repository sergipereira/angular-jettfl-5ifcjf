import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-card-border-less',
  template: `
    <div style="background: #ECECEC;padding:30px;">
     <nz-card style="width:500px;" [nzBordered]="false" nzTitle="Card title" [nzExtra]="extraTemplate">
     <img id="logo-main" src="../images/logotipo.png" width="" height="">alt="Logo Thing main logo">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
    <p>© 2020 · WEMOVIT. Todos os direitos reservados. <a href="#">Termos de Uso</a> | <a href="#">Garantia de Segurança</a>
    </div>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>

  `,
  styles: [
    `
      p {
        margin: 1;
      }
    `
  ]
})
export class NzDemoCardBorderLessComponent {}