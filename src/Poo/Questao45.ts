class UsuarioSistema {
    private login: string;
    private senha: string;

    constructor(login: string) {
        this.login = login;
        this.senha = "";
    }

    public getLogin(): string {
        return this.login;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        if (senha.length >= 6 && senha != this.login) {
            this.senha = senha;
        } else {
            console.log("Senha inválida!");
        }
    }
}

let login: string = "";
let senha: string = "";
let usuario: UsuarioSistema;

while (true) {
    login = String(prompt("Digite o login: "));
    usuario = new UsuarioSistema(login);

    senha = String(prompt("Digite a senha: "));
    usuario.setSenha(senha);

    if (usuario.getSenha() != "") {
        break;
    }
}

console.log("Cadastro realizado com sucesso!");
console.log(`Login: ${usuario.getLogin()}`);