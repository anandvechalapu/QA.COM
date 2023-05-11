// Salesforce Unit Test
@isTest
private class TestLambdaFunctionality {

    @isTest static void testHandleSubmit() {
        //Arrange
        LambdaFunctionality component = new LambdaFunctionality();
        Test.startTest();
        Event event = new Event();
        event.fields = 'test';

        //Act
        component.handleSubmit(event);

        //Assert
        System.assertEquals(component.response, 'test');

        Test.stopTest();
    }

}