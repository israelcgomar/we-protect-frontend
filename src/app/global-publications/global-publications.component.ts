import { title } from 'process';
import { Data } from './data.model';
import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { GlobalPublicationsService } from './global.service';
import { User } from '../profile/user.model';


@Component({
  selector: 'app-global-publications',
  templateUrl: './global-publications.component.html',
  styleUrls: ['./global-publications.component.css']
})
export class GlobalPublicationsComponent implements OnInit {

  public modelPost:User;
  public data;
  public data2 = [];
  public titulo;
  public description;

  public comment;
  public comments = [];

  constructor(
    private globalPublicationsService:GlobalPublicationsService
  ) { }

  ngOnInit() {
    this.modelPost = new User();

    this.getInfo();
    this.getComments();
  }

  public setData() {
    this.modelPost.title = this.titulo;
    this.modelPost.description = this.description;
    this.modelPost.length = '121212.1';
    this.modelPost.latitude = '121212.2';
    this.modelPost.lugar = 'Avenida A. Madero No. 45';
    this.modelPost.date = '24/06/18';
  }

  public postNews(){
    this.setData();
    this.globalPublicationsService.createNews(this.modelPost)
                     .subscribe(
                     response => {
                      console.log('Entro aqui bien');
                     },
                     error => {
                      console.log('Entro aqui error');
                     }
                    );
  }

  public getInfo() {
    this.globalPublicationsService.getData()
      .subscribe( response => {
        this.data = response;
        this.data2 = this.data.post;
        console.log(this.data2);
        
     },
     error => {
      console.log('error');
     } 
    );
  }
  public getComments() {
    this.globalPublicationsService.getComents()
      .subscribe( response => {
        this.comment = response;
        this.comments = this.comment.comments;
        console.log(this.comments);
     },
     error => {
      console.log('error');
     } 
    );
  }

}
