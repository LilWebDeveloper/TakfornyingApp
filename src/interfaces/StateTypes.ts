interface Auth {
    employeeId: string,
    name: string,
    role: string,
    token: string
}

interface Persist {
    rehydrated: boolean,
    version: number

}

export interface StateType{
    auth: Auth,
    _persist: Persist
}