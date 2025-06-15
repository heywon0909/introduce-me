import { Comapny } from '@components/company/Comapny'

export const getData = async (companyType: string) =>
    await fetch(`/introduce-me/assets/data/${companyType}.json`)
        .then((response) => response.text())
        .then((res) => JSON.parse(res) as Promise<Comapny>)
