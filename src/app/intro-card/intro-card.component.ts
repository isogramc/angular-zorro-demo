import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.component.html'
})
export class IntroCardComponent {

  @Input() employeeDetails: any;

  empId: number = 1;
  empName: string = "Lance Armstrong";
  empCompany: string = "Test Company";
  empRating: number = 5;
  empReviewCount: number = 15;
  empDeliveries: number = 5;
  empStartRate: number = 112;
  empAvatarUrl: string = "https://uxpin.s3.amazonaws.com/faces/45.png?1620304026388";
  companyAvatarUrl = this.sanitization.bypassSecurityTrustStyle(`url(${"<svg version=\"1.2\" preserveAspectRatio=\"none\" viewBox=\"0 0 512 512\" class=\"ng-element\" data-id=\"0a16f68120c74b5ba3ac988b6aaf8e65\" style=\"opacity: 1; mix-blend-mode: normal; overflow: visible; width: 16px; height: 16px; transform: rotate(0deg) translate(245px, 358px);\"><path d=\"M128 216c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z\" vector-effect=\"non-scaling-stroke\" style=\"fill: rgb(115, 115, 148);\"></path></svg>"})`);
  empLocation: string = "Bali";
  empLanguages: Array<String> = ["English", "Russian", "Spanish"];
  empSkills: Object = [{item: "Agile"}, {item: "Scrum"},{item: "App Development"},{item: "Big Data"},{item: "Analytics"}];

  constructor(private sanitization:DomSanitizer, private router: Router ) {
  }

  ngOnInit(): void {
    this.empId = this.employeeDetails.empId;
    this.empName = this.employeeDetails.empName;
    this.empCompany = this.employeeDetails.empCompany;
    this.empRating = this.employeeDetails.empRating;
    this.empReviewCount = this.employeeDetails.empReviewCount;
    this.empDeliveries = this.employeeDetails.empDeliveries;
    this.empStartRate = this.employeeDetails.empStartRate;
    this.empAvatarUrl = this.employeeDetails.empAvatarUrl;
    this.companyAvatarUrl = this.sanitization.bypassSecurityTrustStyle(`url(${this.employeeDetails.companyAvatarUrl})`);
    this.empLocation = this.employeeDetails.empLocation;
    this.empLanguages = this.employeeDetails.empLanguages;
    this.empSkills = this.employeeDetails.empSkills;
  }

  createNew(id: number, name: string): void{
    const navigateToNewWithUser: NavigationExtras = {
      fragment: 'new',
      queryParams: {'empId': id, 'empName': name}
    };

    this.router.navigate(['/send-offer'], navigateToNewWithUser);
  }

  preventDefault (e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('tag can not be closed.');
  }

}
