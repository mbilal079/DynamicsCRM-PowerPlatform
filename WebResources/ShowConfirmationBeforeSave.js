executionContext.getEventArgs().preventDefault();

var isOnHold = false;
Xrm.WebApi.retrieveRecord("account", id, "?$select=creditonhold").then(
     function (result) {
         isOnHold = result["creditonhold"];
     }
 );



if (isOnHold) {
     Xrm.Navigation.openConfirmDialog({ text: 'Credit Hold - Save OK?' }).then(
         function (success) {
             if (success.confirmed) {
                 formContext.data.save();
             }
         }
     );
}
else 
    formContext.data.save();