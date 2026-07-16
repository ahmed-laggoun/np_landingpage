import * as countryCodes from "country-codes-list";

export function dialCodeToIso(dialCode: string | number): string {
    const country = countryCodes.all().find(
        (c) => c.countryCallingCode === String(dialCode)
    )
    return country?.countryCode ?? 'SA'
}

export function isoToDialCode(iso: string): string {
    const country = countryCodes.all().find(
        (c) => c.countryCallingCode === iso
    )
    return country?.countryCallingCode ?? '966'
}
