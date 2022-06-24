import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Lasagne', 'A traditional Italian pasta dish.', 'https://images.ctfassets.net/0yf82hjfqumz/56IspPW5UKTP9xapSKKHhM/e63caf87f113642734445ec6f4325e8c/Juustoinen-lasagne.jpg?fit=fill&h=900&q=60&w=1600')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
