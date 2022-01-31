const duplicatesCount = 5;
const formData = ZDK.Page.getForm().getValues(); // collecting the data from form
const leadObjects = [];

for (let i = 0; i < duplicatesCount; i++) {
  const tempLead = new ZDK.Apps.CRM.Leads.Models.Leads();
  for (const key in formData) {
      log("Storing : " + key + " " + formData[key]);
      tempLead[key] = formData[key];
  }
  tempLead.First_Name = `${tempLead.First_Name} ${i + 1}`;
  leadObjects.push(tempLead);
}

ZDK.Apps.CRM.Leads.create(leadObjects);