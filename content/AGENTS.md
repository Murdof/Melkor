# Projeto Melkor

Este projeto é uma wiki de RPG em desenvolvimento contínuo.

Antes de editar qualquer arquivo, leia as regras relevantes em:

`Regras/`

e as Classes envolvidas em:

`Classes/`

Não trate `index.md` como fonte mecânica.

`index.md` é utilizado principalmente como Patch Notes, resumo de atualização ou navegação e não deve prevalecer sobre as regras mecânicas atuais.

---

# Fonte de Verdade

A prioridade das informações é:

1. Arquivos atuais em `Regras/`
2. Arquivos atuais das Classes
3. Arquivos atuais das Habilidades
4. Outros documentos auxiliares

Se houver conflito entre um arquivo antigo e uma regra atual:

> prefira a regra atual.

Não preserve mecânicas legadas apenas porque aparecem em arquivos antigos.

Se encontrar uma contradição real:

> não escolha silenciosamente.

Informe a inconsistência antes de alterar conteúdo afetado por ela.

---

# Sistema de Habilidades

Habilidades Ativas e Passivas possuem níveis próprios.

A progressão completa prevista pelo sistema é:

- Tier 1: Lv.1 até Lv.4
- Tier 2: Lv.5 até Lv.8
- Tier 3: Lv.9 até Lv.12
- Tier 4: Lv.13 até Lv.16
- Tier 5: Lv.17 até Lv.20

Subir de Tier de Classe:

> não aumenta automaticamente o nível das Habilidades.

O Tier aumenta apenas:

> o limite de desenvolvimento disponível para Linhagens compatíveis.

Leia sempre:

`Habilidades/Níveis de Habilidades.md`

antes de criar, alterar ou evoluir Habilidades.

---

# Nível Real da Linhagem

Cada Linhagem possui um:

> **Nível Real**

Esse nível representa todo o desenvolvimento acumulado naquela Linhagem.

O Nível Real:

- não é perdido ao trocar de Classe;
- não é reduzido ao voltar para uma Classe inferior;
- não é redefinido quando uma Habilidade muda de nome;
- não é redefinido quando sua mecânica é transformada;
- continua armazenado mesmo quando a Classe ativa suporta apenas uma versão inferior.

Exemplo:

Uma Linhagem chegou ao:

> Lv.12

Esse continua sendo seu Nível Real mesmo quando o personagem utiliza uma Classe que só consegue manifestá-la até Lv.8 ou Lv.4.

---

# Nível Efetivo da Habilidade

A Habilidade utilizada durante o jogo possui um:

> **Nível Efetivo**

O Nível Efetivo depende de:

1. Nível Real da Linhagem;
2. versão disponível na Classe ativa;
3. limite máximo suportado por essa versão.

Regra geral:

> **Nível Efetivo = menor valor entre o Nível Real da Linhagem e o limite da versão utilizada pela Classe ativa.**

Exemplo:

A Linhagem possui:

> Lv.12

Se uma Classe Tier 3 utiliza a versão Tier 3 dessa Linhagem:

> Nível Efetivo = Lv.12

Se o personagem voltar para uma Classe Tier 2 cuja versão suporta até Lv.8:

> Nível Efetivo = Lv.8

Se voltar para uma Classe Tier 1 cuja versão suporta até Lv.4:

> Nível Efetivo = Lv.4

O Nível Real continua:

> Lv.12

Ao retornar para a Classe Tier 3:

> a Habilidade volta a funcionar em Lv.12.

---

# Tier da Classe e Limite da Habilidade

O Tier da Classe não determina sozinho o nível da Habilidade.

Ele determina:

> o maior Patamar que uma Linhagem compatível pode alcançar através daquela Classe.

Uma Habilidade pode estar abaixo desse limite.

Exemplo:

Uma Classe Tier 2 permite desenvolver determinada Linhagem até:

> Lv.8

Mas o personagem pode possuir essa Linhagem apenas no:

> Lv.3

Nesse caso, a versão Tier 2 da Habilidade funciona:

> no Lv.3.

Não aumente automaticamente para Lv.5 apenas porque a Classe é Tier 2.

---

# Habilidades Novas de Classes Superiores

Uma Classe Tier 2, Tier 3 ou superior pode fornecer:

> uma Habilidade completamente nova no Lv.1.

O Tier da Classe não define o nível inicial de uma nova Habilidade.

Exemplo:

Uma Classe Tier 2 pode conceder:

> Ataque de Passagem Lv.1

Isso é correto caso Ataque de Passagem seja uma nova Linhagem.

Nunca altere automaticamente uma Habilidade nova para Lv.5 apenas por pertencer a uma Classe Tier 2.

---

# SP

SP é incremental e vinculado à Árvore de Classe.

Nunca trate SP como recurso global entre Árvores diferentes.

Use os custos definidos em:

`Habilidades/Níveis de Habilidades.md`

Não invente outra tabela de custo.

Os custos representam aquisição e evolução de níveis individuais.

---

# Evolução de Habilidades

Ao evoluir uma Classe, uma Habilidade herdada pode seguir três caminhos:

