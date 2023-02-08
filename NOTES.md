# Reactive form
add reactive form module
create form in html
create model
    export interface Todo (creates the model without any constructor)
    use this way to hold values 
    these are called value objects
bind the form to the model in todo.components.ts
    create the code in todo.components.ts
    go to html to bind
        bind the form -- formGroup = "formName"
        bind the input -- formControlName ="name"
        bind the submit button -- (ngSubmit)="processForm" This is the event handler when submit is click
            write the processForm() function in Todo.component.ts
            keep the form name the same as the model otherwise have to do mapping
            