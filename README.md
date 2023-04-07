## About

@ngx-tc/rating is an Angular library that provides developers with an easy way to add rating components to their applications. The library includes a set of customizable and reusable components that can be used to display and collect ratings from users.

@ngx-tc/rating is designed to be easy to use and highly customizable, with a focus on performance and scalability. Whether you need to display a simple rating or a complex set of nested ratings, @ngx-tc/rating provides the tools you need to create robust and responsive rating-based interfaces in your Angular applications.

## Usage

Install `@ngx-tc/rating` in your project:

```
npm install @ngx-tc/rating
```

Import `TcRatingModule` e.g. in your `app.module.ts`:
```typescript
import { TcRatingModule } from '@ngx-tc/rating';

@NgModule({
  imports: [
    ...
    TcRatingModule
  ],
})
export class AppModule {}
```

Use the `tc-rating` component in you app:
```html
<tc-rating formControlName="ratingField"></tc-rating>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in @ngx-tc/list and see how they can be used to create powerful and responsive list-based interfaces in your Angular applications.
[http://tc-library.type-code.pro/#/components/ratings](http://tc-library.type-code.pro/#/components/ratings)
