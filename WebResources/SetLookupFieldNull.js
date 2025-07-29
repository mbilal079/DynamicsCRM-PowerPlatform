function clearBothStudentCourseLookups(executionContext) {
    var formContext = executionContext.getFormContext();
     
    // Check if in Quick Create mode (formType = 1)
    if (formContext.ui.getFormType() === 1) { 
        var parentRecord = formContext.data.entity.getEntityReference();
         
        // If opened from a Contact, clear BOTH lookups
        if (parentRecord && parentRecord.entityType === "contact") {
            // Clear Current Contract
            if (formContext.getAttribute("new_currentStudent")) {
                formContext.getAttribute("new_currentStudent").setValue(null);
            }
             
            // Clear Previous Contract
            if (formContext.getAttribute("new_course")) {
                formContext.getAttribute("new_course").setValue(null);
            }
        }
    }
}