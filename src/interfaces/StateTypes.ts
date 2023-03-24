export interface Auth {
    token: string | null,
    employeeId: string | null,
    name: string | null,
    role: string | null,
    
}

interface Persist {
    rehydrated: boolean,
    version: number

}

export interface StateType{
    auth: Auth,
    _persist: Persist
}