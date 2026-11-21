import { test, expect } from '@playwright/test';
import {MyActionPage} from'../pages/MyActionPage.js';
import {MyReviewPage} from'../pages/MyReviewPage.js';

test("Verify the MyReviewPage",async({page})=>{


    await expect(page.getByText("My Reviews",{exact:true})).toBeVisible();
    await expect(page.getByText("(1) Record Found",{exact:true})).toBeVisible();
    await expect(page.getByText("Job Title",{exact:true})).toBeVisible();
    await expect(page.getByText("Hr Manager",{exact:true})).toBeVisible();
    await expect(page.getByText("Sub Unit",{exact:true})).toBeVisible();    
    await expect(page.getByText("Human Resource",{exact:true})).toBeVisible();
    await expect(page.getByText("Review Period",{exact:true})).toBeVisible();
    await expect(page.getByText("Self Evaluation Status",{exact:true})).toBeVisible();
    await expect(page.getByText("Review Status",{exact:true})).toBeVisible();
    await expect(page.getByText("Actions",{exact:true})).toBeVisible();
    await page.getByRole(button,{name:Evaluate}).click();
    
    })


