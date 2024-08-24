import { Subject } from "rxjs";

export class SubjectManager<D> {
  subject$ = new Subject<D>();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value: D) {
    this.subject$.next(value);
  }
}
