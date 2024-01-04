import { Observable } from "rxjs";

export interface IDeactivateInterface {
    canExit: () => boolean | Observable<boolean> | Promise<boolean>
}