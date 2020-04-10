import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

public nome_usuario:string = ' Bianca';
  constructor() { }

  public somaDoisNumeros(): void{
    alert('teste');

  } 

  ngOnInit() {
    this.somaDoisNumeros();
 
  }


 

}
