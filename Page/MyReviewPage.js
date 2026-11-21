import {expect} from '@playwright/test';
import { MyReviewPage } from '../pages/MyReviewPage.js';
export class MyReviewPage{
    constructor(page){
        this.page=page;
        this.pagetitle=page.getByText("My Reviews",{exact:true});
        this.recordcount=page.getByText("(1) Record Found",{exact:true});
        this.jobtitlelabel=page.getByText("Job Title",{exact:true});
        this.jobtitlevalue=page.getByText("Hr Manager",{exact:true});
        this.subunitlabel=page.getByText("Sub Unit",{exact:true});
        this.subunitvalue=page.getByText("Human Resource",{exact:true});
        this.ReviewPeriod=page.getByText("Review Period",{exact:true});
        this.selfevaluation=page.getByText("Self Evaluation Status",{exact:true});
        this.reviewstatus=page.getByText("Review Status",{exact:true});
        this.Action=page.getByText("Actions",{exact:true});
        this.evaluateButton=page.getByRole('button',{name:'Evaluate'});

    }
    async VerifyMyReviewPage(){
        await expect(this.pagetitle).toBeVisible();
        await expect(this.recordcount).toBeVisible();
        await expect(this.jobtitlelabel).toBeVisible();
        await expect(this.jobtitlevalue).toBeVisible();
        await expect(this.subunitlabel).toBeVisible();
        await expect(this.subunitvalue).toBeVisible();
        await expect(this.ReviewPeriod).toBeVisible();
        await expect(this.selfevaluation).toBeVisible();
        await expect(this.reviewstatus).toBeVisible();
        await expect(this.Action).toBeVisible();
    }
    async clickevaluatebutton(){
        await this.evaluateButton.click();
    }
}