import { NgModule } from '@angular/core';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import {
	MatButtonModule, MatIconModule, MatToolbarModule,
	MatListModule, MatCardModule, MatProgressSpinnerModule,
	MatDialogModule, MatCheckboxModule, MatRadioModule,
	MatTabsModule, MatSelectModule, MatSliderModule,
	MatTableModule, MatExpansionModule, MatSidenavModule,
	MatGridListModule, MatFormFieldModule, MatTooltipModule,
	MatMenuModule, MatProgressBarModule, MatChipsModule,
	MatButtonToggleModule, MatInputModule, MatSlideToggleModule,
	MatAutocompleteModule, MatPaginatorModule, MatBadgeModule,
	MatSnackBarModule,
} from '@angular/material';

export const MAT_MODULES = [
	MatButtonModule, MatIconModule, MatToolbarModule,
	MatListModule, MatCardModule, MatProgressSpinnerModule,
	MatDialogModule, MatCheckboxModule, MatRadioModule,
	MatTabsModule, MatSelectModule, MatSliderModule,
	MatTableModule, MatExpansionModule,
	MatSidenavModule, MatGridListModule, MatFormFieldModule,
	MatSliderModule, MatMenuModule, MatTooltipModule,
	MatProgressBarModule, MatChipsModule, MatButtonToggleModule,
	MatInputModule, MatSlideToggleModule, MatAutocompleteModule,
	MatPaginatorModule, MatBadgeModule, ScrollDispatchModule,
	MatSnackBarModule
];

// @NgModule({
//   imports: [].concat(Mat_MODULES),
//   exports:[].concat(Mat_MODULES),
//   declarations: []
// })
// export class MaterialModule { }

//export MAT_MODULES;