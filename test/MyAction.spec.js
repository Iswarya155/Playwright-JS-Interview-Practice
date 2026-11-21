import { test, expect } from '@playwright/test';
import { MyActionPage } from '../pages/MyActionPage.js';
test.describe('Orange Dashboard',()=>{
    
    test("Verify the my action categories",async({page})=>{
        const myActionPage =new MyActionPage(page); 
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        //Verify My Action Section
        await expect(page.getByText("My Actions",{exact:true})).toBeVisible();
        const pendingselfreview= page.getByText("(1) Pending Self Review",{exact:true});
        
        await pendingselfreview.click();
        // await page.getByText("(1) Pending Self Review",{exact:true}).click();
        // await page.locator(".oxd-text.oxd-text--p").click();
        await expect(page).toHaveURl('/\/performance\/myPerformanceReview/');
    })
        
})