1. Continuidade
2. Transformação
3. Encerramento naquela ramificação

Nunca presuma que todas as Habilidades da Classe anterior continuam evoluindo.

Analise cada Habilidade individualmente.

---

# Continuidade

Na Continuidade:

> a Linhagem continua sendo desenvolvida sem alteração profunda de identidade.

A versão da nova Classe pode receber ajustes compatíveis com seu Tier, mas continua essencialmente sendo a mesma Habilidade.

O Nível Real da Linhagem é preservado.

Se o personagem chegar à nova Classe com:

> Linhagem Lv.3

a versão utilizada pela nova Classe permanece:

> Lv.3

e poderá posteriormente ser desenvolvida até o limite permitido pela nova Classe.

---

# Transformação

Na Transformação:

> a nova Classe altera a manifestação da Linhagem para combinar com sua própria gameplay.

Uma transformação pode mudar profundamente:

- nome;
- efeito;
- alcance;
- custo;
- duração;
- alvos;
- condição de ativação;
- função;
- interação com outras Habilidades;
- estilo de combate;
- finalidade mecânica.

O Nível Real:

> é preservado.

Exemplo:

Recruta:

> Investida Lv.3

evolui para Lanceiro Leve.

A versão pode tornar-se:

> Investida Perfurante Lv.3

Não se torna automaticamente Lv.5.

A partir daí, o Lanceiro Leve pode permitir que essa Linhagem seja desenvolvida até:

> Lv.8

caso o personagem invista SP.

---

# Transformação não exige nível máximo anterior

Uma Habilidade não precisa estar no máximo do Tier anterior para ser transformada.

Exemplo:

Recruta possui:

> Investida Lv.2

Ao tornar-se Lanceiro Leve:

> Investida Perfurante Lv.2

A mudança de Classe altera:

> a versão da Linhagem

e não:

> seu nível acumulado.

Portanto, versões transformadas de Classes superiores devem funcionar também nos níveis inferiores que o personagem possa possuir.

---

# Encerramento de Linhagem em uma Ramificação

Uma Classe pode decidir:

> não continuar desenvolvendo determinada Linhagem.

Nesse caso:

- o Nível Real é preservado;
- nenhum progresso já adquirido é perdido;
- aquela ramificação não libera níveis superiores da Linhagem;
- outra ramificação pode continuar desenvolvendo a mesma Linhagem.

O limite efetivo nessa Classe será:

> o maior nível suportado pela última versão válida da Linhagem naquela ramificação.

Exemplo:

Uma Linhagem chegou ao:

> Lv.7

através de outra Classe.

Uma ramificação Tier 2 encerrou essa Linhagem no Tier 1.

Nessa ramificação:

> a Habilidade funciona no máximo como Lv.4.

O Nível Real continua:

> Lv.7.

Ao retornar para uma ramificação que suporte desenvolvimento Tier 2:

> a Habilidade poderá voltar a funcionar em Lv.7.

---

# Versão da Habilidade por Classe

O Nível pertence:

> à Linhagem.

A forma mecânica pertence:

> à versão utilizada pela Classe ativa.

Portanto, Classes diferentes podem manifestar a mesma Linhagem de maneiras muito diferentes.

Exemplo conceitual:

Recruta:

> Investida

Lanceiro Leve:

> Investida Perfurante

Guardião:

> outra versão compatível com sua identidade

Classe Tier 3 futura:

> uma transformação ainda mais profunda

Mesmo que nome e mecânica mudem significativamente:

> todas podem continuar pertencendo à mesma Linhagem quando houver continuidade conceitual suficiente.

---

# Retorno para uma Classe Anterior

Ao voltar para uma Classe anterior:

> utilize a versão daquela Classe.

Não continue utilizando a versão mecânica da Classe superior.

Exemplo:

Uma Linhagem chegou ao:

> Lv.12

e sua versão Tier 3 possui mecânicas completamente diferentes da versão Tier 2.

Ao retornar para a Classe Tier 2:

> use novamente a versão Tier 2 original.

Como essa versão suporta no máximo:

> Lv.8

a Habilidade funciona:

> no Lv.8.

O personagem não utiliza:

> a versão Tier 3 reduzida para Lv.8.

Ele utiliza:

> a verdadeira versão Tier 2 em seu nível máximo efetivamente disponível.

Ao retornar à Classe Tier 3:

> volta a utilizar a versão Tier 3 no Lv.12.

---

# Linhagem de Habilidade

Uma Habilidade transformada pode continuar pertencendo à mesma Linhagem quando existir:

- continuidade conceitual;
- continuidade funcional;
- continuidade mecânica;
- ou evolução clara de uma ideia anterior.

A transformação pode ser profunda.

Não é necessário que:

> nome, efeito ou funcionamento permaneçam semelhantes em todos os detalhes.

Entretanto, deve existir uma relação de evolução justificável.

Se a nova Habilidade não possuir relação suficiente com a anterior:

> trate como uma nova Linhagem.

Não force Linhagens artificiais apenas para reduzir a quantidade de Habilidades.

---

# Não transformar apenas para eliminar duplicações

Semelhança mecânica não prova automaticamente que duas Habilidades pertencem à mesma Linhagem.

