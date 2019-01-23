import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllwordsComponent } from './allwords/allwords.component';
import { NewWordsComponent } from './new-words/new-words.component';
import { AllWordsComponent } from './all-words/all-words.component';
import { SearchWordsComponent } from './search-words/search-words.component';

@NgModule({
  declarations: [
    AppComponent,
    AllwordsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
