*********Question - 1 MacroPolo Game*************

Please find MacroPolo.js file. To run program, just hit this command -> node MacroPolo.js

*********Question - 2 Angular2 questions*********

> What is the difference between imports, declarations, and providers?

-- All these are part of NgModules. 
   NgModule is a class that helps to organize an application into cohesive blocks of functionalities and extend it with capabilities from external libraries. It is a collection of metadata describing  components, directives, pipes and services that are related, in such a way that can be combined with other modules to create an application.
   NgModule is defined with @NgModule decorator. For exp :
   
   @NgModule({
    declarations: [ AppComponent ],
    imports: [  BrowserModule,
				FormsModule,
				HttpModule ],
	providers: [GetOutputFileService],
	bootstrap: [AppComponent]
             })
			 
   Now we can define imports, declaration and providers -
   
   #imports : is used to make supporting modules available in current module. for exp CommonModule is a module that provides all kinds of services and directives one usually wants to use in an Angular application like ngIf, ngFor so using Import we can add this module in our current module. 
   
   #declaration : contains the class types—components, directives, and pipes—that you can add to a module's declarations list. So every component that is part of our application should be declared here else that can't be use. Everything inside declarations knows each other. For example, if we have a component, say EmployeeComponent, which display list of the employeesname, and we also have a pipe, say toupperPipe, which transform string to uppercase letter string. Now If we want to show usernames in uppercase letters in our EmployeeComponent, we can use the toupperPipe which we had created before but how EmployeeComponent know that the toupperPipe exist and how we can access and use it, here comes the declarations, we can declare EmployeeComponent and toupperPipe.
   
   #providers : Providers are usually contain singleton (one instance) objects - services, that other objects have access to through dependency injection (DI). you plan to use an object multiple times, for example GetData service in different components, you just need to define it in providers array, which can be use in multiple components.
   
> What is the difference between components, directives, models, modules, and services?

   First will explain the difference between component and directives. 
   The Directive handles DOM manipulation. Directives main work is to add/remove behaviour to an existing DOM element.
   Basically there are three types of directives in angular -
		1.Component
		2.Structural directives
		3.Attribute directives
        #Component is nothing but also a type of directives with template,styles and logic parts. components are simply classes that are designated as a component with the help of a component decorator(see below exp). Every component has a defined template which can communicate with the code defined in the component class.
	  @Component({
		  selector: 'app-root',
		  templateUrl: './app.component.html',
		  styleUrls: ['./app.component.css']
                 })
				 
	#Structural directives used for changes the DOM layout by adding and removing DOM elements using *ngFor and *ngIf.
	
        #Attribute directives are useful for giving custom baviour in existing elements by applying some logics. for exp - 
			@Directive({
		     selector: '[appHighlight]'
		     }) 
			 logic we can give -> el.style.backgroundColor = 'yellow';

			 
	Now coming to models, modules and services :
	#models : in simple terms we can say models is the structure of your object(how your object should look like),the set of rules and business logic that an application implements for it needs.
	
	#modules : Modules are used to put logical boundaries in our application. Hence, instead of coding everything into one application, we can instead build everything into separate modules to separate the functionality of our application. we already define above regarding angular modules.
	
	#services : A service is a class with well defined purpose and do something common logic which can be use in multiple components of our angular application. Components consume services; that is, we can inject a service into a component, giving the component access to that service class. by using @Injectable() decorator to provide the metadata that allows Angular to inject it into a component as a dependency.
	            Mutilple services can be define for one application in app.module using providers. for exp -
				providers: [GetOutputFileService, GetScoreApiService]
				

**************QUESTION 3 - Implementing a User Story*****************************

 This application is build with - 
		angular-cli: 1.0.0-beta.25.5
		node: 8.11.1
		npm : 5.6.0
		Angular 2
		
-->To run this angular application follow below staps -
   1. Open console and go to angtest directory 
   2. run npm install
   3. run npm start
   4. open InternetExplorer hit http://localhost:4200 server.

*Input file is placed in same folder (angtest)
*ScreenShots are attached.