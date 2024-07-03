import { Subject } from "rxjs";

export class SubjectManager {
  subject$ = new Subject<boolean>();

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value: boolean) {
    this.subject$.next(value);
  }
}
