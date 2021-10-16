# Page Layouts 

> Métodos para posicionar elementos na página
- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

## Posicionamentos

Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- value: static|relative|absolute|fixed

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

## static
- por padrão já vem static, fluxo normal, um abaixo do outro, a não ser quando os elementos são inline. 

## relative
- top, right, bottom, left, z-index

Não afeta o posicionamento de outros elementos na página.

## absolute
- top, right, bottom, left, z-index

Cria uma nova "camada", caso não tenha um elemento "pai" relativo, position irá ser absoluto a página.

## fixed
- top, right, bottom, left, z-index

Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

## Element Stacking
É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem de posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.