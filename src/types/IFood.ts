export type IFood =  {
    id?: number,
    icon?: string,
    name: string,
    energy: Energy,
    quantity?: number,
    meal_time?: string
}

type Energy = {
    unit: string,
    value: number
}