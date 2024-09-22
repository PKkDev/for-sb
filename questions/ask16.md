## Вопрос №16

### Вопрос 

1) Расскажите про область действия стилей в angular, какая бывает, как задаётся и на что влияет
2) Расскажите про `:host`, `:host-context` и `::ng-deep`

### Ответ

1) [viewencapsulationemulated](https://angular.dev/guide/components/styling#viewencapsulationemulated) 
2) [angular-host-context](https://blog.angular-university.io/angular-host-context/) 

У каждого компонента есть параметр view encapsulation, который определяет, как фреймворк определяет стили компонента. Существует три режима инкапсуляции вида: `Emulated`, `ShadowDom` и `None`

```javascript

@Component({
  ...,
  encapsulation: ViewEncapsulation.None,
})
export class ProfilePhoto { }

```

