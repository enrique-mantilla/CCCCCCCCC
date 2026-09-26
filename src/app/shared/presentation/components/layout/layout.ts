import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {NewsStore} from '../../../../news/application/news.store';
import {MatToolbar} from '@angular/material/toolbar';
import {SourceList} from '../../../../news/presentation/components/source-list/source-list';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    SourceList,
    LanguageSwitcher,
    Footer,
  ],
  templateUrl: './layout.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './layout.css'
})
/**
 * Main shell component that orchestrates source navigation and article content.
 */
export class Layout implements OnInit {

  /** Injected application store for the News bounded context. */
  protected store = inject(NewsStore);
  /** Reactive source list consumed by source navigation UI. */
  protected readonly sources = this.store.sources;


  /** Initializes source and article data when the layout is mounted. */
  ngOnInit(): void {
    this.store.loadSources();
  }

}
