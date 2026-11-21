import { test, expect } from '@playwright/test';


test.describe('Orange Dashboard',()=>{

    test('Verify Dashboard title is displayed',async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        await expect(page.getByText("Dashboard")).toBeVisible();
    
    test('Verify left navigation menu',async({page})=>{

        await expect(page.getByText("Admin",{exact:true}).first()).toBeVisible();
        await expect(page.getByText("PIM",{exact:true})).toBeVisible();        
        await expect(page.getByText("Leave",{exact:true})).toBeVisible();

}); 
    });
    test("Verify admin navigation",async({page})=>{
        await page.getByText("Admin",{exact:true}).first().click();
        await expect(page).toHaveURL(/admin/viewSystemUsers);
    });

    test("Verify PIM navigation",async({page})=>{
        await page.getByText("PIM",{exact:true}).nth(1).click();
        await expect(page).toHaveURL(/pim/viewEmployeeList);
    });
});
