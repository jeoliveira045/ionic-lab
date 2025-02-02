import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNav,
  IonTitle,
  IonToolbar, NavParams
} from '@ionic/angular/standalone';
import {ActivatedRoute} from "@angular/router";
import {MangaService} from "../services/manga.service";
import {addIcons} from "ionicons";
import { caretBack } from 'ionicons/icons';
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

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.page.html',
  styleUrls: ['./manga-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons]
})
export class MangaDetailPage {

  @Input()
  mangaId?: string

  mangaDetail?: MangaDetail

  // chaptersList?: any[]

  constructor(
    protected mangaService: MangaService,
    protected navParams: NavParams
  ) {
    this.mangaService.getManga((navParams.data as any).mangaId).subscribe(res => {
      this.mangaDetail = res.data
    })
    addIcons({ caretBack });

  }


}
