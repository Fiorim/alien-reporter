import { Question } from './question';

export interface AlienForm {
    userId: number;
    formId: string;
    lastChangedDate: string;
    lastChangedBy: string;
    form: Question[];
}

