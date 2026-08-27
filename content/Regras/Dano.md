O **Dano** representa quanto um [[Ataque]], arma, magia, Habilidade ou outro efeito consegue causar a um alvo.

O dano normalmente é calculado **depois que o [[Ataque]] acerta**.

A fórmula básica é:

> **Dano da arma/habilidade + Dano da ficha + Modificadores**

Após todos os efeitos do ataque serem calculados, a [[Defesa]] correspondente é aplicada para determinar quanto de [[Vida]] será realmente perdido.

---

# Dano Base

Cada arma, magia ou Habilidade determina seu próprio **Dano Base**.

Ele pode utilizar dados:

> Espada: `2d8`

possuir um valor fixo:

> Habilidade: `10 de Dano`

ou utilizar outra fórmula definida pela própria habilidade.

Depois de determinar o Dano Base, são adicionados os bônus de Dano correspondentes da ficha.

**Exemplo:**

> Espada: `2d8`  
> Dano Melee: `+5`

O ataque causa:

> `2d8 + 5`

---

# Categorias de Dano

O sistema separa o Dano em diferentes categorias de acordo com sua natureza e forma de aplicação.

Entre elas estão:

- **Dano Físico**
- **Dano Mágico**
- **Dano Mental**
- **Dano Biológico**
- **Dano Espiritual**

Cada categoria normalmente interage com sua [[Defesa]] correspondente.

O Dano Físico ainda pode possuir especializações relacionadas à forma ou distância do ataque, como **Melee, Curta/Média Distância e Longa Distância**.

A arma, Habilidade ou efeito determina qual bônus de Dano da ficha deve ser utilizado.

---

# Ordem de Cálculo

Quando um ataque possuir diferentes bônus, porcentagens, multiplicadores e outros efeitos, utilize a seguinte ordem:

> **1. Dano Base**  
> **2. Bônus fixos de Dano**  
> **3. Modificadores percentuais**  
> **4. Multiplicadores**  
> **5. [[Crítico]]**  
> **6. Dano Bruto Final**  
> **7. [[Defesa]]**

Essa ordem é utilizada salvo quando uma regra específica determinar outra forma de cálculo.

---

## 1. Dano Base

Primeiro, determine ou role o dano da arma, magia ou Habilidade.

**Exemplo:**

> Espada: `2d8`

Resultado:

> `9`

---

## 2. Bônus Fixos

Depois, adicione os bônus correspondentes da ficha, equipamentos, Habilidades e outros efeitos.

**Exemplo:**

> Dano Base: `9`  
> Dano Melee: `+5`

Resultado:

> `14`

---

## 3. Modificadores Percentuais

Depois dos bônus fixos, são aplicados modificadores percentuais.

**Exemplo:**

> Dano: `14`  
> Ataque Pesado: `+50%`

Resultado:

> `14 × 1,5 = 21`

Quando o cálculo resultar em um número decimal, o resultado é **arredondado para baixo**, salvo quando uma regra específica disser o contrário.

---

## 4. Multiplicadores

Depois dos modificadores percentuais, são aplicados multiplicadores como `×2`, `×3` etc.

Por exemplo, [[Dano Furtivo]] normalmente causa:

> **Dano ×2**

Se o ataque possuir 21 de Dano:

> `21 × 2 = 42`

Multiplicadores diferentes podem funcionar juntos, salvo quando alguma das regras envolvidas impedir isso.

---

# Crítico

Depois dos modificadores normais do ataque, é resolvido o [[Crítico]].

O Crítico **não simplesmente dobra o resultado já rolado**.

Ele gera uma **nova execução do dano daquele ataque**, rolando novamente seus dados.

Os modificadores que fazem parte daquele ataque também são aplicados ao dano adicional do Crítico.

**Exemplo:**

Um ataque possui:

> Espada: `2d8`  
> Dano Melee: `+5`  
> Ataque Pesado: `+50%`

Dano normal:

> `2d8 = 9`  
> `9 + 5 = 14`  
> `14 × 1,5 = 21`

Dano adicional do Crítico:

> novo `2d8 = 11`  
> `11 + 5 = 16`  
> `16 × 1,5 = 24`

O ataque causou:

> `21 + 24 = 45 de Dano Bruto`

O [[Crítico]] faz parte do **mesmo ataque**. Portanto, a [[Defesa]] não é aplicada separadamente contra cada uma dessas partes.

---

# Acúmulo de Efeitos

Um mesmo ataque pode receber vários efeitos de Dano simultaneamente.

