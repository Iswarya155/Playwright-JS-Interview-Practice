import{test,expect} from '@playwright/test';

class MyActionpage{
    constructor(page){
        this.page=page;
        this.MyAction=page.getByText("MyAction",{exact:true});
        this.pendingselfreview=page.getByText("(1) Pending Self Review",{exact:true});
    }
    async openDashboard() {
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
        );
    }

    async VerifyMyAction(){
        await expect(this.MyAction).toBeVisible();
        await expect(this.pendingselfreview).toBeVisible();

    }
    async clickingpendingselfreview(){
        await this.pendingselfreview.click();
    }
}