import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonList,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from "@ionic/angular/standalone";
import { StatusBar } from "@capacitor/status-bar";
import {MangaService} from "../services/manga.service";
import {CommonModule, NgFor, NgForOf, NgOptimizedImage} from "@angular/common";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    NgFor,
    IonList,
    IonItem,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  ],
  standalone: true
})
export class SidebarPage{

  mangalist: Array<any> = new Array<any>()

  page: number = 1

  constructor(protected mangaService: MangaService) {
    mangaService.getManga(this.page).subscribe((res: any) => {
      this.mangalist.push(...res.data)
    })
  }

  getMoreMangas(){
    this.page++
    this.mangaService.getManga(this.page).subscribe((res: any) => {
      for(let i = 0; i < res.data.length; i++)[
        this.mangalist.push(res.data[i])
      ]
    })
  }

  infiniteScroll(event: InfiniteScrollCustomEvent){
    this.getMoreMangas()
    setTimeout(() => {
      event.target.complete()
    }, 500)
  }




}
