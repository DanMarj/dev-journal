import { Injectable } from '@angular/core';
import * as entriesDates from '../../data/entries/entriesDates.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  constructor() {
  }

  /**
   * Gets the list of entries. As of now, no cap, gets all, in order of recency. 
   * @returns List of DateAndEntry objects
   */
  // TODO: Pagination, filter, sort, # of entries, as parameters.
  public getEntries(): Observable<DateAndEntry[]> {
    return new Observable();
  }
}

export interface DateAndEntry {
  date: Date;
  entry: InnerHTML;
}