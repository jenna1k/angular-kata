import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieHomeComponent } from './home/home.component';
import { MovieSearchComponent } from './search/search.component';
import { MovieItemComponent } from './item/item.component'

@NgModule({
  declarations: [
    MovieHomeComponent,
    MovieSearchComponent,
    MovieItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ // for outside of movie module
    MovieHomeComponent
  ]
})
export class MovieModule { }
