import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
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
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ],
  standalone: true
})
export class SidebarPage{

  mangalist: Array<Array<any>> = new Array<Array<any>>()

  page: number = 1

  groupingBy:number = 2

  constructor(protected mangaService: MangaService) {
    mangaService.getManga(this.page).subscribe((res: any) => {
      this.mangalist = this.groupMangas(res.data)
    })
    StatusBar.setOverlaysWebView({overlay: false})
    console.log(this.mangalist)
  }

  getMoreMangas() {
    this.page++;

    this.mangaService.getManga(this.page).subscribe((res: any) => {
      const lastGroup = this.mangalist[this.mangalist.length - 1];
      const remainingData = [...res.data];

      if (lastGroup.length < this.groupingBy) {
        const elementsToAdd = remainingData.splice(0, this.groupingBy - lastGroup.length);
        lastGroup.push(...elementsToAdd);
      }

      if (remainingData.length) {
        this.mangalist.push(...this.groupMangas(remainingData));
      }

      console.log(this.mangalist)
    });
  }

  private groupMangas(data: any[]): any[][] {
    return data.reduce((groups: any[][], item: any, index: number) => {
      item.genres = item.genres.join(", ")
      if (index % this.groupingBy === 0) {
        groups.push([]);
      }
      groups[groups.length - 1].push(item);
      return groups;
    }, []);
  }


  infiniteScroll(event: InfiniteScrollCustomEvent){
    this.getMoreMangas()
    setTimeout(() => {
      event.target.complete()
    }, 500)
  }




}
