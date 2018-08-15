import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatProgressBarModule, MatGridListModule,MatSidenavModule, MatTabsModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatListModule, MatSnackBarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: 
   [
      MatButtonModule
    , MatCheckboxModule
    , MatToolbarModule
    , MatCardModule
    , MatFormFieldModule
    , MatProgressSpinnerModule  
    , MatInputModule
    ,BrowserAnimationsModule
    ,MatProgressBarModule
    ,MatGridListModule
    ,MatSidenavModule
    ,MatTabsModule
    ,MatIconModule
    ,MatTableModule
    ,MatPaginatorModule
    ,MatSnackBarModule
    ,MatSelectModule
    ,MatSortModule
    ,MatListModule
   ],
   
  exports: 
    [
        MatButtonModule
        ,MatCheckboxModule
        ,MatToolbarModule
        ,MatCardModule
        ,MatFormFieldModule
        ,MatProgressSpinnerModule  
        ,MatInputModule
        ,MatProgressBarModule
        ,MatGridListModule
        ,MatSidenavModule
        ,MatTabsModule
        ,MatIconModule
        ,MatTableModule
        ,MatPaginatorModule
        ,MatSnackBarModule
        ,MatSelectModule
        ,MatSortModule
        ,MatListModule
        
    ],
})
export class MyOwnCustomMaterialModule { }