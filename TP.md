# TP

## Bibliothèque MyJquery

### Ajouter une méthode permettant d'ajouter du style css

Exemple d'utilisation :

```js
$.find(selectors)
 .css('color', 'red')
 .css('backgroundColor', 'yellow');
```

### Ajouter une méthode permettant de selectionner un élément frère.

Exemple d'utilisation :

```html
<h2>Titre d'un article</h2>
<p>Lorem ipsum...</p>
```

Obtenir l'élément ```<p>``` depuis l'élément ```h2```

```js
$.find('h2').next().addClass('test');
```

### Ajouter une méthode permettant d'afficher ou cacher un élément

Exemple d'utilisation :

```js
$.find('h2').on('click', function () {
    $('h2').next().toggleHide();
});
```

## Jquery

### Ajouter un compteur de tâches validées

Le compteur doit être représenté sous la forme :  3/12

### Ajouter une transition d'insertion

Ajouter une transition lors de l'ajout d'une tâche dans la todo liste.

### Création d'un plugin

Créer un plugin en vous aidant de la [documentation](https://learn.jquery.com/plugins/basic-plugin-creation/).