Antes de transformar uma Habilidade existente em evolução de outra, analise:

- origem;
- função;
- fantasia;
- identidade da Classe;
- uso durante o jogo;
- relação conceitual;
- intenção da Habilidade.

Duas Habilidades podem possuir efeitos semelhantes e ainda assim serem:

> Habilidades diferentes.

Transformações propostas que não sejam evidentes devem ser apresentadas para aprovação humana antes de serem canonizadas.

---

# Classes Futuras

Não invente Classes T3, T4 ou T5 apenas para completar árvores.

Se uma evolução ainda não existe:

> não crie seu conteúdo.

Classes futuras só devem ser utilizadas quando já existirem ou forem explicitamente definidas no projeto.

---

# Nomenclatura Atual

Use sempre os termos atuais definidos em `Regras/`.

Não reintroduza termos legados.

Exemplos de cuidados:

- usar `Intelecto`, não `Inteligência`, quando essa for a nomenclatura atual;
- não usar `Ofício` genérico para profissões especializadas;
- não tratar `Precisão` como Perícia comprável se as regras atuais não permitirem;
- não utilizar sistemas antigos de Precisão Mágica quando já substituídos.

---

# Perícias Profissionais

Use Perícias profissionais próprias quando existirem.

Exemplos:

- Ferreiro -> Ferraria
- Artesão -> Artesanato
- Construtor -> Construção
- Curandeiro -> Medicina
- Caçador -> Caça e Processamento
- Herbalista -> Herbalismo
- Cozinheiro -> Culinária
- Pesquisador -> Tecnologia Científica
- Mercador -> Comércio

Não substitua essas Perícias por:

> `Ofício`

genérico.

---

# Arquivos de Habilidades

Não crie um `.md` separado para cada nível.

Use:

> **1 arquivo `.md` por Linhagem de Habilidade.**

Pastas preferidas:

`Habilidades/Ativas/`

`Habilidades/Passivas/`

A mesma página pode conter:

- origem da Linhagem;
- níveis;
- versões por Classe;
- transformações;
- continuidades;
- ramificações;
- encerramentos;
- limites por versão;
- interações.

---

# Estrutura das Versões

Ao documentar uma transformação de Classe:

não registre apenas Lv.5–Lv.8.

A versão transformada precisa ser capaz de representar:

> qualquer nível da Linhagem que possa chegar àquela Classe.

Exemplo:

Se Lanceiro Leve transforma Investida em Investida Perfurante:

a versão do Lanceiro Leve deve possuir comportamento coerente para:

- Lv.1
- Lv.2
- Lv.3
- Lv.4
- Lv.5
- Lv.6
- Lv.7
- Lv.8

Isso ocorre porque o personagem pode entrar no Lanceiro Leve com:

> Investida Lv.1, Lv.2, Lv.3 ou Lv.4.

A versão muda imediatamente ao mudar de Classe.

O nível não.

---

# Regras de Edição

Antes de alterar arquivos:

1. leia as regras relevantes;
2. leia a Classe de origem;
3. leia as evoluções diretas;
4. leia Habilidades relacionadas;
5. procure duplicações;
6. procure conflitos;
7. diferencie Habilidade nova de Habilidade herdada;
8. determine se existe Continuidade, Transformação ou Encerramento;
9. apresente decisões duvidosas para aprovação;
10. só então altere os arquivos autorizados.

Não faça alterações massivas sem primeiro apresentar um plano.

Para tarefas grandes:

> primeiro audite e proponha.

Só escreva arquivos depois de aprovação explícita.

---

# Limite Atual de Desenvolvimento

Neste estágio do projeto:

> desenvolver Habilidades apenas até o topo do Tier 2.

Progressão atualmente utilizada para criação e balanceamento:

- Tier 1: Lv.1 até Lv.4
- Tier 2: Lv.5 até Lv.8

Não criar, projetar ou antecipar atualmente:

- Lv.9 ou superior;
- novas Habilidades Tier 3;
- transformações Tier 3;
- progressões Tier 4;
- progressões Tier 5.

As regras gerais podem mencionar o funcionamento conceitual de Tiers superiores quando necessário para explicar o sistema.

Porém:

> não gerar conteúdo mecânico desses Tiers durante a fase atual.

O objetivo atual é:

> testar e balancear completamente T1 e T2 antes de expandir o sistema.


# Wikilinks

Ao criar ou editar conteúdo:

- adicione links quando houver destino canônico claramente relacionado;
- corrija links quebrados quando o destino correto for evidente;
- se não existir destino válido, remova apenas o wikilink e mantenha o texto;
- não crie páginas vazias apenas para satisfazer links;
- não transforme todo termo recorrente em link;
- casos ambíguos devem ser reportados antes de alteração.
# Arquivos Ignorados

O diretório `.trash/` contém arquivos descartados ou históricos.

- não utilizar `.trash/` como fonte de verdade;
- não corrigir arquivos dentro de `.trash/`;
- não usar arquivos de `.trash/` como destinos canônicos;
- ignorar `.trash/` em auditorias globais, salvo pedido explícito.