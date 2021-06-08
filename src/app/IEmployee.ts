export interface IEmployee{
  empId: number;
  empName: string;
  empCompany: string;
  empRating: number;
  empReviewCount: number;
  empDeliveries: number;
  empStartRate: number;
  empAvatarUrl: string;
  companyAvatarUrl: string;
  empLocation: string;
  empLanguages: Array<String>;
  empSkills: Object;
}
