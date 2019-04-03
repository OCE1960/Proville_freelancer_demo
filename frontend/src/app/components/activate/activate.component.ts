import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { TokenService } from '../../services/token.service';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { PageContentEditService } from '../../services/page-content-edit.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  pageEdit: FormGroup;
  public viewID;
  public _audio = [];
  public error = {
    activation_code: null,
 };
  public form = {
    activation_code: null,
    _method: 'PUT',
  };
  public loggedIn;
 // public error = [];
  constructor(
    private backService: SignupService,
    private token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private route: ActivatedRoute,
    private editService: PageContentEditService,
    ) { }

    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('id');
        if (id) {
          this.viewID = id;
        }
        });
        if (this.viewID) {
        this.getPage(this.viewID);
  }
      this.pageEdit = new FormGroup({
        activation_code: new FormControl('', Validators.required),
        _method: new FormControl('', Validators.required),
      });
    }

    getPage(id: Number) {
      this.editService.activate_account(this.viewID).
      subscribe(post => {
        this._audio = post;
        const emeka = this._audio;
        for (const activation_code in emeka) {
          if (emeka.hasOwnProperty(activation_code)) {
            const element = emeka[activation_code];
            this.pageEdit.patchValue({
              activation_code: element[0].activation_code,
              // image_path: element[0].image_path,
              _method: 'PUT',
            });
           // console.log('success', element[0].body );
          }
        }
      });
       // console.log( element[0].image_path);
    }


    onSubmit(value) {
      const formData: FormData = new FormData();
      formData.append('activation_code', value.activation_code);
      formData.append('_method', 'PUT');
      // console.log(ImageFile.name);
      // console.log(this.pageEdit.value);
      return this.backService.activate(this.viewID, formData).subscribe(
        data => this.handleResponse(data),
       error => this.handleError(error),
      );
    }
     handleResponse(data) {
      this.router.navigateByUrl('/login');
    }
    handleError (error) {
       this.error = error.error.errors;
    }

}
