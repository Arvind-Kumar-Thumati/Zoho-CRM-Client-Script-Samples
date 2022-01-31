/*
 * A static resource used to generate duplicates
 * @api_name -> the current module's api_name to which we need to create duplicates
 * @duplicatesCount -> number of duplicates to create
 * 
*/

function generateDuplicates(api_name, duplicatesCount = 10) {
    const formData = ZDK.Page.getForm().getValues();
    const moduleObjects = [];


    for (let i = 0; i < duplicatesCount; i++) {
        const tempObject = new ZDK.Apps.CRM[api_name].Models[api_name]();
        for (const key in formData) {
            log("Storing : " + key + " " + formData[key]);
            tempObject[key] = formData[key];
        }
        moduleObjects.push(tempObject);
    }

    ZDK.Apps.CRM[api_name].create(moduleObjects);
}
