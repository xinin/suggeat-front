import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HelloComponent} from './page/hello/hello.component';
import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {RegisterPageComponent} from './page/register-page/register-page.component';
import {NotFoundPageComponent} from './page/not-found-page/not-found-page.component';
import {RecipePageComponent} from './page/recipe-page/recipe-page.component';
import {UserProfilePageComponent} from './page/user-profile-page/user-profile-page.component';
import {AuthService} from './services/Auth/auth.service';
import {UtilsService} from './services/Utils/utils.service';
import {ConfigService} from './services/Config/config.service';

const appRoutes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'recipe', component: RecipePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'profile', component: UserProfilePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    RecipePageComponent,
    UserProfilePageComponent
  ],
  providers: [UtilsService, AuthService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
