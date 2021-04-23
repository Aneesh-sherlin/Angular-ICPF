import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HRSettingsComponent } from './Forms/hr-settings/hr-settings.component';
import { MatDialogBoxComponent } from './shared/mat-dialog-box/mat-dialog-box.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { JnavComponent } from './Forms/jnav/jnav.component';
import { EmployeeCreationModule } from './Forms/employee-creation/employee-creation.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DesignationsComponent } from './Forms/hr-settings/designations/designations.component';
import { DashboardComponent } from './forms/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from './shared/toastr.service';




@NgModule({
  declarations: [
    AppComponent,
    HRSettingsComponent,
    JnavComponent,
    MatDialogBoxComponent,
    DesignationsComponent,
    DashboardComponent,

  ],
  imports: [
    MaterialModule,
    AppRoutingModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    EmployeeCreationModule,
    MatIconModule,
    MatListModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:1000,positionClass:'toast-top-right',preventDuplicates:true})
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent],
  entryComponents:[MatDialogBoxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
