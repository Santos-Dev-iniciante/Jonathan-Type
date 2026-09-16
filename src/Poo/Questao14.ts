class Livro{

    private _titulo: string
    public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }

    private _autor: string
    public get autor(): string {
        return this._autor
    }
    public set autor(value: string) {
        this._autor = value
    }

    private _anoPublicacao: number
    public get anoPublicacao(): number {
        return this._anoPublicacao
    }
    public set anoPublicacao(value: number) {
        this._anoPublicacao = value
    }
    
    private _disponilibilidade: boolean
    public get disponilibilidade(): boolean {
        return this._disponilibilidade
    }
    public set disponilibilidade(value: boolean) {
        this._disponilibilidade = value
    }

        constructor(titulo: string, autor: string, anoPublicacao: number, disponibilidade: boolean){
            this._titulo = titulo
            this._autor = autor
            this._anoPublicacao = anoPublicacao
            this._disponilibilidade = disponibilidade                             
        }
}