O **Dano** representa quanto um [[Ataque]], arma, magia, Habilidade ou outro efeito consegue causar a um alvo.

O Dano normalmente é calculado depois que o [[Ataque]] acerta.

A fórmula geral é:

> **Dano Base + Escalonamento + Bônus Fixos + Modificadores**

Após todos os efeitos do ataque serem calculados, a [[Defesa]] correspondente é aplicada para determinar quanto de [[Vida]] será perdido.

---

# Dano Base

Cada arma, magia, Habilidade ou efeito determina seu próprio **Dano Base**.

O Dano Base pode ser:

- um valor fixo;
- uma quantidade de dados;
- uma combinação dos dois;
- uma fórmula própria definida pela fonte.

O personagem não possui um valor genérico de Dano que seja comprado ou desenvolvido diretamente.

---

# Escalonamento

Armas, magias e Habilidades podem possuir **Escalonamento**.

O Escalonamento determina se alguma característica do personagem contribui para o Dano causado.

Uma arma pode possuir Escalonamento com:

- [[Força]];
- [[Destreza]];
- Força e Destreza;
- outro Atributo Central;
- outra característica;
- nenhum Escalonamento.

A própria arma, magia ou Habilidade determina:

- qual valor é utilizado;
- quanto desse valor é convertido em Dano;
- se existe algum limite;
- se existem múltiplos Escalonamentos.

> **[[Regra dos Atributos|Atributos]] não são adicionados automaticamente ao Dano.**

Possuir Força 10, por exemplo, não significa receber automaticamente +10 de Dano.

O valor utilizado depende do Escalonamento definido pela fonte.

---

# Proficiência e Dano

[[Proficiência]] representa treinamento e domínio no uso de uma arma.

Ela participa principalmente da [[Precisão]] e do controle da arma.

> **Proficiência não aumenta o Dano automaticamente.**

Classes, Habilidades, Passivas, equipamentos ou propriedades específicas podem fazer com que Proficiência contribua para o Dano.

---

# Dano Mágico

Magias e Habilidades mágicas possuem seu próprio Dano Base e podem possuir seus próprios Escalonamentos.

[[Intelecto]] ou [[Espírito]] não são adicionados automaticamente ao Dano de uma magia.

O Dano mágico pode ser aumentado por fontes como:

- Classes;
- Afinidades;
- Habilidades;
- Passivas;
- equipamentos;
- efeitos especiais;
- Escalonamentos definidos pela própria magia.

Cada magia determina como seu Dano é calculado.

---

# Categorias de Dano

O sistema separa o Dano de acordo com sua natureza.

As categorias principais são:

- **Dano Físico**
- **Dano Mágico**
- **Dano Mental**
- **Dano Biológico**
- **Dano Espiritual**

Cada categoria normalmente interage com sua [[Defesa]] correspondente.

Uma fonte também pode possuir características adicionais, como:

- Melee;
- Curta Distância;
- Média Distância;
- Longa Distância;
- Elemental;
- outras propriedades específicas.

Essas características podem ser utilizadas por Habilidades, equipamentos, Passivas e outros efeitos.

---

# Bônus de Dano

Depois do Dano Base e do Escalonamento, podem ser adicionados bônus provenientes de:

- Classes;
- Raças;
- Habilidades;
- Passivas;
- equipamentos;
- Afinidades;
- condições;
- outros efeitos.

Esses bônus podem afetar:

- todo o Dano;
- determinada categoria de Dano;
- determinada arma;
- determinada Proficiência;
- determinado elemento;
- determinada distância;
- determinada Habilidade;
- outra condição específica.

---

# Ordem de Cálculo

Quando um ataque possuir diferentes bônus, porcentagens, multiplicadores e outros efeitos, utilize:

> **1. Dano Base**  
> **2. Escalonamento**  
> **3. Bônus fixos de Dano**  
> **4. Modificadores percentuais**  
> **5. Multiplicadores**  
> **6. [[Crítico]]**  
> **7. Dano Bruto Final**  
> **8. [[Defesa]]**

