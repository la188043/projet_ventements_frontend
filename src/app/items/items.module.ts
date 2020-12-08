import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';


@NgModule({
    declarations: [ItemsRoutingModule.components],
    exports: [
        ManageItemsComponent
    ],
    imports: [
        CommonModule,
        ItemsRoutingModule
    ]
})
export class ItemsModule { }