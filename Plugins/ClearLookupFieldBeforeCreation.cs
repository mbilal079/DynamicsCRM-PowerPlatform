public class ClearBothContractLookups : IPlugin
{
    public void Execute(IServiceProvider serviceProvider)
    {
        IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
         
        if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity)
        {
            Entity contact = (Entity)context.InputParameters["Target"];
             
               // Clear BOTH fields if they exist
                if (contact.Contains("new_currentcontract"))
                    contact["new_currentcontract"] = null;
                 
                if (contact.Contains("new_previouscontract"))
                    contact["new_previouscontract"] = null;
 
              // or remove them from the input parameters 
                  contact.Attributes.Remove("new_currentcontract");
                  contact.Attributes.Remove("new_previouscontract");
 
            }
        }
    }
}