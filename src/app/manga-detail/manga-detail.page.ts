import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonLabel, IonList, IonListHeader,
  IonNav, IonNavLink, IonText,
  IonTitle,
  IonToolbar, NavParams
} from '@ionic/angular/standalone';
import {ActivatedRoute} from "@angular/router";
import {MangaService} from "../services/manga.service";
import {addIcons} from "ionicons";
import { caretBack } from 'ionicons/icons';
import {MangaChapterImagesPage} from "../manga-chapter-images/manga-chapter-images.page";
//
export class MangaDetail{
  id?: string
  authors?: string[]
  create_at?: number
  genres?: string[]
  nsfw?: boolean
  status?: string
  sub_title?: string
  summary?: string
  thumb?: string
  title?: string
  total_chapter?: number
  type?: string
  update_at?: string
}

export class MangaChapterDetail{
  id?: string;
  manga?: string;
  title?: string;
  created_at?: number;
  updated_at?: number;
}

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.page.html',
  styleUrls: ['./manga-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonItem, IonLabel, IonText, IonList, IonNavLink]
})
export class MangaDetailPage implements AfterContentInit{

  @Input()
  mangaId?: string

  mangaDetail?: MangaDetail

  mangaChaptersList?: Array<MangaChapterDetail> = new Array<MangaChapterDetail>()

  mangaChapterImagesComponent = MangaChapterImagesPage

  constructor(
    protected mangaService: MangaService,
  ) {
    addIcons({ caretBack });
  }

  ngAfterContentInit() {
    this.mangaService.getManga(this.mangaId!).subscribe(res => {
      this.mangaDetail = res.data
    })
    this.mangaService.getMangaChapters(this.mangaId!).subscribe((res: any) => {
      this.mangaChaptersList = [...res.data]
    })
  }


}
