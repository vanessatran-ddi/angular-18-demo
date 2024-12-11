import {Component} from "@angular/core";
import {GoabBlock, GoabButton, GoabInput} from "@abgov/angular-components";
import {GoabInputOnChangeDetail} from "@abgov/ui-components-common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: "app-input-search-example",
    templateUrl: "./search-example.component.html",
    standalone: true,
    imports: [
        GoabBlock,
        GoabInput,
        GoabButton,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SearchExampleComponent {
    form!: FormGroup;
    search = "";
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            search: ""
        })
    }
    inputOnChange(event: GoabInputOnChangeDetail) {
    }
    onClick() {

    }
}
