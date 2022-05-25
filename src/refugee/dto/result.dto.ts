export class FormResultDto {
  formId: string;
  formTitle: string;
  email: string;
  e: any;
  results: ResultDto[];
}

export class ResultDto {
  id: number;
  type: string;
  title: string;
  response: string | any[];
}
