import { AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidEmailDomain(control: AbstractControl): ValidationErrors | null {
    const value = control.value?.toLowerCase();
    const host = ['gmail.com', 'yahoo.com']
    if (!value) {
        return null
    }
    else {
        const matches = host.some(host => value?.indexOf(`@${host}`) > -1)
        return matches ? { invalidEmailDomain: true } : null
    }
}