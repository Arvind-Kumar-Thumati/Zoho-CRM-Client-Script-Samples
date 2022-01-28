let duplicatesCount = 0;
let formData = ZDK.Page.getForm().getValues();

duplicatesCount = formData["No_Of_Leads_to_Duplicate"];

let module = ZDK.Apps.CRM.Leads;
let moduleObject = new ZDK.Apps.CRM.Leads.Models.Leads();
generateDuplicates(module, moduleObject, formData, duplicatesCount);