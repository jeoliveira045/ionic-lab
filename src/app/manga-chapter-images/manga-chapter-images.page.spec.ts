import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaChapterImagesPage } from './manga-chapter-images.page';

describe('MangaChapterImagesPage', () => {
  let component: MangaChapterImagesPage;
  let fixture: ComponentFixture<MangaChapterImagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaChapterImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
