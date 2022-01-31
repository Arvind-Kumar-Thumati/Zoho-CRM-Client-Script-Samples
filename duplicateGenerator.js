/*
 * A static resource used to generate duplicates
 * @module -> the current module to which we need to create duplicates
 *       ex: ZDK.Apps.CRM.Leads
 * @moduleObject -> object of the current module
 *       ex: new ZDK.Apps.CRM.Leads.Models.Leads()
 * @formData -> the page data fetched using ZDK.getForm().getValues()
 * @duplicatesCount -> number of duplicates
 * 
*/

function generateDuplicates(module, moduleObject, formData, duplicatesCount = 10) {
    for (key in formData) {
        console.log("Storing : " + key + " " + formData[key]);
        moduleObject[key] = formData[key];
    }
    for(let i = 0; i < duplicatesCount; i++){
        let newLead = module.create([moduleObject]);
        console.log(newLead);
    }
}
