import { Appointment } from "./appointment";
import { Feedback } from "./feedback";

export class Doctor implements IDoctor{
    doctorId : number= 0;
    doctorName : string = "";
    speciality : string = "";
    location : string = "";
    hospitalName : string = "";
    mobileNo : number = 0;
    email : string = "";
    password : string = "";
    chargedPerVisit : number =0 ;
    appointments : Appointment[] =[];
    feedbacks : Feedback[] = [];

}

export interface IDoctor{
    doctorId : number;
    doctorName : string ;
    speciality : string ;
    location : string ;
    hospitalName : string ;
    mobileNo : number ;
    email : string ;
    password : string ;
    chargedPerVisit : number ;
    appointments : Appointment[];
    feedbacks : Feedback[];

}
