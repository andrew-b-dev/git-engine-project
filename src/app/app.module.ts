import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Modules
import {IconsProviderModule} from './icons-provider.module';

// Ng-zorro
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {StarOutline, StarFill} from '@ant-design/icons-angular/icons';
import {RepositoriyItemComponent} from './components/home/repositories-list/repositoriy-item/repositoriy-item.component';
import {NzButtonModule} from 'ng-zorro-antd/button';


// Components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchFormComponent} from './components/home/search-form/search-form.component';
import {RepositoriesListComponent} from './components/home/repositories-list/repositories-list.component';


const icons: IconDefinition[] = [StarOutline, StarFill];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFormComponent,
    RepositoriesListComponent,
    RepositoriyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzSelectModule,
    NzCommentModule,
    NzIconModule.forRoot(icons),
    NzAvatarModule,
    NzButtonModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