Por exemplo, um ataque pode ser:

> Ataque Pesado
> 
> - [[Dano Furtivo]]
> - [[Crítico]]

Todos podem funcionar juntos caso nenhuma das regras envolvidas diga o contrário.

### Exemplo Completo

Ataque:

> Espada: `2d8`  
> Dano Melee: `+5`  
> Ataque Pesado: `+50%`  
> [[Dano Furtivo]]: `×2`  
> O ataque foi [[Crítico]].

Primeiro dano:

> `2d8 = 9`  
> `9 + 5 = 14`  
> `14 × 1,5 = 21`  
> `21 × 2 = 42`

Dano adicional do Crítico:

> novo `2d8 = 11`  
> `11 + 5 = 16`  
> `16 × 1,5 = 24`  
> `24 × 2 = 48`

Dano Bruto Final:

> `42 + 48 = 90`

Se o alvo possuir:

> **10 de Defesa Física**

Então:

> `90 − 10 = 80`

O alvo perde:

> **80 de [[Vida]]**

---

# Defesa

Depois que todo o Dano Bruto do ataque for calculado, aplica-se a [[Defesa]] correspondente.

A fórmula geral é:

> **Dano Bruto − Defesa = Dano Final**

**Exemplo:**

> Dano Bruto: `25`  
> Defesa Física: `8`

Resultado:

> `25 − 8 = 17 de Dano`

A [[Vida]] do alvo é reduzida em 17.

---

## Defesa Superior ao Dano

Normalmente, o Dano Final não pode ficar abaixo de **0**.

**Exemplo:**

> Dano Bruto: `8`  
> Defesa: `12`

Resultado:

> **0 de Dano**

A Defesa absorveu completamente o ataque.

Isso não significa necessariamente que o ataque não atingiu o personagem. Ele acertou, mas **não conseguiu causar Dano suficiente para superar sua proteção**.

---

# Penetração de Defesa

Algumas armas, Habilidades e efeitos podem **ignorar parte da [[Defesa]]** do alvo.

**Exemplo:**

> Alvo: 10 Defesa Física  
> Ataque: ignora 3 Defesa Física

Para aquele ataque:

> `10 − 3 = 7 Defesa Física`

Então apenas 7 pontos serão utilizados para reduzir o Dano.

Se um efeito ignorar completamente determinada Defesa, ela não será utilizada no cálculo daquele Dano.

---

# Múltiplos Tipos de Dano

Um único ataque pode causar mais de um tipo de Dano.

**Exemplo:**

> `10 Dano Físico`  
> `+ 6 Dano Mágico de Fogo`

Nesse caso, cada parte é comparada separadamente com sua [[Defesa]] correspondente.

Depois, os resultados são somados para determinar a perda total de [[Vida]].

**Exemplo:**

O alvo possui:

> 4 Defesa Física  
> 2 Defesa Mágica

Então:

> `10 − 4 = 6 Físico`  
> `6 − 2 = 4 Mágico`

Dano Final:

> `6 + 4 = 10`

O alvo perde **10 de Vida**.

---

# Dano sem Ataque

Nem todo Dano precisa necessariamente de um teste de [[Ataque]].

Quedas, ambientes perigosos, venenos, armadilhas, efeitos internos e determinadas Habilidades podem causar Dano diretamente.

A própria fonte determina:

- se existe algum teste;
- qual [[Defesa]] é utilizada;
- se a Defesa pode reduzir o Dano;
- se alguma Reação pode evitá-lo.

---

# Dano Direto

Alguns efeitos podem determinar que causam **Dano Direto**.

Dano Direto ignora a [[Defesa]] indicada pela própria fonte e reduz diretamente a [[Vida]].

> **Dano Direto não deve ser presumido.**

Um ataque somente ignora Defesa quando sua regra disser explicitamente que isso acontece.

---

# Regra Específica

[[Classes]], [[Raças]], armas, Habilidades, Passivas, [[Condições|condições]] e outros efeitos podem alterar qualquer etapa do cálculo de Dano.

Eles podem:

- adicionar dados;
- adicionar Dano fixo;
- aumentar ou reduzir Dano por porcentagem;
- aplicar multiplicadores;
- alterar [[Crítico]];
- penetrar ou ignorar [[Defesa]];
- converter um tipo de Dano em outro;
- causar múltiplos tipos de Dano;
- alterar a ordem normal de cálculo.

Quando uma regra específica contradizer esta página:

> **Regra específica > regra geral.**