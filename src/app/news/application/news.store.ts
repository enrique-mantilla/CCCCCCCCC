import {computed, inject, Injectable, signal} from '@angular/core';
import {Source} from '../domain/model/source.entity';
import {NewsApi} from '../infrastructure/news-api';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {Url} from '../../shared/domain/model/url';

@Injectable({providedIn: 'root'})
/**
 * Application service that coordinates read models for the News bounded-context.
 *
 * @remarks
 * consumed by presentation components.
 */
export class NewsStore {


  /** Internal signal containing all available sources. */
  private sourcesSignal = signal<Source[]>([]);
  private newsApi = inject(NewsApi);
  private logoApi = inject(LogoDevApi);

  /** Read-only projection of available news sources. */
  readonly sources = computed(() => this.sourcesSignal());

  loadSources() {
    if (this.sourcesSignal().length === 0) {
      this.newsApi.getSources().subscribe(sources => {
        sources.forEach(source => source.urlToLogo = new Url(this.logoApi.getUrlToLogo(source.urlAsString)));
        this.sourcesSignal.set(sources);
      });
    }
  }

}
