import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './base/components/notfound/notfound.component';
import {ProductService} from './base/service/product.service';
import {CountryService} from './base/service/country.service';
import {CustomerService} from './base/service/customer.service';
import {EventService} from './base/service/event.service';
import {IconService} from './base/service/icon.service';
import {NodeService} from './base/service/node.service';
import {PhotoService} from './base/service/photo.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