Essa ordem é utilizada salvo quando uma regra específica determinar outra forma de cálculo.

---

# Modificadores Percentuais

Depois dos valores fixos, são aplicados os modificadores percentuais.

Quando o cálculo resultar em um número decimal:

> **arredonde para baixo.**

Uma regra específica pode determinar outra forma de arredondamento.

---

# Multiplicadores

Depois dos modificadores percentuais, são aplicados multiplicadores como:

> `×2`, `×3`, `×4`

Multiplicadores diferentes podem funcionar juntos quando nenhuma das regras envolvidas impedir isso.

[[Dano Furtivo]] e outros efeitos podem utilizar multiplicadores próprios.

---

# Crítico

Depois dos modificadores normais do ataque, é resolvido o [[Crítico]].

O Crítico não simplesmente dobra o resultado já rolado.

Ele gera uma **nova execução do Dano daquele ataque**, rolando novamente os dados e aplicando novamente os modificadores que fazem parte daquele ataque.

O Dano original e o Dano adicional do Crítico fazem parte do **mesmo Ataque**.

A [[Defesa]] é aplicada somente depois que todo o Dano Bruto daquele Ataque for determinado.

---

# Acúmulo de Efeitos

Um mesmo Ataque pode receber vários efeitos de Dano simultaneamente.

Bônus fixos, porcentagens, multiplicadores, Dano Furtivo, Crítico e outros efeitos podem funcionar juntos quando nenhuma regra específica impedir essa combinação.

Cada efeito é aplicado seguindo a ordem normal de cálculo.

---

# Defesa

Depois que todo o Dano Bruto do Ataque for calculado, aplica-se a [[Defesa]] correspondente.

A fórmula geral é:

> **Dano Bruto − Defesa = Dano Final**

O Dano Final normalmente não pode ficar abaixo de:

> **0**

Um ataque pode atingir o alvo e ainda causar 0 de Dano caso não consiga superar sua Defesa.

---

# Penetração de Defesa

Algumas armas, Habilidades e efeitos podem ignorar parte da [[Defesa]] do alvo.

A Penetração reduz a Defesa utilizada contra aquele Dano.

Se um efeito ignorar completamente determinada Defesa, ela não será utilizada no cálculo correspondente.

---

# Múltiplos Tipos de Dano

Um único Ataque pode causar mais de um tipo de Dano.

Quando isso acontecer, cada parte do Dano é comparada separadamente com sua [[Defesa]] correspondente.

Depois das reduções, os valores restantes são somados para determinar a perda total de [[Vida]].

---

# Dano sem Ataque

Nem todo Dano exige um teste de [[Ataque]].

Quedas, ambientes perigosos, venenos, armadilhas, efeitos internos e determinadas Habilidades podem causar Dano diretamente.

A própria fonte determina:

- se existe algum teste;
- qual Defesa é utilizada;
- se a Defesa pode reduzir o Dano;
- se alguma Reação pode evitá-lo.

---

# Dano Direto

Alguns efeitos podem determinar que causam **Dano Direto**.

Dano Direto ignora a [[Defesa]] indicada pela própria fonte e reduz diretamente a [[Vida]].

> **Dano Direto não deve ser presumido.**

Um efeito somente ignora Defesa quando sua regra disser explicitamente que isso acontece.

---

# Regra Específica

[[Classes]], [[Raças]], armas, Habilidades, Passivas, equipamentos, Afinidades, [[Condições]] e outros efeitos podem alterar qualquer etapa do cálculo de Dano.

Eles podem:

- adicionar dados;
- adicionar Dano fixo;
- adicionar ou modificar Escalonamentos;
- aumentar ou reduzir Dano por porcentagem;
- aplicar multiplicadores;
- alterar [[Crítico]];
- penetrar ou ignorar [[Defesa]];
- converter um tipo de Dano em outro;
- causar múltiplos tipos de Dano;
- alterar a ordem normal de cálculo.

Quando uma regra específica contradizer esta página:

> **Regra específica > regra geral.**
