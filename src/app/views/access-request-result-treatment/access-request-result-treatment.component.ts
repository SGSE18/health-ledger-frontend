import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../../models/request.model';
import { Treatment } from '../../models/treatment.model';
import { StateService } from '../../services/state.service';
import { TreatmentService } from '../../services/treatment.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-access-request-result-treatment',
  templateUrl: './access-request-result-treatment.component.html',
  styleUrls: ['./access-request-result-treatment.component.css']
})
export class AccessRequestResultTreatmentComponent implements OnInit {
  isPharmacy = false;
  request: Request;
  treatment: Treatment;

  redeemButtonOptions: any = {
    active: false,
    text: 'Einlösen',
    spinnerSize: 18,
    raised: true,
    buttonColor: 'primary',
    spinnerColor: 'accent'
  };

  constructor(private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private stateService: StateService,
    private treatmentService: TreatmentService,
    private snackBar: MatSnackBar) {
    this.isPharmacy = stateService.user.type === 'Apotheke';

    this.route.params.map(p => p.request).subscribe(requestId => {
      this.route.params.map(p => p.treatment).subscribe(treatmentId => {
        this.requestService.get().subscribe(requests => {
          this.request = requests.find(r => r.id === requestId);
          this.treatment = this.request.Result.treatment.find(t => t.id === treatmentId);

          console.log(this.treatment);
        });
      });
    });
  }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['/access-request-result', this.request.id]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
    });
  }

  redeem() {
    this.redeemButtonOptions.active = true;
    this.redeemButtonOptions.text = 'Löse ein...';

    this.treatmentService.postRedeem(this.request.publicKey, this.treatment.id).subscribe(rest => {
      this.redeemButtonOptions.active = false;
      this.redeemButtonOptions.text = 'Einlösen';
      this.openSnackBar('Rezept erfolgreich eingelöst!', 'Okay');
    },
      err => {
        this.redeemButtonOptions.active = false;
        this.redeemButtonOptions.text = 'Einlösen';
        this.openSnackBar('FEHLER: Rezept kann nicht eingelöst werden!', 'Okay');
      });
  }

}
