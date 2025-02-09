import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonLabel,
  IonNav, IonText,
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, IonItem, IonLabel, IonText]
})
export class MangaDetailPage implements AfterContentInit{

  @Input()
  mangaId?: string

  mangaDetail?: MangaDetail

  constructor(
    protected mangaService: MangaService,
  ) {
    addIcons({ caretBack });
  }

  ngAfterContentInit() {
    this.mangaService.getManga(this.mangaId!).subscribe(res => {
      this.mangaDetail = res.data
    })
  }


}
