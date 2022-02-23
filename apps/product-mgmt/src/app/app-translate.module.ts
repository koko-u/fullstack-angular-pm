import { LOCALE_ID, NgModule } from '@angular/core'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { registerLocaleData } from '@angular/common'
import localeJa from '@angular/common/locales/ja'
import localeJaExtra from '@angular/common/locales/extra/ja'

registerLocaleData(localeJa, 'ja', localeJaExtra)

export const HttpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http)

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'ja',
    }),
  ],
  exports: [TranslateModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ja' }],
})
export class AppTranslateModule {}
