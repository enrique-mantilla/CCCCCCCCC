import {inject, Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Source} from '../domain/model/source.entity';
import {SourcesResponse} from './sources-response';
import {SourceAssembler} from './source-assembler';


@Injectable({providedIn: 'root'})
/**
 * Infrastructure gateway to the external news provider API.
 *
 * @remarks
 * The gateway returns domain entities by delegating resource mapping to
 * assembler classes.
 */
export class NewsApi {
  private baseUrl = environment.newsProviderApiBaseUrl;
  private sourcesEndpoint = environment.newsProviderSourcesEndpointPath;
  private apiKey = environment.newsProviderApiKey;
  private http = inject(HttpClient);
  private sourceAssembler = inject(SourceAssembler);

  /**
   * Fetches all available sources and maps them into domain entities.
   */
  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(`${this.baseUrl}${this.sourcesEndpoint}`, {
      params: { apiKey: this.apiKey }
    }).pipe(
      map(response => this.sourceAssembler.toEntitiesFromResponse(response))
    );
  }
}
