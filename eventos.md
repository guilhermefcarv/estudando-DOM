# Eventos


## Eventos via HTML
* A DOM é direcionada a eventos(clickar em algo, mover o mouse, rodar o scroll)

### Como configurar o HTML?

* Adicionar o "on..." onde você deseja realizar o evento
* Nesse caso, o utilizaremos o `onclick` no `<h1>Meu Blog</h1>`
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Aprendendo DOM</title>
    </head>
    <body>
        <header>

            <h1 onclick="print()">Meu Blog</h1> <!--aqui está o exemplo -->

        </header>
            <p class="one">casual de luxo</p>
    </body>

    <script src="./script.js"></script>

    </html>
```

### Parte do javascript

```js
    function print() {
        console.log('print')
    } 
```


## Eventos via teclado

### Como configurar o HTML?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo DOM</title>
</head>
<body>
    <header>

        <h1 onclick="print()">Meu Blog</h1> 

    </header>
      
        <input type="text">

        <p class="one">casual de luxo</p>
</body>

<script src="./script.js"></script>

</html>

```

### Parte do javascript

```js
    const input = document.querySelector('input');

    input.onkeydown = function() {
    console.log('clickou')
}
```

## Eventos via JavaScript - Primeiro método


### Como configurar o HTML?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo DOM</title>
</head>
<body>
    <header>

        <h1>Meu Blog</h1> 

    </header>
      
        <input type="text">

        <p class="one">casual de luxo</p>
</body>

<script src="./script.js"></script>

</html>

```

### Parte do javascript

```js
    const h1 = document.querySelector('h1');

    h1.addEventListener('mouseover', print)//função que recebe 2 parâmetros: primeiro o tipo do evento, segundo a função que ele vai executar

    function print() {
    console.log('print')
    }
```

## Eventos via JavaScript - Segundo método(menos recomendado)


### Como configurar o HTML?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo DOM</title>
</head>
<body>
    <header>

        <h1>Meu Blog</h1> 

    </header>
      
        <input type="text">

        <p class="one">casual de luxo</p>
</body>

<script src="./script.js"></script>

</html>

```

### Parte do javascript

```js
    const h1 = document.querySelector('h1');

    h1.onclick = print

    function print() {
        console.log('print')
    } 
```


## Argumento `event`

* Aprende o conceito e depois pesquisa sobre, sem precisar decorar todos os tipos de `events` que existem

### Como configurar o HTML?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo DOM</title>
</head>
<body>
    <header>

        <h1>Meu Blog</h1> 

    </header>
      
        <input type="text">

        <p class="one">casual de luxo</p>
</body>

<script src="./script.js"></script>

</html>

```

### Parte do javascript

```js
    const input = document.querySelector('input');

    input.onkeydown = function(event) {
        console.log(event.key)
    }
```