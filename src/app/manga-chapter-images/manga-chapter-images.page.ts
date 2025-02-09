import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {caretBack, caretUp} from "ionicons/icons";
import {MangaService} from "../services/manga.service";


export class ChapterImageDetail{
  id?: string;
  chapter?: string
  manga?: string
  index?: number
  link?: string
}
@Component({
  selector: 'app-manga-chapter-images',
  templateUrl: './manga-chapter-images.page.html',
  styleUrls: ['./manga-chapter-images.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class MangaChapterImagesPage implements AfterContentInit{

  @Input()
  chapterId?: string

  chapterImagesList = new Array<ChapterImageDetail>()

  constructor(protected mangaService: MangaService) {
    addIcons({caretBack})
  }

  ngAfterContentInit() {
    this.mangaService.getMangaChapterImages(this.chapterId!).subscribe(res => {
      this.chapterImagesList = [...res.data]
    })
  }

}
