let duplicatesCount = 5;
let formData = ZDK.Page.getForm().getValues(); // collecting the data from form

let tempLead = new ZDK.Apps.CRM.Leads.Models.Leads();

// shallow copy the form data to the tempLead
for (key in formData) {
    log("Storing : " + key + " " + formData[key]);
    tempLead[key] = formData[key];
}

let leadName = tempLead.First_Name;
for (let i = 0; i < duplicatesCount; i++) {
    tempLead.First_Name = leadName+" "+String(i+1);
    let newLead = ZDK.Apps.CRM.Leads.create([tempLead]);
    log("New lead "+i+" status " + newLead);
}