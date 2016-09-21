import { binding, before, after } from "cucumber-tsflow";
 
@binding()
class MySteps {

    @before()
    public beforeAllScenarios(): void {
			console.log('Before all scenarios');			
    }
 
    @after()
    public afterAllScenarios(): void {
			console.log('After all scenarios');
    }
}
 
export = MySteps;
