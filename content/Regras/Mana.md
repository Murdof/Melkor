A **Mana** representa a energia utilizada para conjurar magias, sustentar efeitos sobrenaturais e utilizar Habilidades que dependam de poder mágico.

A quantidade disponível e sua capacidade de regeneração são determinadas pela ficha do personagem através de [[Raças]], [[Classes]], Habilidades, Passivas, equipamentos e outros efeitos.

A Mana é dividida em **Mana Atual**, **Mana Máxima** e **Regeneração de Mana**.

---

## Mana Atual

A **Mana Atual** representa a quantidade de energia mágica disponível naquele momento.

Sempre que uma magia ou Habilidade possuir um custo de Mana, esse valor é retirado da Mana Atual.

**Exemplo:**

> Mana: **30/50**  
> Custo da Magia: **10 Mana**  
> Mana restante: **20/50**

O personagem precisa possuir Mana suficiente para pagar **todo o custo**.

Se possuir apenas 7 Mana, não poderá utilizar uma Habilidade que custe 10, salvo quando alguma regra específica permitir.

---

## Mana Máxima

A **Mana Máxima** determina a quantidade total de Mana que o personagem consegue armazenar.

**Exemplo:**

> **35/100 Mana**

O personagem possui 35 de Mana disponível, podendo recuperar até o máximo de 100.

Um personagem pode possuir:

> **0 de Mana Máxima**

Isso significa apenas que ele **não possui Mana disponível naturalmente**.

[[Raças]], [[Classes]], Habilidades, Passivas, equipamentos e outros efeitos podem conceder ou aumentar sua Mana Máxima.

---

# Regeneração de Mana

A **Regeneração de Mana** determina quanto o personagem recupera naturalmente no início de seu próprio [[Turno]].

> **Mana recuperada = Regeneração de Mana da ficha**

Essa regeneração acontece **uma única vez por [[Turno#Turno e Rodada|Rodada]]**, no início do Turno daquele personagem.

**Exemplo:**

Um personagem possui:

> Mana: **12/50**  
> Regeneração de Mana: **6**

No início de seu Turno:

> `12 + 6 = 18/50`

A Mana Atual nunca pode ultrapassar a Mana Máxima.

Se estiver em:

> `48/50`

e possuir 6 de Regeneração:

> `48 + 6 → 50/50`

Os pontos excedentes são perdidos.

---

## Gastos Fora do Turno

Mana pode ser utilizada fora do próprio [[Turno]] quando uma Reação, Habilidade ou outro efeito permitir.

Por exemplo, uma magia utilizada para [[Aparar]] consome normalmente sua Mana.

Esse gasto **não ativa uma nova Regeneração**.

O personagem somente recuperará Mana novamente quando chegar o início de seu próximo Turno.

---

# Manutenção de Magias

Algumas magias e Habilidades permanecem ativas enquanto o personagem continuar pagando um **custo de manutenção**.

Quando uma habilidade possuir manutenção, seu custo será informado em sua própria descrição.

**Exemplo:**

> Custo inicial: **12 Mana**  
> Manutenção: **6 Mana por Turno**

O custo inicial é pago ao utilizar a habilidade.

Depois disso, o custo de manutenção é pago **uma vez a cada Turno do usuário** enquanto ele desejar manter o efeito.

Caso não possua Mana suficiente ou decida não pagar o custo, a habilidade é encerrada.

### Ordem no início do Turno

Quando Regeneração e Manutenção acontecerem no mesmo Turno, a ordem padrão é:

> **1. Regenera Mana**  
> **2. Paga custos de Manutenção**  
> **3. Inicia suas ações normalmente**

**Exemplo:**

O personagem começa seu Turno com:

> 3 Mana  
> +5 Regeneração  
> = **8 Mana**

Possui uma magia com manutenção de 6:

> `8 − 6 = 2 Mana`

A magia permanece ativa e o personagem começa suas ações com **2 Mana**.

---

# Mana em 0

Chegar a **0 de Mana** não causa dano, inconsciência ou qualquer penalidade automática.

O personagem simplesmente não possui energia mágica disponível para pagar novos custos.

> **0 Mana = incapaz de utilizar efeitos que exijam Mana até recuperá-la.**

Habilidades ou [[Condições|condições]] específicas podem criar consequências adicionais para ficar sem Mana.

---

# Mana Fora de Combate

Fora de combate, não é necessário simular [[Turno|Turnos]] continuamente apenas para recuperar Mana.

Quando houver tempo suficiente e nenhuma situação que exija controle preciso, a recuperação pode ser calculada utilizando a Regeneração do personagem e o tempo transcorrido.

Como cada [[Turno]] representa **2 segundos**, a Regeneração continua seguindo essa mesma proporção quando for necessário calcular exatamente.

O Mestre pode simplesmente considerar a Mana recuperada completamente quando houver tempo mais do que suficiente para isso.

---

## Regras Específicas

[[Raças]], [[Classes]], Habilidades, Passivas, equipamentos, [[Condições|condições]] e outros efeitos podem modificar:

- Mana Máxima;
- Regeneração de Mana;
- custos de Mana;
- custos de Manutenção;
- formas de recuperar Mana;
- possibilidade de utilizar Mana abaixo do custo necessário;
- consequências de chegar a 0 Mana.

Quando uma regra específica modificar o funcionamento da Mana, **a regra específica possui prioridade sobre esta regra geral**.

---