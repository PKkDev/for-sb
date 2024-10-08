## Вопрос №8

### Вопрос 

1) Что такое "`<ng-content>`"?
2) Что такое "`<ng-container>`"?
3) Что такое "`<ng-template>`"?
4) Примеры использования.

### Ответ

1) [ng-content](https://angular.dev/guide/components/content-projection)
2) [ng-container](https://angular.dev/api/core/ng-container)
3) [ng-template](https://angular.dev/api/core/ng-template)

#### ng-content

Элемент `<ng-content>` указывает, куда проецировать содержимое внутри шаблона компонента.

#### ng-container

Специальный элемент, который может содержать структурные директивы без добавления новых элементов в DOM.

`<ng-container>` позволяет нам использовать структурные директивы без каких-либо дополнительных элементов, гарантируя, что применяются только те изменения DOM, которые продиктованы самими директивами.

Это не только повышает производительность (пусть и незначительно), поскольку браузер в конечном итоге отрисовывает меньше элементов, но также может быть ценным преимуществом в получении более чистых доменов и стилей.

Это может, например, позволить нам использовать структурные директивы без нарушения стиля, зависящего от точной структуры DOM (как, например, те, которые мы получаем при использовании контейнеров flex, полей, селектора дочернего комбинатора и т.д.).

#### ng-template

Элемент Angular определяющий шаблон, который не отображается по умолчанию.

С помощью `<ng-template>` вы можете определить содержимое шаблона, которое отображается Angular только тогда, когда вы, прямо или косвенно, специально проинструктируете его об этом, позволяя вам иметь полный контроль над тем, как и когда отображается содержимое.

### задача

```html
 
<ng-container
    [ngTemplateOutlet]="template"
    [ngTemplateOutletContext]="{ 
        $implicit: someValue, 
        columnType: column.type, 
    }">
</ng-container>

``` 
