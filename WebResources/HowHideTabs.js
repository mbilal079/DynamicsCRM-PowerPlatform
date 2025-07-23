function showHideTab(executionContext) {
    var formContext = executionContext.getFormContext();

    // Replace 'tab_name' with your actual tab name
    var tab = formContext.ui.tabs.get("tab_name");

    if (tab) {
        // Example: Show the tab if a field has a specific value
        var fieldValue = formContext.getAttribute("new_status").getValue();

        if (fieldValue === "show") {
            tab.setVisible(true);
        } else {
            tab.setVisible(false);
        }
    }
}