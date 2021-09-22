import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
  { id:1, nome: 'Marta',sobrenome: 'Kent', telefone: 332255 },
  { id:2, nome: 'Paula',sobrenome: 'Isabela', telefone: 33412 },
  { id:3, nome: 'Laura',sobrenome: 'Antonia', telefone: 221155 },
  { id:4, nome: 'Luiza',sobrenome: 'Maria', telefone: 113344 },
  { id:5, nome: 'Lucas',sobrenome: 'Machado', telefone: 433254 },
  { id:6, nome: 'Pedro',sobrenome: 'Alvares', telefone: 512255 },
  { id:7, nome: 'Paulo',sobrenome: 'José', telefone: 132151 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
