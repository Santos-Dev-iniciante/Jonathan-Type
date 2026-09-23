abstract class Jogador {
    private nickname: string;
    private pontuacao: number;

    constructor(nickname: string) {
        this.nickname = nickname;
        this.pontuacao = 0;
    }

    public getNickname(): string {
        return this.nickname;
    }

    public setNickname(nickname: string): void {
        this.nickname = nickname;
    }

    public getPontuacao(): number {
        return this.pontuacao;
    }

    public realizarMissao(): void {
        this.pontuacao += 100;
    }
}

class JogadorComum extends Jogador {
    realizarMissao(): void {
        super.realizarMissao();
    }
}

class JogadorPremium extends Jogador {
    realizarMissao(): void {
        for (let i: number = 0; i < 150; i++) {
            if (i == 149) {
                super.realizarMissao();
            }
        }
    }
}

let jogadores: Jogador[] = [];
let continuar: number = 1;

while (continuar == 1) {
    let nickname: string = String(prompt("Digite o nickname do jogador:"));
    let tipo: number = Number(prompt("Digite 1 para Jogador Comum ou 2 para Jogador Premium:"));

    if (tipo == 1) {
        jogadores.push(new JogadorComum(nickname));
    } else if (tipo == 2) {
        jogadores.push(new JogadorPremium(nickname));
    }

    continuar = Number(prompt("Deseja cadastrar outro jogador? 1-Sim / 2-Não"));
}

continuar = 1;

while (continuar == 1) {
    console.log("=== JOGADORES ===");

    for (let i: number = 0; i < jogadores.length; i++) {
        console.log((i + 1) + " - " + jogadores[i].getNickname());
    }

    let jogadorEscolhido: number = Number(prompt("Digite o número do jogador que realizou a missão:"));

    if (jogadorEscolhido >= 1 && jogadorEscolhido <= jogadores.length) {
        jogadores[jogadorEscolhido - 1].realizarMissao();

        console.log(
            jogadores[jogadorEscolhido - 1].getNickname() +
            " agora possui " +
            jogadores[jogadorEscolhido - 1].getPontuacao() +
            " pontos."
        );
    }

    continuar = Number(prompt("Deseja realizar outra rodada? 1-Sim / 2-Não"));
}

console.log("=== CLASSIFICAÇÃO FINAL ===");

for (let jogador of jogadores) {
    console.log(
        jogador.getNickname() +
        " - " +
        jogador.getPontuacao() +
        " pontos"
    );

    if (jogador.getPontuacao() > 1000) {
        console.log("🏆 CAMPEÃO: ultrapassou 1.000 pontos!");
    }

    console.log("----------------------");
}