test("verify the rows count",async({page})=>{
    await page.goto("https://docs.google.com/spreadsheets/d/1xF1RIRzFe5xDOtV3wJ53EjO5tWVAZKUaNBYkcYW-fYU/edit?pli=1&gid=557961477#gid=557961477");
    const rows= await page.locator("table tr row");
    const rowscount=await  rows.count();
    console.log('Totalrows:',rowscount);
    expect(rowscount).toBeGreaterThan(0);

});