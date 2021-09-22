import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
  { nome: 'Marta', },
  { nome: 'Paula', },
  { nome: 'Laura', },
  { nome: 'Luiza', },
  { nome: 'Lucas', },
  { nome: 'Pedro', },
  { nome: 'Paulo', },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
