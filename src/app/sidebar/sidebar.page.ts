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
  IonCardContent, NavController, IonNavLink, IonNav
} from "@ionic/angular/standalone";
import { StatusBar } from "@capacitor/status-bar";
import {MangaService} from "../services/manga.service";
import {CommonModule, NgFor, NgForOf, NgOptimizedImage} from "@angular/common";
import {InfiniteScrollCustomEvent} from "@ionic/angular";
import {MangaDetail, MangaDetailPage} from "../manga-detail/manga-detail.page";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
  imports: [
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
    IonNavLink
  ],
  standalone: true
})
export class SidebarPage{

  mangalist: Array<Array<MangaDetail>> = new Array<Array<MangaDetail>>()

  page: number = 1

  groupingBy:number = 2

  component = MangaDetailPage


  constructor(protected mangaService: MangaService,protected navController: NavController) {
    mangaService.getMangaList(this.page).subscribe((res: any) => {
      this.mangalist = this.groupMangas(res.data)
    })
    // StatusBar.setOverlaysWebView({overlay: false})
    console.log(this.mangalist)
  }
  //
  // navigateToMangaDetail(id?: string){
  //   this.navController.navigateRoot(`/manga/detail/${id}`)
  // }

  getMoreMangas() {
    this.page++;

    this.mangaService.getMangaList(this.page).subscribe((res: any) => {
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
